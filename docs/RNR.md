# Evolve Cycle — R&R (Roles & Responsibilities)

> 상태: **v0.2** (2026-03-26)
> Evolve Cycle의 관리 및 실행 역할 분담.

---

## 역할 구조

```
┌─────────────────────────────────────────────────┐
│  사람 (Sero)                                     │
│  SSOT 변경 · 피드백 · 레벨 전환 승인 · 리포트 판단  │
└────────────────────┬────────────────────────────┘
                     │ 방향 + 피드백
                     ▼
┌─────────────────────────────────────────────────┐
│  Cycle Owner / PM — netty                        │
│  오케스트레이션 · VI 리뷰 · 승인 · 프로세스 규칙     │
│  #11-omc-workstream 관리                         │
└───────────┬─────────────────┬───────────────────┘
            │ Plan + 리뷰      │ Plan + 리뷰
            ▼                  ▼
┌──────────────────┐ ┌────────────────────────────┐
│ Designer—aethmon │ │ Builder — devmon            │
│ 디자인 시안 제작   │ │ 프로토타입 병합·인프라·기술평가│
│ screens/ HTML    │ │ current/index.html SSOT    │
│ VI 준수·Flow 갱신 │ │ 버전 스냅샷·배포·무결성     │
└──────────────────┘ └────────────────────────────┘
```

---

## 상세 R&R

### 사람 (Sero)

| 책임 | 설명 |
|------|------|
| SSOT 변경 | IDENTITY/UX/SPEC/VI/FLOWS/GLOSSARY 수정은 사람만 |
| 피드백 | 리뷰 포털에서 별점 + 코멘트 + focus_next |
| 레벨 전환 승인 | L1→L2, L2→L3 등 피델리티 레벨 전환 시 확인 |
| 리포트 판단 | 💡 Idea / ❓ Discussion / 📝 SSOT Proposal 응답 |
| Cycle 트리거 | "Evolve Cycle 돌려" 또는 "N회 연속 실행" 지시 |

### Cycle Owner / PM — netty

| 단계 | 책임 | 산출물 |
|------|------|--------|
| **Evaluate** | 현재 프로토타입 vs 체크리스트 대조, Gap Report 작성 | `report.md` |
| **Plan** | Gap Report + 사람 피드백 기반 스코프 결정 (최대 3개 항목) | Plan 문서 |
| **Review (VI)** | VI.md 기준 대비 디자인 시안 리뷰, 승인 | 리뷰 코멘트 |
| **Review (UX)** | UX Critic 평가 (UX.md, IDENTITY.md 기준) | 채점 + 코멘트 |
| **Review (User Sim)** | 페르소나 3종 시뮬레이션 | 어색한 지점 목록 |
| **Gate** | 종합 점수 산출, 자동 재시도 or Publish 판정 | 판정 결과 |
| **Publish** | 버전 아카이브 + Slack 알림 + 리포트 | URL + 리포트 |
| **리포트** | 💡❓📝 발견사항 기록 → OPEN-ITEMS.md 갱신 | 리포트 |
| **피드백 반영** | 사람 피드백 수집 → 다음 Cycle Plan에 최우선 반영 | 다음 Plan |
| **프로세스 규칙** | 싸이클 규칙 관리, #11-omc-workstream 관리 | 규칙 문서 |

### Designer — aethmon

| 단계 | 책임 | 산출물 |
|------|------|--------|
| **Design** | 디자인 시안 제작 (screens/ 하위 HTML) | `screens/*.html` |
| **VI 준수** | VI.md 기준 준수, 벗어날 때 근거 제안 | 근거 문서/코멘트 |
| **Flow 갱신** | 화면 추가/변경 시 Prototype Flow 항목 업데이트 | Flow 반영 |

> ⚠️ aethmon은 `current/index.html`을 직접 수정하지 않는다. 시안은 `screens/`에 제작하고, 메인 프로토타입 병합은 devmon이 수행한다.

### Builder — devmon

| 단계 | 책임 | 산출물 |
|------|------|--------|
| **Merge** | aethmon 시안을 `current/index.html`에 병합 | 병합된 `index.html` |
| **Build** | Plan에 따라 프로토타입 코드 생성/수정 | `prototype.html` + `changelog.md` |
| **Version** | 버전 스냅샷 (`versions/vX.Y.Z/`) + manifest 등록 | 스냅샷 + manifest |
| **Verify** | HTML 무결성, 배포 확인, Prototype Flow 동작 검증 | 배포 URL |
| **Review (Spec)** | Spec Checker 평가 (CHARACTER-AGENT-SPEC.md 기준) | 채점 + 코멘트 |
| **Review (VI)** | VI Auditor 평가 (VI.md 기준, L3+에서 비전 모델) | 채점 + 코멘트 |
| **인프라** | repo, 배포, review.html, nav.js 유지 | 인프라 |

---

## Cycle 실행 흐름

```
netty:   [1] Evaluate — 현재 상태 진단
netty:   [2] Plan — 이번 Cycle 스코프 결정
              ↓ Plan 전달
aethmon: [3] Design — screens/ 에 디자인 시안 제작
              ↓ 시안 완료
netty:   [4] Review (VI) — VI.md 기준 리뷰, 수정 요청
              ↓ 승인
devmon:  [5] Merge — 시안을 current/index.html에 병합
              ↓ 병합 완료
netty:   [6a] Review (UX Critic + User Sim)     ← 병렬
devmon:  [6b] Review (Spec Checker + VI Auditor) ← 병렬
              ↓ 채점 완료
netty:   [7] Gate — 종합 점수 → 재시도 or Publish
devmon:  [8] Version — 스냅샷 + manifest + 배포 확인
netty:   [9] Publish — URL + 리포트 + Slack 알림
              ↓
사람:     [10] 리뷰 포털에서 피드백
              ↓
netty:   [11] 다음 Cycle에 피드백 반영 → [1]로
```

### 교차 검증 원칙

빌드/디자인한 에이전트가 같은 영역을 평가하지 않는다:
- aethmon이 디자인 → netty가 VI 리뷰
- devmon이 병합/빌드 → netty가 UX/UserSim 평가
- devmon이 Spec/VI 평가 → 자기가 만든 것의 기술적 정합성은 본인이 가장 잘 판단

### SSOT 보호 규칙

- `current/index.html`은 devmon만 수정한다 (SSOT)
- aethmon은 `screens/` 하위에서만 작업한다
- 모든 싸이클 완료 시 반드시 버전 넘버링한다
- Prototype Flow 메뉴는 화면 변경 시 항상 업데이트한다

---

## 트리거 규칙

| 트리거 | 동작 |
|--------|------|
| 사람이 "Evolve Cycle 돌려" | netty가 1 Cycle 실행 |
| 사람이 "N회 연속 실행" | netty가 N Cycle 연속 (Gate 로직에 따라) |
| 사람 피드백 도착 | netty가 다음 Cycle에 반영 (자동 시작은 사람 지시 시에만) |
| 레벨 전환 시 | 반드시 사람 확인 후 다음 레벨 진입 |

---

## 커뮤니케이션

| 채널 | 용도 |
|------|------|
| **#11-omc 스레드** | Cycle 알림, 리포트, 피드백 |
| **리뷰 포털** | 프로토타입 확인 + 상세 피드백 |
| **OPEN-ITEMS.md** | 열린 리포트 누적 추적 |

---

## 참조

- Evolve Cycle 시스템: `SYSTEM.md`
- 리포트 스펙: `REPORT-SPEC.md`
- 평가 체크리스트: `CHECKLIST.md`
- SSOT 변경 규칙: `README.md` > 변경 규칙
