# omc-evolve Documents

> 이 폴더가 omc 제품 문서의 **원본(SSOT)**입니다.
> netty-datacenter의 복사본이 아니라, 여기가 원본.

## 문서 구조

### 제품 정체성 & 스펙 (SSOT)

| 문서 | 역할 | 변경 빈도 |
|------|------|----------|
| **IDENTITY.md** | 제품 정체성, 원칙, 경계, 북극성 | 드물게 |
| **UX.md** | UX 원칙, 행동 규칙 | 가끔 |
| **CHARACTER-AGENT-SPEC.md** | Memory/Action/Growth 기술 스펙 | 가끔 |
| **VI.md** | 시각 정체성, 디자인 토큰, 컴포넌트 | 자주 |
| **FLOWS.md** | 화면 & 유저 플로우 정의 | 자주 |
| **GLOSSARY.md** | 용어 사전 | 가끔 |

### Evolve Cycle 시스템

| 문서 | 역할 |
|------|------|
| **SYSTEM.md** | Evolve Cycle 시스템 설계 |
| **CHECKLIST.md** | L1~L4 평가 체크리스트 (27항목) |

## 의존 관계

```
IDENTITY.md (최상위 — 모든 결정의 출발점)
    ↓
UX.md (UX 원칙)          CHARACTER-AGENT-SPEC.md (기술 스펙)
    ↓                         ↓
VI.md (시각)              FLOWS.md (플로우)
    ↓                         ↓
CHECKLIST.md ← 위 문서들에서 평가 기준 추출
    ↓
SYSTEM.md (루프 시스템이 체크리스트를 실행)
```

## ⚠️ 변경 규칙

### SSOT 문서는 사람만 변경할 수 있다 (Human-in-the-Loop Only)

**에이전트 자가 루프(Evolve loop)에서 SSOT 문서를 수정하는 것은 금지.**

| 문서 종류 | 변경 권한 | 근거 |
|----------|----------|------|
| SSOT (IDENTITY, UX, SPEC, VI, FLOWS, GLOSSARY) | **사람만** | 제품 방향은 사람이 결정 |
| CHECKLIST, SYSTEM | 사람 승인 후 에이전트 가능 | SSOT에서 파생되므로 |
| 프로토타입 코드 | 에이전트 자율 | 루프의 산출물 |

**에이전트가 SSOT 변경이 필요하다고 판단하면:**
1. 변경 제안을 리뷰 포털 또는 Slack에 제출
2. 사람이 검토 후 직접 수정
3. 수정된 SSOT 기반으로 다음 루프 실행

이 규칙의 이유: SSOT는 제품의 방향이다. 방향은 사람이 정한다. 에이전트는 그 방향 안에서 실행한다.

### 기타 규칙

- 이 repo의 `docs/`가 원본. 여기서 수정.
- 프로토타입은 이 문서들을 기준으로 평가됨.
- 문서 변경 시 CHECKLIST.md 영향도 검토.
