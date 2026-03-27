# Evolve Cycle — Report Spec

> 루프 실행 중 발견한 아이디어/논의 사항/SSOT 변경 제안을 사람에게 리포트하는 구조.

---

## 왜 필요한가

Evolve Cycle는 SSOT를 수정할 수 없다. 하지만 루프를 돌면서 다음을 발견할 수 있다:

- SSOT 문서의 모순이나 빈 곳
- 프로토타이핑 중 떠오른 UX 아이디어
- 스펙에 정의되지 않은 엣지 케이스
- 체크리스트에 추가해야 할 항목
- 기술적 제약으로 인한 트레이드오프

이것들을 **묻어두면 낭비**다. 사람에게 올려야 한다.

---

## 리포트 종류 (3가지)

| 종류 | 아이콘 | 언제 | 예시 |
|------|--------|------|------|
| **💡 Idea** | 아이디어 | 루프 중 새로운 기능/UX 아이디어 발견 | "부재 복귀 시 캐릭터가 선물을 준비하면 어떨까?" |
| **❓ Discussion** | 논의 필요 | SSOT에 답이 없거나 모순 발견 | "온도가 0°C 이하로 내려가면 어떻게 해야 하는지 정의 없음" |
| **📝 SSOT Proposal** | SSOT 변경 제안 | 스펙 수정이 필요하다고 판단 | "FLOWS.md에 Life Grid 미니앱 플로우가 빠져있음" |

---

## 리포트 형식

### 파일: `prototype/versions/v{N}/report.md`

매 이터레이션 리포트에 아래 섹션을 추가:

```markdown
## 🔔 Human Attention Required

### 💡 Ideas
- [I-001] 부재 복귀 시 캐릭터가 "그동안 있었던 일" 요약 카드를 보여주면?
  - 근거: User Sim week2-dormant 페르소나에서 복귀 후 맥락 단절감 감지
  - 영향: UX.md 원칙 1 (관계의 깊이) 강화

### ❓ Needs Discussion  
- [D-001] 온도가 0°C까지 떨어진 유저가 복귀할 때 캐릭터 톤이 어때야 하는가?
  - 현재 SPEC (v0.2): SOUL.md에 temperature_expression 필드 없음. 성격 섹션에서 플랫폼이 추론
  - 제안 옵션: A) 완전 처음처럼 / B) 기억은 있지만 서먹하게
  - 판단 필요: 사람이 A/B 중 선택 → SSOT 업데이트

### 📝 SSOT Change Proposals
- [S-001] FLOWS.md에 F9: Life Grid → Mini-App Install 플로우 추가 필요
  - 이유: 프로토타입에 구현했으나 FLOWS.md에 정의 없음
  - 제안 diff: `F9. Life Grid Install: life-grid → miniapp-store → (install) → chat(meals)`
  - 영향 범위: CHECKLIST.md L1에 F7 추가 가능
```

### ID 규칙

- `I-{NNN}`: Idea
- `D-{NNN}`: Discussion
- `S-{NNN}`: SSOT Proposal
- 번호는 전체 프로젝트에서 연속 (중복 금지)

---

## 전달 채널

### 1. 리뷰 포털 (review.html)

리뷰 포털에 "🔔 Human Attention" 섹션 추가.
채점 결과 아래, 피드백 폼 위에 배치.

```
📊 자동 채점 결과
    ↓
🔔 Human Attention Required   ← 새로 추가
  💡 1 Idea · ❓ 1 Discussion · 📝 1 Proposal
    ↓
📝 사람 평가 폼
```

각 항목에 사람이 반응할 수 있는 액션:
- 💡 Idea → [👍 좋다] [🤔 나중에] [👎 불필요]
- ❓ Discussion → [텍스트 입력으로 답변]
- 📝 SSOT Proposal → [✅ 승인] [❌ 거절] [✏️ 수정 후 승인]

### 2. Slack 알림 (#11-omc)

이터레이션 완료 알림에 리포트 요약 포함:

```
🔄 omc-evolve v{N} 완료 — L{X} (종합 {score}점)
🔗 프로토타입: https://...
📋 리뷰 포털: https://...

🔔 Human Attention:
  💡 1 아이디어: 복귀 시 요약 카드
  ❓ 1 논의 필요: 0°C 근처 캐릭터 톤
  📝 1 SSOT 제안: FLOWS.md 플로우 추가
```

### 3. 누적 트래커: `docs/evolve/OPEN-ITEMS.md`

열린 리포트를 추적하는 파일. 사람이 해결하면 Resolved로 이동.

```markdown
# Open Items

## Open
- [D-001] 온도 0°C 캐릭터 톤 — v003에서 발견, 대기 중
- [S-001] FLOWS.md 플로우 추가 — v003에서 제안, 대기 중

## Resolved
- [I-001] 복귀 요약 카드 — v003에서 제안 → v005에서 채택 → UX.md 반영
```

---

## 에이전트 행동 규칙

1. **루프 중 발견하면 즉시 기록** — report.md에 축적
2. **판단이 필요한 건 멈추지 말고 기록만** — 루프는 계속 돌고, 리포트로 올린다
3. **SSOT Proposal은 절대 직접 적용하지 않는다** — 제안 + diff만 작성
4. **사람이 승인한 Proposal만** 다음 루프에 반영
5. **같은 이슈를 반복 리포트하지 않는다** — OPEN-ITEMS.md에 이미 있으면 skip

---

## 사람 응답 후 플로우

```
사람이 리뷰 포털에서 응답
    ↓
💡 Idea [👍] → 다음 루프 Plan에 반영
❓ Discussion [답변] → 답변 내용을 다음 루프 컨텍스트에 포함
📝 Proposal [✅] → 사람이 SSOT 직접 수정 → 다음 루프에서 새 SSOT 기반으로 실행
📝 Proposal [❌] → OPEN-ITEMS에서 Resolved (rejected)로 이동
```

---

## 참조

- 변경 권한: `docs/README.md` > 변경 규칙
- 루프 구조: `docs/evolve/SYSTEM.md`
