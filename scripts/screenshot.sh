#!/bin/bash
# omc-evolve 프로토타입 스크린샷 캡처
# Usage: ./scripts/screenshot.sh <version>
# Example: ./scripts/screenshot.sh v001

VERSION=${1:-"current"}
TARGET="prototype/${VERSION}/index.html"
OUTPUT="prototype/versions/${VERSION}/screenshot.png"

if [ "$VERSION" = "current" ]; then
  TARGET="prototype/current/index.html"
  OUTPUT="prototype/current/screenshot.png"
fi

if [ ! -f "$TARGET" ]; then
  echo "Error: $TARGET not found"
  exit 1
fi

npx playwright screenshot \
  --viewport-size=393,852 \
  --device-scale-factor=3 \
  "file://$(pwd)/$TARGET" \
  "$OUTPUT"

echo "Screenshot saved: $OUTPUT"
