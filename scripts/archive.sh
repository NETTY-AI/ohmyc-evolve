#!/bin/bash
# archive.sh — 버전 스냅샷 생성
# Usage: ./scripts/archive.sh <version> "<label>"
# Example: ./scripts/archive.sh v0.3.0 "Cycle 3: New feature"
set -euo pipefail

VERSION="${1:?Usage: archive.sh <version> \"<label>\"}"
LABEL="${2:?Usage: archive.sh <version> \"<label>\"}"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CURRENT="$ROOT/prototype/current"
TARGET="$ROOT/prototype/versions/$VERSION"
STATE="$ROOT/prototype/state.json"

# Validate
if [ ! -f "$CURRENT/index.html" ]; then
  echo "Error: $CURRENT/index.html not found"
  exit 1
fi
if [ -d "$TARGET" ] && [ -f "$TARGET/meta.json" ]; then
  echo "Error: $TARGET already archived (meta.json exists)"
  exit 1
fi

# 1. Create snapshot directory
mkdir -p "$TARGET"

# 2. Copy prototype files
cp "$CURRENT/index.html" "$TARGET/"
[ -f "$CURRENT/creator.html" ] && cp "$CURRENT/creator.html" "$TARGET/"

# Collect file list for meta.json
FILES='["index.html"'
[ -f "$TARGET/creator.html" ] && FILES="$FILES, \"creator.html\""
FILES="$FILES]"

# 3. Archive design notes if they exist
if [ -d "$CURRENT/screens" ] && [ "$(ls -A "$CURRENT/screens" 2>/dev/null)" ]; then
  mkdir -p "$TARGET/design"
  cp "$CURRENT/screens"/* "$TARGET/design/"
fi

# 4. Generate meta.json
DATE=$(date +%Y-%m-%dT%H:%M:%S%z)
DATE_SHORT=$(date +%Y-%m-%d)
cat > "$TARGET/meta.json" <<EOF
{
  "version": "${VERSION#v}",
  "created_at": "$DATE",
  "fidelity_level": null,
  "checklist_score": null,
  "changes": [],
  "review": null,
  "human_feedback": null,
  "url": "https://netty-ai.github.io/omc-evolve/versions/$VERSION/"
}
EOF

# 5. Update state.json — add version entry at top of versions array
# Uses a simple python one-liner for JSON manipulation
python3 -c "
import json, sys
with open('$STATE') as f:
    s = json.load(f)
entry = {'version': '$VERSION', 'label': '$LABEL', 'date': '$DATE_SHORT', 'files': json.loads('$FILES'), 'fidelity': None}
s['versions'].insert(0, entry)
s['current_version'] = '$VERSION'
with open('$STATE', 'w') as f:
    json.dump(s, f, indent=2, ensure_ascii=False)
    f.write('\n')
"

# 6. Append to changelog
cat >> "$ROOT/prototype/changelog.md" <<EOF

## $VERSION ($DATE_SHORT) — $LABEL
- (fill in changes)
EOF

echo "Archived: $TARGET"
echo "  meta.json created (fill in fidelity_level, checklist_score, changes)"
echo "  state.json updated (current_version → $VERSION)"
echo "  changelog.md entry added"
