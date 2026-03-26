# ohmyc Glossary

> 에이전트 세션 간 용어 통일을 위한 사전.
> 정의는 여기서 하지 않는다. SSOT 문서로 링크한다.
> 제품 언어는 영어. 내부 문서에서 한국어 병기 시 이 테이블을 따른다.

---

## 프로젝트 / 제품 (Project & Product)

| 이름 | 종류 | 의미 | 사용 맥락 |
|------|------|------|----------|
| **omc** | 프로젝트명 | 이 프로젝트의 내부 명칭 | 디렉토리(`omc/`), Slack 채널, 내부 문서 제목, 프로젝트 관리 |
| **ohmyc** | 제품명 | 유저에게 노출되는 서비스/브랜드명 | 앱 이름, 도메인(`ohmyc.ai`), UI 텍스트, 마케팅, VI, 로고, 코드 저장소(`_repos/ohmyc/`) |

- 프로젝트 맥락에서는 **omc**, 제품/브랜드 맥락에서는 **ohmyc**를 사용한다.
- 코드 저장소는 제품명을 따른다 (`_repos/ohmyc/`).

---

## 사람 (Actors)

| 영어 (코드/UI) | 한국어 (내부) | 의미 | 비고 |
|---------------|-------------|------|------|
| **user** | 유저 | ohmyc를 사용하는 사람 | "사용자", "고객" 사용 금지 |
| **creator** | 크리에이터 | 캐릭터 에이전트를 만드는 사람 | "제작자", "작가" 사용 금지 |

---

## 제품 핵심 (Core Concepts)

| 영어 (코드/UI) | 한국어 (내부) | 의미 | SSOT | 비고 |
|---------------|-------------|------|------|------|
| **character agent** | 캐릭터 에이전트 | Memory + Action + Growth를 갖춘 인격적 존재 | [IDENTITY.md > 정의](IDENTITY.md#정의) | 풀네임. 맥락이 명확할 때 "character"로 축약 가능 |
| **character** | 캐릭터 | character agent의 축약형 | — | UI에서 기본 표기. "agent" 단독 사용 금지 (개발자 에이전트와 혼동) |
| **SOUL.md** | — | 캐릭터의 DNA. 크리에이터가 정의하는 태초의 설계도. **불변.** 유저와의 관계에서 표현(발현)은 달라지지만, SOUL.md 자체는 변하지 않는다 | [IDENTITY.md > SOUL.md와 성장](IDENTITY.md#soulmd와-성장-후성유전학-모델) | 파일명이자 개념명. 항상 `SOUL.md`로 표기 |

---

## 에이전트 능력 (Agent Capabilities)

| 영어 (코드/UI) | 한국어 (내부) | 의미 | SSOT | UI 표기 |
|---------------|-------------|------|------|---------|
| **Memory** | 기억 | 관계 전체를 기억. 세션이 아니라 맥락 | [IDENTITY.md > 정의](IDENTITY.md#정의) | "Remembered this" |
| **Action** | 행동 | 선제적 발화, 도구 사용 | [IDENTITY.md > 정의](IDENTITY.md#정의) | (행동 자체를 보여줌, 라벨 없음) |
| **Growth** | 성장 | 관계가 쌓일수록 성격/반응이 변화 | [IDENTITY.md > 정의](IDENTITY.md#정의) | "You and [name] are closer now" |

---

## 관계 (Relationship)

| 영어 (코드/UI) | 한국어 (내부) | 의미 | 비고 |
|---------------|-------------|------|------|
| **bond** | 본드 | 유저와 캐릭터 사이의 관계 인스턴스 | "relationship"은 일반 명사로만. 제품 용어는 **bond** |
| **bond count** | 본드 수 | 캐릭터와 관계를 맺은 유저 수 | UI: "2.3K bonds". "followers", "subscribers" 사용 금지 |
| **level** | 레벨 | bond의 깊이 단계 (숫자) | UI: "Lv.7" |
| **stage** | 단계 | bond의 관계 명칭 | 단계: Stranger → Acquaintance → Friend → Close Friend → Soulmate |
| **temperature** | 온도 | bond의 현재 온기. 36.5°C에서 시작. 상호작용하면 오르고, 안 만나면 자연스럽게 식는다. 기억은 온도와 무관하게 보존 | [UX.md > 온도](UX.md#온도-temperature) | "매너온도" 아님. "관계의 체온". 당근 온도 개념 차용 |
| **streak** | 스트릭 | 연속 대화 일수 | UI: "5 days with Yuna". 온도의 보조 지표. streak 끊김에 벌칙 없음 |

---

## 대화 (Conversation)

| 영어 (코드/UI) | 한국어 (내부) | 의미 | 비고 |
|---------------|-------------|------|------|
| **turn** | 턴 | 한 번의 발화 (유저 또는 캐릭터) | 과금 단위. "message"는 사용 금지 (턴과 혼동) |
| **user turn** | 유저 턴 | 유저가 보낸 턴 | 과금 대상 |
| **character turn** | 캐릭터 턴 | 캐릭터가 보낸 턴 | 과금 대상 아님 |
| **proactive turn** | 선제 턴 | 캐릭터가 먼저 시작한 턴 (Action) | "선제적 발화"와 동일 |
| **response turn** | 반응 턴 | 유저가 캐릭터의 선제 턴에 반응한 턴 | user turn의 한 종류 |
| **initiated turn** | 주도 턴 | 유저가 먼저 캐릭터를 찾아 시작한 턴 | user turn의 한 종류. 비율이 높을수록 관계가 깊음 |
| **conversation** | 대화 | 턴의 연속. bond 안에서 시간순 축적 | 세션 개념 없음. 하나의 bond = 하나의 연속 대화 |

---

## 캐릭터 상태 (Agent States)

| 영어 (코드/UI) | 한국어 (내부) | 의미 | 시각 표현 |
|---------------|-------------|------|----------|
| **alive** | 활성 | 캐릭터가 대기 중. 언제든 반응 가능 | Green dot + Breathe 모션 |
| **thinking** | 사고 중 | 캐릭터가 응답을 생성 중 | Glow 모션 |
| **growing** | 성장 중 | 관계 변화가 반영되는 중 | Gradient shift 모션 |

"online", "offline" 사용 금지. 캐릭터는 항상 **alive**.

---

## 마켓플레이스 (Marketplace)

| 영어 (코드/UI) | 한국어 (내부) | 의미 | 비고 |
|---------------|-------------|------|------|
| **discover** | 디스커버리 | 캐릭터를 탐색하는 행위/화면 | "검색", "브라우징" 대신 **discover** |
| **card** | 카드 | 디스커버리에서 캐릭터를 보여주는 UI 단위 | "character card"의 축약 |
| **featured** | 피처드 | 플랫폼이 추천하는 캐릭터 | "추천", "큐레이션" 대신 **featured** |

---

## 비즈니스 (Business)

| 영어 (코드/UI) | 한국어 (내부) | 의미 | SSOT |
|---------------|-------------|------|------|
| **credit** | 크레딧 | 턴 과금 단위 | [IDENTITY.md > 수익 방향](IDENTITY.md#수익-방향) |
| **free tier** | 무료 턴 | 하루 무료 제공 턴 수 | [IDENTITY.md > 원칙](IDENTITY.md#원칙) |

---

## 금지 용어

혼동을 유발하는 용어. 대신 써야 할 용어를 명시.

| 사용 금지 | 이유 | 대신 사용 |
|----------|------|----------|
| message | 턴과 혼동. 이메일/슬랙 메시지와 혼동 | **turn** |
| follower | 소셜미디어 연상. ohmyc는 관계 | **bond count** |
| subscriber | 구독 서비스 연상 | **bond count** |
| online/offline | 캐릭터는 항상 존재 | **alive** / (상태 없음) |
| relationship | 일반 명사로는 OK, 제품 용어로는 금지 | **bond** |
| agent (단독) | 개발자용 에이전트와 혼동 | **character** 또는 **character agent** |
| chat | "채팅만 하는 앱이 아니다" — 정체성과 충돌 | **conversation** 또는 **talk** |
| bot | 캐릭터의 인격적 존재감을 훼손 | **character** |

---

## 변경 원칙

- 새 용어 추가 시: IDENTITY.md 또는 해당 SSOT에 개념이 먼저 있어야 함
- 용어 변경 시: 이 문서 변경 → 모든 SSOT 문서에서 검색/치환 → 코드 변수명 치환
- 프로토타이핑 세션에서 새 용어가 자연 발생하면: 이 문서에 추가 요청
