# omc-evolve 평가 체크리스트

> SSOT: IDENTITY.md, UX.md, CHARACTER-AGENT-SPEC.md, VI.md에서 추출
> 에이전트 리뷰어가 매 이터레이션마다 이 기준으로 채점한다.

---

## L1: Flow (핵심 플로우 존재)

| # | 체크 항목 | 출처 | 통과 기준 |
|---|----------|------|----------|
| F1 | 온보딩 → 캐릭터 선택 → 첫 대화 플로우 | UX.md | 3단계 모두 존재 |
| F2 | 선제 발화(proactive turn) 시뮬레이션 | SPEC > Action | 캐릭터가 먼저 말을 거는 장면 1개+ |
| F3 | 유저 주도 턴(initiated turn) 진입 경로 | UX.md 원칙 2,3 | 유저가 먼저 대화 시작하는 경로 |
| F4 | Home/Discover/Chats/Profile 4탭 | VI.md Tab Bar | 탭 구조 존재 |
| F5 | 부재 → 복귀 시나리오 | UX.md 원칙 1 | 온도 하강/복구 플로우 |
| F6 | 하루 사이클 (아침/낮/저녁) | 프로토타입 v1 | 시간대별 화면 전환 |

**통과:** 6/6

---

## L2: Interaction (에이전트 특성 체감)

| # | 체크 항목 | 출처 | 통과 기준 |
|---|----------|------|----------|
| I1 | Memory 작동 시각화 (Memory Pill 등) | SPEC > Memory | 기억 참조가 UI로 보임 |
| I2 | 온도 시스템 시각화 (수치 + 느낌) | UX.md, VI.md | 온도 표시 + 변화 체감 |
| I3 | 캐릭터 성장 변화 체감 | SPEC > Growth | tone/행동 변화가 드러남 |
| I4 | 인위적 잠금 요소 없음 | UX.md 원칙 1 금지 | 스트릭 벌칙, 죄책감 없음 |
| I5 | SOUL.md 발현 일관성 | IDENTITY 후성유전학 | 캐릭터 성격 일관 |
| I6 | 양방향 상호작용 | UX.md 원칙 2 | 캐릭터→유저, 유저→캐릭터 양쪽 |
| I7 | 기억 투명성 UI | SPEC > Memory 투명성 | 유저가 기억 목록을 볼 수 있음 |

**통과:** 5/7 이상

---

## L3: Visual (VI 정합성)

| # | 체크 항목 | 출처 | 통과 기준 |
|---|----------|------|----------|
| V1 | Tint `#FF8552` 적용 | VI.md Tint | CTA, 활성 탭, 유저 버블 |
| V2 | Apple HIG 레이아웃 | VI.md Foundation | 8pt grid, 44pt 터치 타겟 |
| V3 | Liquid Glass 소재 | VI.md Liquid Glass | Tab Bar, Nav, Memory Pill |
| V4 | 에이전트 상태 모션 | VI.md 모션 | Breathe, Think, Respond, Grow 중 2개+ |
| V5 | 타이포그래피 위계 | VI.md Typography | Dynamic Type 기반 크기/웨이트 |
| V6 | 다크 모드 | VI.md Dark Mode | `prefers-color-scheme` 대응 |
| V7 | 캐릭터 카드 스펙 | VI.md Character Card | 2:3, 오버레이, Alive Dot |
| V8 | 채팅 버블 스펙 | VI.md Chat Bubble | 캐릭터 좌/유저 우, radius |
| V9 | 브랜드 보이스 | VI.md Brand Voice | UI 텍스트 톤 (친구처럼, 짧게) |

**통과:** 7/9 이상

---

## L4: Polish (완성도)

| # | 체크 항목 | 출처 | 통과 기준 |
|---|----------|------|----------|
| P1 | 화면 전환 애니메이션 | VI.md Motion | 자연스러운 페이드/슬라이드 |
| P2 | 마이크로인터랙션 | Apple HIG | 버튼 피드백, 스크롤 |
| P3 | 엣지 케이스 처리 | VI.md Brand Voice | 빈 상태, 에러, 로딩 |
| P4 | 접근성 | VI.md Accessibility | 색상 대비, Reduce Motion |
| P5 | 반응형 | Apple HIG | 다양한 뷰포트 |

**통과:** 4/5 이상
