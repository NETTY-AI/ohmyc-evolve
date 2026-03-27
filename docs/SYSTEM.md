# omc 프로토타입 Evolve Cycle 시스템

> 상태: **설계 초안** (2026-03-26)
> 작성: devmon
> 상위 문서: `IDENTITY.md`, `UX.md`, `CHARACTER-AGENT-SPEC.md`, `브랜드/VI.md`

---

## 목적

omc 프로토타입을 에이전트가 자율적으로 반복 개선하되, **매 이터레이션을 사람이 웹 URL로 직접 보고 평가**할 수 있는 시스템.

```
에이전트 루프 (자율)          사람 체크포인트 (비동기)
────────────────────        ────────────────────
Build → Evaluate → Refine    URL 확인 → 피드백
Build → Evaluate → Refine    URL 확인 → 피드백
...                          ...
```

---

## 아키텍처

### 디렉토리 구조

```
omc/
├── 설계/
│   └── prototype-loop-system.md    ← 이 문서
├── prototype/
│   ├── current/                    ← 최신 빌드 (Vercel 배포 대상)
│   │   ├── index.html
│   │   └── assets/
│   ├── versions/                   ← 이터레이션 아카이브
│   │   ├── v001/
│   │   │   ├── index.html
│   │   │   ├── report.md           ← 평가 리포트
│   │   │   └── meta.json           ← 버전 메타데이터
│   │   ├── v002/
│   │   └── ...
│   ├── checklist.md                ← SSOT에서 추출한 평가 체크리스트
│   └── state.json                  ← 통합 상태 (버전, 루프, 점수)
```

### 웹 URL 제공 방식

**Vercel Preview Deployment** 사용.

| 방식 | URL 패턴 | 장점 |
|------|----------|------|
| `current/` 배포 | `omc-prototype.vercel.app` | 항상 최신 |
| 버전별 배포 | `omc-prototype-v{N}.vercel.app` | 특정 버전 고정 링크 |

구현:
1. `prototype/` 디렉토리를 별도 Git repo로 관리 (또는 ohmyc repo의 `prototype/` 경로)
2. Vercel에 연결 — push마다 자동 배포
3. 각 이터레이션은 Git 태그(`proto-v001`) + Vercel preview URL 생성

**대안 (MVP):** GitHub Pages로도 가능. `gh-pages` 브랜치에 push하면 즉시 URL.

```
https://{org}.github.io/ohmyc/prototype/v001/
https://{org}.github.io/ohmyc/prototype/v002/
```

---

## 루프 구조

### 전체 흐름

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  ┌─ 1. EVALUATE ─────────────────────────────────┐  │
│  │  현재 프로토타입 vs SSOT 체크리스트 대조        │  │
│  │  → Gap Report 생성                            │  │
│  │  → 피델리티 레벨 판정 (L1~L4)                  │  │
│  └───────────────────────────────┬───────────────┘  │
│                                  ↓                   │
│  ┌─ 2. PLAN ─────────────────────────────────────┐  │
│  │  Gap Report에서 이번 이터레이션 스코프 결정      │  │
│  │  - Impact × Feasibility 우선순위               │  │
│  │  - 최대 3개 개선 항목                          │  │
│  │  - 사람 피드백 있으면 최우선 반영               │  │
│  └───────────────────────────────┬───────────────┘  │
│                                  ↓                   │
│  ┌─ 3. BUILD ────────────────────────────────────┐  │
│  │  코딩 에이전트가 프로토타입 수정                 │  │
│  │  - 단일 HTML 또는 멀티 파일                    │  │
│  │  - VI.md 디자인 토큰 적용                      │  │
│  └───────────────────────────────┬───────────────┘  │
│                                  ↓                   │
│  ┌─ 4. REVIEW ───────────────────────────────────┐  │
│  │  2-Agent 병렬 평가                             │  │
│  │  - Agent A: UX/제품 관점 (UX.md, IDENTITY.md)  │  │
│  │  - Agent B: 시각/기술 관점 (VI.md, 구현 품질)   │  │
│  │  → 둘 다 PASS → 5. PUBLISH                    │  │
│  │  → 이슈 있음 → 3. BUILD로 회귀 (최대 2회)      │  │
│  └───────────────────────────────┬───────────────┘  │
│                                  ↓                   │
│  ┌─ 5. PUBLISH ──────────────────────────────────┐  │
│  │  버전 아카이브 + 웹 배포 + Slack 알림           │  │
│  │  → 사람이 URL로 확인                           │  │
│  │  → 피드백 있으면 다음 루프 입력으로             │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ← 사람 피드백 or 자동 (다음 이터레이션) ──────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 자동 vs 수동 트리거

| 트리거 | 동작 |
|--------|------|
| **수동** | Slack에서 `/omc-loop start` 또는 사람이 직접 요청 |
| **피드백 트리거** | 사람이 피드백을 주면 다음 루프 자동 시작 |
| **연속 루프** | 설정 시 N회 연속 자율 실행 (기본: 1회씩 수동) |

---

## 평가 체크리스트

SSOT 문서에서 기계적으로 추출한 평가 기준. `prototype/checklist.md`에 관리.

### L1: Flow (핵심 플로우 존재)

| # | 체크 항목 | 출처 |
|---|----------|------|
| F1 | 온보딩 → 캐릭터 선택 → 첫 대화 플로우 존재 | UX.md |
| F2 | 선제 발화(proactive turn) 시뮬레이션 존재 | CHARACTER-AGENT-SPEC > Action |
| F3 | 유저 주도 턴(initiated turn) 진입 경로 존재 | UX.md > 원칙 2, 3 |
| F4 | 홈/디스커버/채팅/프로필 4탭 구조 | VI.md > Tab Bar |
| F5 | 부재 → 복귀 시나리오 존재 | UX.md > 원칙 1 (온도 하강/복구) |
| F6 | 하루 사이클 시뮬레이션 (아침/낮/저녁) | 논의/프로토타입-v1 |

### L2: Interaction (에이전트 특성 체감)

| # | 체크 항목 | 출처 |
|---|----------|------|
| I1 | Memory 작동이 시각적으로 체감됨 (Memory Pill 등) | CHARACTER-AGENT-SPEC > Memory |
| I2 | 온도 시스템 시각화 (수치 + 느낌) | UX.md > 온도, VI.md > 온도 glow |
| I3 | 캐릭터 성장 변화 체감 (tone 변화 등) | CHARACTER-AGENT-SPEC > Growth |
| I4 | 인위적 잠금 요소 없음 (스트릭 끊김 벌칙, 죄책감 등) | UX.md > 원칙 1 금지 목록 |
| I5 | SOUL.md 발현 — 캐릭터 성격이 일관됨 | IDENTITY.md > 후성유전학 모델 |
| I6 | 양방향 상호작용 느낌 (캐릭터→유저, 유저→캐릭터) | UX.md > 원칙 2 |
| I7 | 기억 투명성 — 유저가 "뭘 기억하는지" 볼 수 있음 | CHARACTER-AGENT-SPEC > Memory 투명성 |

### L3: Visual (VI 정합성)

| # | 체크 항목 | 출처 |
|---|----------|------|
| V1 | Tint 컬러 `#FF8552` 적용 (CTA, 활성 탭, 유저 버블) | VI.md > Tint |
| V2 | Apple HIG 기반 레이아웃 (8pt grid, 44pt 터치 타겟) | VI.md > Foundation |
| V3 | Liquid Glass 소재 적용 (Tab Bar, Navigation, Memory Pill) | VI.md > Liquid Glass |
| V4 | 에이전트 상태 모션 (Breathe, Think, Respond, Grow) | VI.md > 에이전트 상태 모션 |
| V5 | 타이포그래피 위계 준수 (Dynamic Type 기반) | VI.md > 타이포그래피 |
| V6 | 다크 모드 대응 | VI.md > 다크 모드 |
| V7 | 캐릭터 카드 렌더링 스펙 준수 (2:3, 오버레이, Alive Dot) | VI.md > Character Card |
| V8 | 채팅 버블 스펙 준수 (캐릭터 좌/유저 우, radius) | VI.md > Chat Bubble |
| V9 | 브랜드 보이스 준수 (UI 텍스트 톤) | VI.md > 브랜드 보이스 |

### L4: Polish (완성도)

| # | 체크 항목 | 출처 |
|---|----------|------|
| P1 | 화면 전환 애니메이션 | VI.md > Motion |
| P2 | 마이크로인터랙션 (버튼 피드백, 스크롤 등) | Apple HIG |
| P3 | 엣지 케이스 처리 (빈 상태, 에러, 로딩) | VI.md > 브랜드 보이스 > 에러 |
| P4 | 접근성 (색상 대비, VoiceOver 라벨, Reduce Motion) | VI.md > 접근성 |
| P5 | 반응형 — 다양한 뷰포트 대응 | Apple HIG |

### 판정 기준

| 피델리티 레벨 | 통과 조건 |
|--------------|----------|
| L1 | F1~F6 모두 존재 (구현 품질 무관) |
| L2 | L1 통과 + I1~I7 중 5개 이상 |
| L3 | L2 통과 + V1~V9 중 7개 이상 |
| L4 | L3 통과 + P1~P5 중 4개 이상 |

---

## 에이전트 역할

### Builder

프로토타입 코드를 생성/수정하는 코딩 에이전트.

**입력:**
- 현재 프로토타입 코드
- Plan (이번 이터레이션 스코프)
- 이전 Review 피드백
- 사람 피드백 (있으면)

**출력:**
- 수정된 프로토타입 파일
- 변경 요약 (changelog)

**제약:**
- VI.md 디자인 토큰을 CSS 변수로 사용 (하드코딩 금지)
- 단일 HTML 파일 권장 (L3 이상에서 분리 허용)
- 외부 CDN 의존 최소화 (폰트, 아이콘만 허용)

### Reviewer A — UX/제품 평가

**입력:**
- 프로토타입 코드
- IDENTITY.md, UX.md, CHARACTER-AGENT-SPEC.md
- 현재 피델리티 레벨의 체크리스트

**평가 항목:**
- 원칙 준수 (관계 > 기능, 인위적 잠금 금지, 플랫폼/SOUL.md 경계)
- 유저 플로우 자연스러움
- 에이전트 특성 체감도 (기억, 행동, 성장)
- 유저가 "먼저 찾아올 동기"가 설계에 있는가

**출력 형식:**
```
VERDICT: PASS 또는 NEEDS_WORK
LEVEL: L1/L2/L3/L4
SCORE: 체크리스트 통과 비율
ISSUES:
- [critical] ...
- [major] ...
- [minor] ...
REVIEW: (상세)
```

### Reviewer B — 시각/기술 평가

**입력:**
- 프로토타입 코드
- VI.md (디자인 토큰, 컴포넌트 스펙)
- 프로토타입 스크린샷 (비전 모델 평가용)

**평가 항목:**
- VI.md 토큰 적용 정확도
- Apple HIG 준수
- Liquid Glass 구현 품질
- 모션/애니메이션
- 다크 모드
- 코드 품질 (유지보수성)

**출력 형식:** Reviewer A와 동일

### 스크린샷 평가 (L3+)

L3 이상에서는 빌드된 HTML을 headless 브라우저로 캡처하여 비전 모델에 전달.

```bash
# 스크린샷 캡처 (Playwright)
npx playwright screenshot prototype/current/index.html \
  --viewport-size=393,852 \
  --device-scale-factor=3 \
  prototype/versions/v{N}/screenshot.png
```

비전 모델 프롬프트:
```
이 스크린샷은 ohmyc 캐릭터 에이전트 앱의 프로토타입입니다.
Apple HIG + Liquid Glass 디자인을 목표로 합니다.
Tint 컬러: #FF8552 (Soft Apricot)

다음을 평가하세요:
1. 전반적 시각 품질 (1-10)
2. Apple 네이티브 앱처럼 보이는 정도 (1-10)
3. 시각적으로 어색한 부분 목록
4. 개선 우선순위 Top 3
```

---

## 버전 메타데이터

`versions/v{N}/meta.json`:

```json
{
  "version": 1,
  "created_at": "2026-03-26T16:00:00+09:00",
  "fidelity_level": "L1",
  "checklist_score": {
    "L1": "5/6",
    "L2": "2/7",
    "L3": "0/9",
    "L4": "0/5"
  },
  "changes": [
    "온보딩 플로우 추가",
    "캐릭터 선택 화면 구현"
  ],
  "review": {
    "agent_a": { "verdict": "PASS", "issues": [] },
    "agent_b": { "verdict": "NEEDS_WORK", "issues": ["V1: tint 미적용"] }
  },
  "human_feedback": null,
  "url": "https://omc-prototype-v001.vercel.app",
  "screenshot": "screenshot.png"
}
```

### 루프 상태

`state.json`:

```json
{
  "current_version": 3,
  "fidelity_level": "L2",
  "total_iterations": 5,
  "last_human_feedback": {
    "version": 2,
    "feedback": "온보딩 첫 화면에서 캐릭터가 먼저 말을 거는 느낌이 약하다",
    "timestamp": "2026-03-26T17:00:00+09:00"
  },
  "pending_gaps": [
    "I3: 캐릭터 성장 변화 체감 부족",
    "I7: 기억 투명성 UI 미구현"
  ]
}
```

---

## Slack 연동

### 이터레이션 완료 알림

채널: #11-omc

```
🔄 omc 프로토타입 v{N} 완료 — L{X} ({score})
🔗 https://omc-prototype-v{N}.vercel.app
변경: {changes 요약}
📋 Gap: {남은 주요 gap}

리뷰 후 피드백을 이 쓰레드에 달아주세요.
```

### 피드백 수집

Slack 쓰레드에 달린 피드백을 다음 루프 입력으로 사용.
사람 피드백은 체크리스트 점수보다 **항상 우선**.

---

## 실행 방법

### 1회 루프 실행 (수동)

```
1. devmon에게 요청: "omc 프로토타입 루프 1회 돌려줘"
2. devmon이 Evaluate → Plan → Build → Review → Publish 수행
3. Slack에 URL + 리포트 알림
4. 사람이 URL 확인 후 피드백 (선택)
```

### 연속 루프 (자율)

```
1. devmon에게 요청: "omc 프로토타입 루프 3회 자율 실행"
2. 3회 반복 후 종합 리포트 + URL 알림
3. 사람 체크포인트
```

### 하트비트 연동 (미래)

향후 하트비트에 통합 가능하지만, 현 단계에서는 수동/요청 기반이 적절.
프로토타입은 10분 주기가 아닌, 의미 있는 단위로 돌아야 함.

---

## 피델리티 래더

단계별로 목표가 다르다. 현재 v1 프로토타입은 L1~L2 사이.

| 레벨 | 목표 | 이터레이션 예상 | 산출물 |
|------|------|--------------|--------|
| **L1: Flow** | 핵심 유저 저니가 빠짐없이 존재 | 2-3회 | 와이어프레임 수준 HTML |
| **L2: Interaction** | 에이전트 특성(기억/온도/성장)이 체감됨 | 3-5회 | 인터랙티브 프로토타입 |
| **L3: Visual** | VI.md 토큰 완전 적용, 네이티브 앱 느낌 | 5-8회 | 하이피 프로토타입 |
| **L4: Polish** | 애니메이션, 엣지 케이스, 접근성 | 3-5회 | 프로덕션 레디 프로토타입 |

레벨 전환 시 사람 체크포인트 필수.

---

## 이터레이션 메모리

매 루프의 결과를 축적. 같은 문제 반복 방지.

| 기록 항목 | 저장 위치 |
|----------|----------|
| Gap Report | `versions/v{N}/report.md` |
| 변경 사항 | `versions/v{N}/meta.json > changes` |
| 리뷰 결과 | `versions/v{N}/meta.json > review` |
| 사람 피드백 | `versions/v{N}/meta.json > human_feedback` |
| 스크린샷 | `versions/v{N}/screenshot.png` |
| 누적 학습 | `state.json > pending_gaps` |

---

## 기술 스택

| 용도 | 도구 | 이유 |
|------|------|------|
| 프로토타입 | 단일 HTML + inline CSS/JS | 에이전트가 수정하기 가장 쉬움 |
| 웹 배포 | Vercel (또는 GitHub Pages) | push → 즉시 URL |
| 스크린샷 | Playwright | headless 캡처, 이미 nami_fullstack에서 사용 중 |
| 비전 평가 | Claude vision | 스크린샷 기반 시각 품질 평가 |
| 버전 관리 | Git tag (`proto-v{N}`) | 이력 추적 |
| 알림 | Slack #11-omc | 기존 채널 활용 |

---

## 시작 조건

시스템을 가동하려면:

1. **ohmyc repo 초기화** — `prototype/` 디렉토리 + Vercel 연결
2. **체크리스트 확정** — 이 문서의 체크리스트를 `prototype/checklist.md`로 분리
3. **기존 v1 프로토타입 이관** — 논의에 기록된 onboarding-v1 플로우를 `prototype/versions/v001/`로
4. **첫 루프 실행** — Evaluate부터 시작해 현재 상태 진단

---

## Cycle Reports (아이디어/논의 리포트)

루프 사이클 실행 중 발견된 아이디어, 논의 필요 사항, 블로커를 자동으로 리포트한다.

### 리포트 유형

| 유형 | 설명 | 예시 |
|------|------|------|
| 💡 **idea** | 프로토타입 개선 아이디어 | "온보딩에서 캐릭터가 먼저 말을 거는 게 자연스러울 것" |
| 💬 **discussion** | 사람의 판단이 필요한 사항 | "온도 시스템의 초기값 36.5°C가 적절한가?" |
| 🚫 **blocker** | 진행 불가 사항 | "SOUL.md 포맷이 미정의 → 캐릭터 생성 플로우 구현 불가" |
| ✨ **suggestion** | SSOT 문서 변경 제안 | "UX.md에 선제 발화 빈도 상한 수치 명시 필요" |
| ✅ **resolved** | 해결된 이전 리포트 | — |

### 리포트 생성 시점

Evaluate 또는 Review 단계에서 다음 상황 발생 시 자동 생성:

1. **SSOT 모호성** — 체크리스트 평가 시 문서 해석이 갈리는 경우
2. **구현 불가** — 스펙이 미정의되어 빌드할 수 없는 경우
3. **개선 아이디어** — 평가 과정에서 발견한 UX/기능 개선안
4. **트레이드오프** — 두 원칙이 충돌하여 사람의 판단이 필요한 경우

### 리포트 형식

`reports/reports.json`:
```json
[
  {
    "type": "discussion",
    "title": "온도 시스템 초기값",
    "body": "UX.md에서 36.5°C로 정의되어 있으나, 프로토타입에서 첫 대화 직후 온도가 변하지 않으면 시스템이 작동하지 않는 것처럼 보임.",
    "version": "v0.2.0",
    "date": "2026-03-27",
    "source": "Reviewer A (Evaluate)",
    "status": "open"
  }
]
```

### 리포트 수명

- **open**: 사람의 응답 대기
- **acknowledged**: 사람이 확인함 (다음 루프에서 반영 예정)
- **resolved**: 해결됨 (사람의 피드백 또는 SSOT 문서 변경으로)

### ⚠️ SSOT 변경 제안의 경계

리포트에서 SSOT 문서 변경을 **제안**할 수 있지만, **에이전트가 직접 SSOT를 수정하지 않는다.**
변경은 반드시 Human in the loop를 통해서만 이루어진다.

### Slack 연동

블로커/논의 리포트 발생 시 #11-omc에 알림:
```
📋 [Cycle Report] 💬 논의 필요: "온도 시스템 초기값"
→ https://netty-ai.github.io/omc-evolve/reports/
```

---

## 참조

- 정체성: [`IDENTITY.md`](../IDENTITY.md)
- UX: [`UX.md`](../UX.md)
- 캐릭터 에이전트: [`CHARACTER-AGENT-SPEC.md`](../CHARACTER-AGENT-SPEC.md)
- 시각 정체성: [`브랜드/VI.md`](../브랜드/VI.md)
- 프로토타입 v1 논의: [`논의/2026-03-24_프로토타입-생활관리-온도시스템.md`](../논의/2026-03-24_프로토타입-생활관리-온도시스템.md)
