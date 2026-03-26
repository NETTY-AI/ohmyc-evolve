# omc v0.1 — Screens & Flows

> 이 문서는 omc의 모든 화면과 사용자 플로우의 **SSOT**이다.
> 프로토타입(`프로토타입/`)은 이 문서를 구현한다.
> 화면 추가/삭제/변경 시 **이 문서를 먼저 업데이트**하고, 프로토타입을 맞춘다.

상위 문서: `IDENTITY.md` (정체성), `UX.md` (UX 원칙)

---

## 화면 (Screens)

화면은 한 번만 정의한다. 같은 화면의 다른 모습은 **상태(state)**로 관리한다.

### 온보딩

| ID | 화면 | 설명 |
|----|------|------|
| splash | Splash | 로고 + 태그라인 ("your character, alive.") |
| welcome | Welcome | 캐릭터 선택 유도 CTA |
| question | Question | 온보딩 질문. state로 구분 |
| characters | Character Select | 캐릭터 카드 선택 (히어로 + Coming Soon) |
| closing | Closing | 온보딩 완료 메시지 |

**question states:**

| State | 수집 데이터 |
|-------|-----------|
| wake-time | 기상 시간 |
| vibe | 컴패니언 스타일 선호 |

### 코어

| ID | 화면 | 설명 |
|----|------|------|
| home | Home | 캐릭터 룸. 시간대별 state 변경 |
| chat | Chat | 캐릭터 대화. 컨텍스트별 내용 변경 |
| push | Push Notification | 잠금화면 알림 시뮬레이션 |

**home states:**

| State | 시간대 | 배경 | 핵심 요소 |
|-------|--------|------|----------|
| evening | 밤 | 어두운 그라데이션 | 굿나잇 버블, 달/별 |
| morning | 아침 | 청량한 그라데이션 | 탭 -> 대화, 해 |
| daytime | 낮 | 밝은 크림 | 위젯 그리드 |
| afternoon | 오후 | 따뜻한 크림 | 전환 화면 |
| night | 밤 (Day 2+) | 어두운 그라데이션 | 하루 요약 메시지 |

**chat contexts:**

| Context | 진입 경로 | 핵심 내용 |
|---------|----------|----------|
| first-chat | 온보딩 캐릭터 선택 후 | 이름/기상시간/기분 수집. 캐릭터가 먼저 말을 건다 |
| day2-morning | home(morning) 탭 | Memory pill + 일정 수집 + 리마인더 제안 |
| afternoon | 선제 턴 | 아침 일정 recall + Memory pill + 후속 질문 |
| evening | 선제 턴 | Summary card + 무죄책감 리뷰 + 기분 저장 |
| meals | Life Grid 미니앱 | 식사 감지/기록 대화 |

### 탭

| ID | 화면 | 탭 위치 | 설명 |
|----|------|---------|------|
| discover | Discover | 2번째 | 마켓플레이스 홈 (검색 + 카테고리 + 캐릭터 그리드) |
| chats | Chats | 3번째 | 대화 목록 (캐릭터별 마지막 메시지, 온도) |
| profile | Profile | 4번째 | 유저 설정 + 크레딧 |

### 하위 화면

탭 또는 코어 화면에서 진입하는 하위 화면.

| ID | 화면 | 진입 경로 | 설명 |
|----|------|----------|------|
| char-profile | Character Profile | discover | 캐릭터 상세 (온도, 통계, SOUL 요약) |
| credits | Credits | profile | 크레딧 잔액/충전 |
| edit-profile | Edit Profile | profile | 이름/역할/자기소개 편집 |
| life-grid | Life Grid | home | 미니앱 그리드 |
| miniapp-store | Mini-App Store | life-grid | 설치 가능한 미니앱 목록 |
| miniapp | Mini-App | life-grid | 개별 미니앱 뷰. type으로 구분 |

**miniapp types:**

| Type | 설명 |
|------|------|
| today | 오늘의 일정/할 일 |
| memories | 기억 모아보기 |
| meals | 식사 기록 |

---

## 플로우 (Flows)

화면+상태의 시퀀스. `screen(state)` 형식으로 표기.

### F1. Onboarding

첫 실행. 캐릭터를 선택하고 첫 대화를 나눈다.

```
splash -> welcome -> question(wake-time) -> question(vibe) -> characters -> chat(first-chat) -> closing
```

수집: 기상 시간, 컴패니언 스타일, 이름, 기분

### F2. Day 1 Evening

온보딩 직후. 첫 Home 진입.

```
closing -> home(evening)
```

### F3. Day 2 Loop

핵심 리텐션 루프. 하루를 함께 보내는 경험.

```
push -> home(morning) -> chat(day2-morning) -> home(daytime) -> chat(afternoon) -> chat(evening) -> home(night)
```

온도 변화: 36.7 (morning) -> 37.2 (daytime) -> 37.8 (night)

### F4. Life System

생활 관리 미니앱 탐색.

```
home -> life-grid -> miniapp(today | memories)
```

### F5. Mini-App Install

미니앱 설치 후 캐릭터가 반응하는 플로우. Meals를 예시로.

```
life-grid -> miniapp-store -> (install) -> chat(meals) -> miniapp(meals)
```

### F6. Discover

마켓플레이스에서 새 캐릭터 탐색.

```
discover -> char-profile
```

### F7. Chats

대화 목록에서 기존 대화 재진입.

```
chats -> chat(context)
```

### F8. Profile

유저 설정 및 크레딧.

```
profile -> credits
```

### F9. Edit Profile

프로필 편집. 비민감 텍스트 정보(이름, 역할, 자기소개) 수정.

```
profile -> edit-profile -> (save) -> profile
```

---

## 탭 구조

| 순서 | 탭 | 화면 ID | 아이콘 |
|------|-----|---------|--------|
| 1 | Home | home | house |
| 2 | Discover | discover | magnifyingglass |
| 3 | Chats | chats | bubble.left.and.bubble.right |
| 4 | Profile | profile | person |

---

## 요약

| | 수 |
|---|---|
| 고유 화면 | 13 |
| 상태/컨텍스트 | 12 (home 5 + chat 5 + miniapp 3 - 1 중복) |
| 플로우 | 9 |
| 핵심 플로우 | F1 (Onboarding) + F3 (Day 2 Loop) |
