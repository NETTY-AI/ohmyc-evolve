#!/bin/bash
# sync-ssot.sh — SSOT 문서를 netty-datacenter에서 ohmyc-evolve로 싱크
#
# 사용법: ./scripts/sync-ssot.sh [datacenter-path]
# 기본: $HOME/_P/company/netty

set -euo pipefail

DATACENTER="${1:-$HOME/_P/company/netty}"
OMC="$DATACENTER/07_사업운영/프로젝트/omc"
TARGET="$(dirname "$0")/../docs/ssot"

echo "📄 Syncing SSOT documents..."
echo "   Source: $OMC"
echo "   Target: $TARGET"

cp "$OMC/IDENTITY.md" "$TARGET/"
cp "$OMC/UX.md" "$TARGET/"
cp "$OMC/CHARACTER-AGENT-SPEC.md" "$TARGET/"
cp "$OMC/브랜드/VI.md" "$TARGET/"
cp "$OMC/설계/FLOWS.md" "$TARGET/"
cp "$OMC/GLOSSARY.md" "$TARGET/" 2>/dev/null || true

# Update sync timestamp
sed -i '' "s/^20.*$/$(date -u +%Y-%m-%dT%H:%M:%S%z)/" "$TARGET/README.md" 2>/dev/null || true

echo "✅ Synced $(ls "$TARGET"/*.md | wc -l | tr -d ' ') documents"
echo "   Last sync: $(date)"
