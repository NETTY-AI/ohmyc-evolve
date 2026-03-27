# omc-evolve

ohmyc Evolve Cycle — 프로토타입 자가 진화 시스템.

에이전트가 프로토타입을 반복 개선하고, 매 이터레이션을 사람이 웹 URL로 확인/평가한다.

## 구조

```
Evaluate → Plan → Build → Review(2-agent) → Publish(URL) → 사람 피드백 → 반복
```

## 디렉토리

```
omc-evolve/
├── prototype/
│   ├── current/          ← 최신 빌드 (배포 대상)
│   │   └── index.html
│   └── versions/         ← 이터레이션 아카이브
│       ├── v000/         ← 초기 버전
│       ├── v001/
│       └── ...
├── docs/
│   ├── SYSTEM.md         ← 시스템 설계 문서
│   └── CHECKLIST.md      ← SSOT 기반 평가 체크리스트
├── scripts/
│   └── screenshot.sh     ← Playwright 스크린샷 캡처
└── README.md
```

## 피델리티 래더

| 레벨 | 목표 |
|------|------|
| L1: Flow | 핵심 유저 저니 존재 |
| L2: Interaction | 기억/온도/성장 체감 |
| L3: Visual | VI.md 토큰 완전 적용 |
| L4: Polish | 애니메이션, 접근성 |

## SSOT 참조

| 문서 | 역할 |
|------|------|
| IDENTITY.md | 원칙, 경계, 북극성 |
| UX.md | UX 원칙, 행동 규칙 |
| CHARACTER-AGENT-SPEC.md | Memory/Action/Growth 스펙 |
| VI.md | 시각 정체성, 디자인 토큰 |

## 배포

`prototype/current/` → GitHub Pages (main 브랜치)

- 최신 프로토타입: https://netty-ai.github.io/omc-evolve/current/
- 리뷰 포털: https://netty-ai.github.io/omc-evolve/review.html
- 버전별: https://netty-ai.github.io/omc-evolve/versions/v000/
