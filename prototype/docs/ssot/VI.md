# ohmyc Visual Identity System

> 상태: **v0.3** (2026-03-24)
> 상위 문서: `IDENTITY.md` (정체성 SSOT)
> 시각 레퍼런스: `vi.html`
> 디자인 기반: **Apple Human Interface Guidelines + Liquid Glass**
> 브랜드 컬러: **Soft Apricot `#FF8552`**

---

## 설계 원칙

**Apple 위에 ohmyc.** iOS의 검증된 기반 위에, 캐릭터 에이전트만의 고유 레이어를 얹는다.

| 층위 | 내용 | 출처 |
|------|------|------|
| **Foundation** | HIG 레이아웃, 네비게이션, 타이포, 컬러 시스템 | Apple HIG |
| **Material** | Liquid Glass 소재, 반투명, 블러, 굴절 | iOS 26 |
| **ohmyc Layer** | 에이전트 상태 모션, 관계 시각화, 캐릭터 아트 프레임 | 고유 설계 |

### 3대 원칙

| 원칙 | 의미 | 적용 |
|------|------|------|
| **무대** | 플랫폼은 물러서고, 캐릭터가 주인공 | 뉴트럴 시스템 배경 + 캐릭터가 컬러를 채움 |
| **온기** | 차가운 AI가 아닌 매일 함께하는 존재 | 웜톤 배경, 라운디드 코너, 친근한 타이포 |
| **생명** | 정지된 것은 죽어있다 | 에이전트 상태 모션 (Breathe/Think/Respond/Grow) |

---

## NettY 브랜드 아키텍처

**Endorsed Model** — NettY는 무채색 무대, ohmyc는 자유로운 색을 가진다.

```
NettY (보증자 · 무대 · 모노크롬)
└── ohmyc — by NettY
```

보증 표기: `ohmyc by NettY` 또는 `ohmyc · NettY`

---

## 태그라인

**your character, alive.**

캐릭터가 살아있다는 ohmyc의 본질을 한 줄로. 소문자, 마침표로 끝남.

용도: 워드마크 하단, 앱스토어 서브타이틀, 소셜 바이오.

---

## 로고

### 워드마크

| 속성 | 값 |
|------|-----|
| Text | `ohmyc` (올소문자) |
| Font | Plus Jakarta Sans 800 (ExtraBold) — 워드마크 전용 |
| Letter Spacing | -0.04em |
| Color (Light) | System Label, 'c'에 `--tint` |
| Color (Dark) | System Label Dark, 'c'에 `--tint` |

'c' = character. NettY의 Y 악센트 방식을 계승하되, 컬러로 구분.

### App Icon

| 속성 | 값 |
|------|-----|
| 배경 | System Background Dark (#1C1C1E) |
| 레터 | "c", Plus Jakarta Sans 800, `--tint` |
| 캔버스 | 1024x1024px (App Store), 512/256/128 파생 |
| 모서리 | OS 처리 (iOS superellipse) |

### 규칙

- 최소 크기: 48px (디지털) / 12mm (인쇄)
- 여백: 로고 높이의 50% 이상
- 'c'의 tint 컬러는 반드시 유지 (tint 확정 후)
- 금지: 그라디언트 채움, 기울기, 회전, 그림자

---

## 컬러

### Tint — Soft Apricot

Apple의 **System Tint Color** 방식을 따른다. 앱 전체에서 tint 1색이 CTA, 선택 상태, 링크, 활성 탭을 담당한다.

| 슬롯 | CSS Token | Hex | 용도 |
|------|-----------|-----|------|
| **Tint** | `--tint` | `#FF8552` | Primary. CTA, 로고 c, 활성 탭, 유저 버블 |
| **Tint Bright** | `--tint-bright` | `#FFA47A` | 다크 모드에서 가독성 확보 |
| **Tint Soft** | `--tint-soft` | `#FFF4EE` | 배지/칩 배경, 틴트 |

선정 근거: [`2026-03-24_컬러선정.md`](2026-03-24_컬러선정.md)

### System Colors (Apple 표준)

앱 내 시맨틱 용도로 Apple 시스템 컬러를 그대로 사용한다.

| 이름 | Light | Dark | 용도 |
|------|-------|------|------|
| Label | `#000000` | `#FFFFFF` | 주 텍스트 |
| Secondary Label | `#3C3C43` 60% | `#EBEBF5` 60% | 보조 텍스트 |
| Tertiary Label | `#3C3C43` 30% | `#EBEBF5` 30% | 힌트, 플레이스홀더 |
| System Background | `#FFFFFF` | `#000000` | 앱 배경 |
| Secondary Background | `#F2F2F7` | `#1C1C1E` | 그룹 배경 |
| Tertiary Background | `#FFFFFF` | `#2C2C2E` | 카드, 모달 |
| Separator | `#3C3C43` 29% | `#545458` 65% | 구분선 |

### ohmyc 확장 컬러

Apple 표준 위에 ohmyc 고유 용도.

| 이름 | Light | Dark | 용도 |
|------|-------|------|------|
| Warm Cream | `#FBF8F7` | — | 라이트 배경 대체 (순백 대신 따뜻한 톤). 선택적 사용 |
| Chat Bubble (Char) | `#F0E6E6` | `#2C2424` | 캐릭터 채팅 버블 |

### 기능적 색상

| 이름 | Light | Dark | 용도 |
|------|-------|------|------|
| System Green | `#34C759` | `#30D158` | 온라인, 성공, alive 상태 |
| System Orange | `#FF9500` | `#FF9F0A` | 경고, Action 표시 |
| System Red | `#FF3B30` | `#FF453A` | 에러, 삭제 |

---

## Liquid Glass 소재

iOS 26의 핵심 소재. 반투명 + 블러 + 굴절로 깊이와 계층을 표현한다.

### 적용 영역

| 영역 | Glass 사용 | 근거 |
|------|-----------|------|
| **Tab Bar** | O | iOS 표준. 스크롤 시 축소되며 콘텐츠에 집중 |
| **Navigation Bar** | O | 채팅 헤더, 프로필 헤더 |
| **Search Bar** | O | 홈 검색 |
| **Memory Pill** | O | 채팅 내 인라인 메모리 표시 — "떠오르는 기억" 느낌 |
| **Relationship Bar** | O | 채팅 상단 관계 상태 — 글래스 속 정보 |
| **Character Card** | X | 카드는 캐릭터 아트가 주인공. 불투명 |
| **Chat Bubble** | X | 텍스트 가독성 우선. Solid 배경 |
| **Button (CTA)** | X | 명확한 행동 유도. Solid tint 배경 |

### CSS 스펙

```css
/* Liquid Glass */
--glass-bg: rgba(255, 255, 255, 0.72);
--glass-bg-dark: rgba(30, 30, 30, 0.72);
--glass-border: rgba(255, 255, 255, 0.4);
--glass-border-dark: rgba(255, 255, 255, 0.08);
--glass-blur: blur(40px) saturate(180%);
--glass-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
```

---

## 다크 모드

ohmyc는 **라이트/다크 양쪽 지원**한다. Apple의 Dynamic Color 체계를 따른다.

### 원칙

| 원칙 | 설명 |
|------|------|
| **시스템 따라감** | 유저의 OS 다크 모드 설정을 자동 반영 |
| **Tint 유지** | 라이트/다크 모두 동일한 tint 컬러 사용 (밝기만 조정) |
| **콘텐츠 우선** | 다크에서 캐릭터 아트가 더 돋보임 — 캐릭터가 주인공 원칙 강화 |

### 토큰 매핑

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #000000;
    --bg-secondary: #1C1C1E;
    --bg-tertiary: #2C2C2E;
    --label: #FFFFFF;
    --label-secondary: rgba(235, 235, 245, 0.6);
    --label-tertiary: rgba(235, 235, 245, 0.3);
    --separator: rgba(84, 84, 88, 0.65);
    --glass-bg: var(--glass-bg-dark);
    --glass-border: var(--glass-border-dark);
    --bubble-char: #2C2424;
    --tint-bright: #FFA47A;
  }
}
```

---

## 타이포그래피

### 서체

| 역할 | iOS (네이티브) | Web (폴백) | 비고 |
|------|--------------|-----------|------|
| System UI | SF Pro | Inter | 본문, 네비게이션, 라벨 |
| System Rounded | SF Pro Rounded | — | 숫자, 레벨, 통계 (따뜻한 인상) |
| Wordmark Only | Plus Jakarta Sans | Plus Jakarta Sans | 로고 `ohmyc` 전용 |

### 위계 (Apple Dynamic Type 기반)

| Style | Size | Weight | Leading | 용도 |
|-------|------|--------|---------|------|
| Large Title | 34px | Bold (700) | 41px | 화면 제목 (홈, 디스커버리) |
| Title 1 | 28px | Bold (700) | 34px | 캐릭터 이름 (프로필) |
| Title 2 | 22px | Bold (700) | 28px | 섹션 제목 |
| Title 3 | 20px | Semi (600) | 25px | 카드 제목 |
| Headline | 17px | Semi (600) | 22px | 리스트 항목 제목 |
| Body | 17px | Regular (400) | 22px | 본문, 채팅 |
| Callout | 16px | Regular (400) | 21px | 보조 설명 |
| Subheadline | 15px | Regular (400) | 20px | 부제, 메타 |
| Footnote | 13px | Regular (400) | 18px | 캡션, 타임스탬프 |
| Caption 1 | 12px | Regular (400) | 16px | 배지 텍스트 |
| Caption 2 | 11px | Regular (400) | 13px | 최소 텍스트 |

### 접근성

- **Dynamic Type 지원**: 유저가 시스템 폰트 크기를 변경하면 앱이 따라감
- **최소 터치 타겟**: 44x44pt (Apple 표준)
- **최소 텍스트 크기**: 11px (Caption 2 이하 금지)

---

## 아이콘

### 체계

| 플랫폼 | 아이콘 셋 | 근거 |
|--------|----------|------|
| iOS | **SF Symbols** | Apple 네이티브. 700+ 심볼, Dynamic Type 연동 |
| Web | **Lucide Icons** | SF Symbols와 시각적 호환. 오픈소스 |

### 스타일 규칙

| 속성 | 값 |
|------|-----|
| Rendering | SF Symbols "Regular" weight (본문과 매칭) |
| Size | 20px (탭바), 17px (인라인), 24px (헤더 액션) |
| Color | inherit (텍스트 컬러 따라감) |
| Active | `--tint` |

### ohmyc 고유 아이콘

SF Symbols에 없는 것들:

| 아이콘 | 용도 | 형태 |
|--------|------|------|
| Alive Dot | 캐릭터 상태 | 원형, Breathe 모션 |
| Memory | 기억 표시 | "M" 원형 배지 또는 뇌 아이콘 |
| Growth Ring | 성장 단계 | conic-gradient 링 |
| Bond | 관계 지표 | 하트 또는 연결 아이콘 |

---

## 에이전트 상태 모션

ohmyc만의 고유 레이어. Apple HIG에 없는 것.

### 4가지 상태

| 상태 | 모션 | 타이밍 | 컬러 | 설명 |
|------|------|--------|------|------|
| **Breathe** | 스케일 1.0↔1.15 + opacity 0.3↔0.6 | 3s ease-in-out, infinite | `--tint` 연한 변형 | 대기. 살아있다는 최소 신호 |
| **Think** | 글로우 펄스 | 2.5s ease-in-out, infinite | `--tint` + glow | 사고 중 |
| **Respond** | 바깥 동심원 | 1.5s ease-out, once | `--tint` + ripple | 응답 순간 |
| **Grow** | 그래디언트 시프트 | 4s ease, infinite | `--tint` ↔ `--tint-bright` | 성장 중 |

### 노출 위치

| 위치 | 표시 방식 |
|------|----------|
| 캐릭터 카드 (홈) | Alive Dot (8px, Breathe) |
| 채팅 헤더 아바타 | Ring pulse (아바타 테두리) |
| 채팅 리스트 | Alive Dot (리스트 아이템) |
| 프로필 | 아바타 + 상태 텍스트 |

---

## 그림자

Apple의 elevation 시스템을 따른다.

| Level | Value | 용도 |
|-------|-------|------|
| **0** | none | 플랫 요소, 리스트 아이템 |
| **1** | `0 0.5px 2px rgba(0,0,0,0.04)` | Grouped list, 카드 |
| **2** | `0 2px 8px rgba(0,0,0,0.08)` | 캐릭터 카드, 플로팅 요소 |
| **3** | `0 4px 20px rgba(0,0,0,0.12)` | 모달, 바텀시트 |
| **4** | `0 8px 40px rgba(0,0,0,0.18)` | 팝오버, 풀스크린 오버레이 |

다크 모드에서는 그림자 대신 **테두리 밝기**로 elevation 표현.

---

## 캐릭터 아트 가이드

캐릭터가 시각적 주인공이므로, 크리에이터가 올리는 아트의 품질/포맷을 규정한다.

### 필수 에셋

| 에셋 | 비율 | 최소 크기 | 용도 |
|------|------|----------|------|
| **Card Art** | 2:3 (세로) | 600x900px | 홈 카드, 디스커버리 |
| **Avatar** | 1:1 (정사각) | 256x256px | 채팅 아바타, 리스트 |
| **Banner** | 16:9 (가로) | 1200x675px | 프로필 히어로 |

### 스타일 가이드

| 규칙 | 설명 |
|------|------|
| 형식 | PNG, JPEG, WebP. 투명 배경 허용 (Card Art) |
| 안전 영역 | Card Art 하단 30%는 그래디언트 오버레이 — 얼굴/핵심 요소 배치 금지 |
| 배경 | 단색 또는 심플한 배경 권장. 복잡한 배경은 오버레이 텍스트 가독성 저해 |
| 색상 | 제한 없음. 캐릭터가 ohmyc의 컬러 — "무대 위의 캐릭터" 원칙 |

### 캐릭터 카드 렌더링

```
┌──────────────────────┐
│                      │
│   Character Art      │  2:3, object-fit: cover
│   (크리에이터 제공)    │  border-radius: 20px (Apple)
│                      │
│  ┌─gradient overlay─┐│
│  │ Name (Title 3)   ││  하단 30% 그래디언트
│  │ by @creator      ││
│  │ ● alive · 2.3K   ││  Alive Dot + 메타
│  └──────────────────┘│
└──────────────────────┘
```

---

## 브랜드 보이스

ohmyc가 유저에게 말하는 방식. UI 텍스트, 온보딩, 알림의 톤.

### 원칙

| 원칙 | 예시 |
|------|------|
| **친구처럼** | "로그인" → "돌아왔네!" |
| **짧게** | 한 문장이면 충분. 설명하지 않고 보여준다 |
| **캐릭터 중심** | "새 기능이 추가되었습니다" → "Yuna가 이제 사진도 기억해요" |
| **감탄** | 이름이 "oh my c"다. 발견과 놀라움의 톤 |

### 톤 스펙트럼

```
격식체 ──────────────────── 구어체
         ohmyc는 여기 ────→ ■
```

### UI 텍스트 예시

| 상황 | 텍스트 |
|------|--------|
| 빈 홈 화면 | "Find someone to talk to." |
| 채팅 시작 | "Say hi to Yuna." |
| 메모리 작동 | "Yuna remembered this." |
| 레벨업 | "You and Yuna are closer now." |
| 에러 | "Something went wrong. Let's try again." |
| 스트릭 | "5 days with Yuna." |
| 온보딩 끝 | "Your character is alive." |

---

## 스페이싱

Apple의 **8pt 그리드**를 기본으로 하되, 4pt 반단위를 허용.

| Token | Value | 용도 |
|-------|-------|------|
| `--space-xs` | 4px | 최소 간격 |
| `--space-sm` | 8px | 인라인 요소 간격 |
| `--space-md` | 12px | 카드 내부 패딩 |
| `--space-base` | 16px | 기본 패딩, 리스트 간격 |
| `--space-lg` | 20px | 섹션 간격 |
| `--space-xl` | 24px | 큰 섹션 간격 |
| `--space-2xl` | 32px | 화면 상단/하단 여백 |
| `--space-3xl` | 40px | 히어로 패딩 |
| `--space-4xl` | 48px | 섹션 간 대간격 |

### 화면 여백

| 위치 | 값 | 근거 |
|------|-----|------|
| 좌우 패딩 | 16px | Apple HIG 표준 margin |
| 카드 갭 | 12px | Apple 카드 간격 |
| Grouped List 좌우 | 16px | Apple Settings 표준 |

---

## Border Radius

Apple의 연속 곡률(continuous corner) 스타일.

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 10px | 입력필드, 작은 카드 |
| `--radius-md` | 14px | Grouped list, 모달 |
| `--radius-lg` | 20px | 캐릭터 카드, 히어로 |
| `--radius-xl` | 24px | 바텀시트 |
| `--radius-full` | 9999px | 버튼, 태그, 배지, 아바타, 검색바 |
| `--radius-bubble` | 20px | 채팅 버블 |

---

## 핵심 컴포넌트

### Character Card

| Property | Value |
|----------|-------|
| Aspect Ratio | 2:3 |
| Border Radius | `--radius-lg` (20px) |
| Shadow | Level 2 |
| Overlay | linear-gradient(transparent 30%, rgba(0,0,0,0.6) 100%) |
| Grid | 2col (iPhone), 3col (iPad) |
| Gap | 12px |
| Status Dot | `--system-green`, Breathe 모션 |
| Badge | Glass pill (Glass + blur) |

### Chat Bubble

| Variant | Background | Text | Radius |
|---------|-----------|------|--------|
| Character (좌) | `--bubble-char` | Label | 4px 20px 20px 20px |
| User (우) | `--tint` | white | 20px 4px 20px 20px |

### Button

| Variant | Background | Text | Radius |
|---------|-----------|------|--------|
| Primary (Large) | `--tint` | white | `--radius-md` (14px) |
| Secondary | Tertiary BG | `--tint` | `--radius-md` |
| Pill | `--tint` | white | `--radius-full` |

### Tab Bar (Liquid Glass)

| Property | Value |
|----------|-------|
| Background | `--glass-bg` + `--glass-blur` |
| Items | 5개: Home / Discover / Create / Chats / Profile |
| Active Icon | `--tint`, Glass 배경 |
| Inactive Icon | `--label-tertiary` |
| 스크롤 동작 | 아래로 스크롤 시 축소, 위로 스크롤 시 확장 (iOS 26) |

### Grouped List (Apple Settings 패턴)

| Property | Value |
|----------|-------|
| Background | Tertiary BG |
| Radius | `--radius-md` (14px) |
| Shadow | Level 1 |
| Item Padding | 12px 16px |
| Separator | `--separator`, 좌측 여백 포함 |
| Chevron | `--label-tertiary`, 8px |

---

## 접근성

| 항목 | 기준 |
|------|------|
| 색상 대비 | WCAG AA (4.5:1 텍스트, 3:1 대형 텍스트) |
| 터치 타겟 | 최소 44x44pt |
| Dynamic Type | 지원 (Body~Large Title) |
| VoiceOver | 모든 인터랙티브 요소에 label |
| Reduce Motion | Breathe/Grow 모션 비활성화 옵션 |
| Color Blind | tint 외에 형태(아이콘, 밑줄)로도 상태 구분 |

---

## 디자인 토큰 (전체)

```css
:root {
  /* ── Tint (Soft Apricot) ── */
  --tint: #FF8552;
  --tint-bright: #FFA47A;
  --tint-soft: #FFF4EE;

  /* ── Apple System (Light) ── */
  --label: #000000;
  --label-secondary: rgba(60, 60, 67, 0.6);
  --label-tertiary: rgba(60, 60, 67, 0.3);
  --bg-primary: #FFFFFF;
  --bg-secondary: #F2F2F7;
  --bg-tertiary: #FFFFFF;
  --separator: rgba(60, 60, 67, 0.29);
  --separator-opaque: #C6C6C8;

  /* ── Apple System Colors ── */
  --system-green: #34C759;
  --system-orange: #FF9500;
  --system-red: #FF3B30;

  /* ── ohmyc Extension ── */
  --warm-cream: #FBF8F7;
  --bubble-char: #F0E6E6;
  --bubble-char-dark: #2C2424;

  /* ── Liquid Glass ── */
  --glass-bg: rgba(255, 255, 255, 0.72);
  --glass-bg-dark: rgba(30, 30, 30, 0.72);
  --glass-border: rgba(255, 255, 255, 0.4);
  --glass-border-dark: rgba(255, 255, 255, 0.08);
  --glass-blur: blur(40px) saturate(180%);
  --glass-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);

  /* ── Shadow Levels ── */
  --shadow-1: 0 0.5px 2px rgba(0, 0, 0, 0.04);
  --shadow-2: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-3: 0 4px 20px rgba(0, 0, 0, 0.12);
  --shadow-4: 0 8px 40px rgba(0, 0, 0, 0.18);

  /* ── Typography ── */
  --font-system: -apple-system, BlinkMacSystemFont, 'SF Pro', system-ui, sans-serif;
  --font-rounded: 'SF Pro Rounded', -apple-system, system-ui, sans-serif;
  --font-wordmark: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-web: 'Inter', 'Pretendard', system-ui, sans-serif;

  /* ── Motion ── */
  --duration-micro: 150ms;
  --duration-transition: 300ms;
  --duration-emphasis: 500ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(.22, 1, .36, 1);

  /* ── Spacing (8pt grid, 4pt half) ── */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-base: 16px;
  --space-lg: 20px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 40px;
  --space-4xl: 48px;

  /* ── Radius (Apple continuous corner) ── */
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --radius-bubble: 20px;
}
```

---

## 사용 가이드

| 작업 | 방법 |
|------|------|
| 새 화면 설계 | Apple HIG 패턴(Large Title, Grouped List 등) 먼저 적용 → ohmyc 레이어(상태 모션, 캐릭터 카드) 추가 |
| 컴포넌트 구현 | 디자인 토큰 CSS 변수 import → 표준 컴포넌트 사용 |
| 캐릭터 카드 | 크리에이터 아트 가이드 + Card 스펙 참조 |
| 다크 모드 | `prefers-color-scheme` 미디어 쿼리 + 다크 토큰 |
| tint 변경 | `--tint`, `--tint-bright`, `--tint-soft` 3개만 교체 |

---

## 변경 프로토콜

```
1. VI.md 값 변경 (이 문서, SSOT)
2. vi.html 동기화 (시각 레퍼런스)
3. git commit
4. 하류 영향 점검
```

---

## 의존 관계

```
IDENTITY.md (정체성 SSOT)
    ↓ 의존
VI.md (시각 정체성) ← 이 문서
    ↓ 시각화
vi.html (시각 레퍼런스)
    ↓ 참조
앱 UI, 마케팅, 앱스토어 에셋
```

---

## 이력

| 버전 | 날짜 | 변경 |
|------|------|------|
| v0.1 | 2026-03-23 | 초안. Warm Crimson 기반, 컬러 슬롯 구조 |
| v0.2 | 2026-03-23 | Apple HIG + Liquid Glass 기반으로 전면 재구성. Liquid Glass 소재, 다크 모드, 아이콘, 캐릭터 아트 가이드, 그림자, 접근성, 태그라인, 브랜드 보이스 추가 |
| **v0.3** | **2026-03-24** | **Tint 컬러 확정: Soft Apricot #FF8552. 단일 tint 전략. Bright/Soft 파생값 확정.** |

컬러 탐색 산출물: `vi-exploration.html`, `vi-comparison.html`, `vi-gradient.html`, `vi-apple.html`, `vi-danggeun-study.html`
컬러 선정 기록: [`2026-03-24_컬러선정.md`](2026-03-24_컬러선정.md)
