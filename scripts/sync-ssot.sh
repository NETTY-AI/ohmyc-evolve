#!/bin/bash
# sync-ssot.sh — SSOT 문서를 omc-evolve(원본)에서 netty-datacenter로 싱크
#
# omc-evolve/docs/ 가 원본(SSOT)
# netty-datacenter/omc/ 는 참조 복사본
#
# 사용법: ./scripts/sync-ssot.sh [datacenter-path]
# 기본: $HOME/_P/company/netty

set -euo pipefail

DATACENTER="${1:-$HOME/_P/company/netty}"
OMC="$DATACENTER/07_사업운영/프로젝트/omc"
SOURCE="$(cd "$(dirname "$0")/.." && pwd)/docs"

echo "📄 Syncing SSOT: omc-evolve → netty-datacenter"
echo "   Source (SSOT): $SOURCE"
echo "   Target (copy): $OMC"

cp "$SOURCE/IDENTITY.md" "$OMC/"
cp "$SOURCE/UX.md" "$OMC/"
cp "$SOURCE/CHARACTER-AGENT-SPEC.md" "$OMC/"
cp "$SOURCE/VI.md" "$OMC/브랜드/"
cp "$SOURCE/FLOWS.md" "$OMC/설계/"
cp "$SOURCE/GLOSSARY.md" "$OMC/" 2>/dev/null || true

echo "✅ Synced $(ls "$SOURCE"/{IDENTITY,UX,CHARACTER-AGENT-SPEC,VI,FLOWS,GLOSSARY}.md 2>/dev/null | wc -l | tr -d ' ') documents"
echo "   Direction: omc-evolve (원본) → netty-datacenter (복사본)"
echo "   Time: $(date)"
