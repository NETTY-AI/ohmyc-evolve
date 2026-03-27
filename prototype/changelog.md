# omc-evolve Changelog

## v0.1.3 (2026-03-26) — L4 Complete (5/5)
- **P3 Edge Cases**: skeleton loading bubbles in chat (2s shimmer → resolves to real chat), error banner component (`error-banner`) on chat + discover screens (dismissable), empty state component (`empty-state`) on Chats screen with CTA to Discover
- **P5 Responsive**: `@media (max-width:500px)` — phone frame → 100vw × 100svh, notch hidden; `@media (max-width:374px)` — compact spacing tokens; `@media (min-width:900px)` — outer padding
- Flow Navigator: 9번 섹션 "Edge Cases (P3)" 추가 — Error/Loading/Empty 각 상태 직접 탐색 가능
- L4 5/5 달성 → 정지 조건 충족 (HEARTBEAT_OK)

## v0.1.2 (2026-03-26) — L3 Complete
- **V9 Brand Voice**: UI 텍스트 전면 개선 — "Get Started" → "Let's find your match", "Search characters" → "Find your next character", "No plans yet" → "Tell Lumi your plans", closing/home/store 문구 전반 친구 톤으로
- **P4 Accessibility**: `prefers-reduced-motion` 쿼리 추가 — 모든 애니메이션/전환 정적 처리. `forced-colors` 대응 추가
- L3 9/9 달성 (V9 추가), L4 3/5 (P4 추가)

## v0.1.1 (2026-03-26)
- System dark mode (prefers-color-scheme) — V6
- Think + Respond agent state motions — V4
- Growth Ring visualization on character profile — I3
- 5th Create tab (VI.md alignment)
- Brand voice polish — V9
- Growth-aware evening chat tone — I3

## v0.1.0 (2026-03-26)
- Core flow prototype: onboarding → chat → home → day cycle
- Temperature system with glow visualization
- Memory pills in chat
- Mini-app system (Today/Memories/Meals)
- Discover marketplace, Character profile, Chats list, Profile
- Credits system

## v0.0.0 (2026-03-26)
- Initial placeholder (wordmark + tagline only)
