# 방법론 — Methodology

## 두 가지 문서 유형

이 프로젝트는 모든 시리즈에서 두 가지 유형의 문서를 생산합니다. 각각의 분석 프로세스, 템플릿, 체크리스트가 다릅니다.

| 유형 | 역할 | 성격 | 템플릿 |
|------|------|------|--------|
| **시스템 분석** (Design Doc) | 제도가 어떻게 설계되어 있는가 | 정적, 구조적 | `templates/base-system.md` |
| **케이스 분석** (Case Study) | 제도가 실제로 어떻게 작동/실패했는가 | 동적, 사건/패턴 기반 | `templates/base-case.md` |

> 시리즈에 따라 추가 섹션이 있을 수 있습니다. `templates/public-addon.md` (공공 시리즈) 또는 `templates/corporate-addon.md` (기업 시리즈)를 참고하세요.

---

## Part 1: 시스템 분석 프로세스

### 분석 순서

```
1. 제도 조사 (Source First)
   └── 공식 자료로 실제 제도를 먼저 이해한다
2. 구조 추출 (Structure Extraction)
   └── 제도의 actor, flow, constraint, failure mode를 식별한다
3. 메타포 매핑 (Metaphor Mapping)
   └── 엔지니어링 개념과 대응시킨다
   └── glossary(core.md + 시리즈 glossary)에 등록된 용어를 우선 사용한다
4. 한계 검증 (Limits Check)
   └── 비유가 성립하지 않는 지점을 명시한다
5. 다이어그램 (Visualization)
   └── Mermaid로 시스템 구조를 시각화한다
```

**핵심 원칙: 제도가 먼저, 메타포는 그 다음.** 메타포에 맞추기 위해 현실을 왜곡하지 않는다.

### 시스템 분석 체크리스트

글을 `active` 상태로 변경하기 전에 다음을 모두 확인한다.

- [ ] 1순위 또는 2순위 출처가 최소 1개 인용되어 있는가
- [ ] Terminology map이 포함되어 있는가
- [ ] Source basis가 명시되어 있는가
- [ ] Limits of the analogy가 구체적으로 작성되어 있는가
- [ ] Disclaimer가 포함되어 있는가
- [ ] Mermaid 다이어그램이 포함되어 있는가
- [ ] 사용된 모든 메타포가 glossary(core 또는 시리즈)에 등록되어 있는가
- [ ] 규범적 판단과 시스템 기술이 명확히 분리되어 있는가
- [ ] See also 링크가 관련 글을 정확히 가리키는가
- [ ] notable_cases에 관련 케이스가 등록되어 있는가 (있다면)

---

## Part 2: 케이스 분석 프로세스

### 케이스 선정 기준

아무 사건이나 케이스가 되지 않는다. 다음 중 하나 이상을 만족해야 한다:

1. **시스템의 핵심 작동 방식을 드러낸다** — 설계가 의도대로 작동하거나 구조적 약점이 발현된 사례
2. **지속적인 제도 변화를 촉발했다** — 사건 이후 법률 개정, 기관 신설, 정책 전환 등 시스템 패치가 이루어진 경우
3. **해당 시스템의 대표적 사례이다** — 시스템 분석 글에서 가장 먼저 떠올리는 canonical example

**스코프 제한**: 시스템 분석 글 1개당 초기에는 1~2개 케이스로 제한한다.

### 분석 순서

```
1. 시스템 컨텍스트 확인 (System Context)
   └── 어떤 시스템 분석 글과 연결되는가 확인
2. 사실 기반 타임라인 구축 (Timeline)
   └── 공식 자료로 시간순 사실 관계를 정리
3. 트리거 vs 구조적 원인 분리 (Trigger vs Root Cause)
   └── 직접적 계기와 근본적 구조 원인을 구분
4. 대응과 결과 정리 (Response & Resolution)
   └── 누가 어떻게 대응했고 결과는 무엇이었는가
5. 시스템 변화 추적 (What Changed After)
   └── 케이스 이후 제도/법률/정책이 어떻게 바뀌었는가
6. 한계 검증 (Limits Check)
   └── 메타포의 한계를 명시
```

### 케이스 분류 체계

| 분류 축 | 값 | 설명 |
|---------|------|------|
| **severity** | `critical` / `high` / `medium` / `low` | 시스템에 미친 충격의 크기 |
| **tempo** | `acute` / `chronic` | 급성(단기 사건) vs 만성(장기 누적) |
| **impact_scope** | `component` / `system` / `cross-system` | 영향 범위 |
| **failure_pattern** | 아래 목록 참조 | 장애/작동 패턴 |

#### 장애 패턴 (failure_pattern) 목록

| 패턴 | 설명 | 예시 |
|------|------|------|
| `cascading-failure` | 하나의 장애가 연쇄적으로 전파 | IMF 외환위기 |
| `resource-exhaustion` | 자원 고갈 | 재정 위기, 연금 고갈 |
| `privilege-escalation` | 권한 범위 초과 시도 | 2024 계엄 선포 |
| `exception-flow` | 설계된 예외 처리가 실제로 발동 | 2016 탄핵 |
| `dependency-conflict` | 기존 의존성과 새로운 요소의 충돌 | 타다 금지법 |
| `coordination-failure` | 다수 actor 간 협조 실패 | 재난 대응 실패 |
| `feedback-loop` | 양성/음성 피드백이 제어 불능 | 부동산 가격 폭등 |
| `alert-fatigue` | 경고가 반복되나 대응이 무뎌짐 | 저출생 경고 무시 |
| `design-gap` | 설계 시 예상하지 못한 상황 | 디지털 시대 법률 공백 |
| `scaling-failure` | 규모 변화에 구조가 대응하지 못함 | 급성장 조직의 프로세스 붕괴 |
| `migration-failure` | 시스템 전환 중 발생하는 장애 | 대규모 조직 개편 실패 |

### 케이스 분석 체크리스트

- [ ] 연결된 시스템 분석 글이 존재하는가 (또는 동시 작성 중인가)
- [ ] 타임라인이 공식 자료 기반으로 작성되었는가
- [ ] 트리거와 구조적 원인이 분리되어 있는가
- [ ] severity, tempo, impact_scope, failure_pattern이 frontmatter에 기록되었는가
- [ ] 케이스 이후 시스템 변화가 추적되었는가
- [ ] Limits of the analogy가 구체적으로 작성되어 있는가
- [ ] 규범적 판단("~해야 했다")과 사실 기술("~했다")이 분리되어 있는가
- [ ] 시스템 분석 글의 `notable_cases`에 이 케이스가 등록되었는가

---

## 공통 규칙

### 출처 위계 (Source Hierarchy)

| 등급 | 출처 유형 | 예시 |
|------|-----------|------|
| **1순위** | 법률 원문 / 헌법 / 관보 / 기업 공시 | 대한민국 헌법, 국회법, 사업보고서 |
| **2순위** | 정부 공식 문서 / 통계 / 기업 IR | 기획재정부 예산안, 통계청 자료, 분기 실적 |
| **3순위** | 공신력 있는 해설 | 헌법재판소 판례, 국회 입법조사처 보고서, 업계 리서치 |
| **4순위** | 학술 자료 | 법학/정치학/경제학/경영학 논문 |
| **5순위** | 언론 보도 | 팩트 확인용으로만 사용, 분석의 근거로 사용하지 않음 |

**금지**: 블로그, 위키피디아, SNS를 1차 출처로 사용하지 않는다.

### 비유 규칙 (Analogy Rules)

**해야 하는 것:**
- 실제 제도를 먼저 설명하고, 그 다음에 엔지니어링 메타포를 제시한다
- 용어 매핑 테이블(Terminology Map)을 반드시 포함한다
- 비유가 깨지는 지점을 "Limits of the analogy" 섹션에서 구체적으로 명시한다
- glossary에 등록된 용어를 우선 사용한다 (core → 시리즈 glossary 순서로 확인)

**하지 않는 것:**
- 글마다 새로운 메타포를 발명하지 않는다 — glossary에 없는 매핑은 glossary에 먼저 등록한다
- "~와 같다"에서 멈추지 않는다 — 왜 같은지, 어디까지 같은지, 어디서 다른지를 모두 다룬다
- 메타포에 맞추기 위해 현실의 복잡성을 생략하지 않는다
- 규범적 판단("~해야 한다")을 시스템 기술("~이다")과 섞지 않는다

### 인용 형식 (Citation Format)

```markdown
대한민국 헌법 제1조 제1항은 "대한민국은 민주공화국이다"라고 선언한다.[^1]

[^1]: 대한민국 헌법 제1조 제1항. https://www.law.go.kr/헌법/대한민국헌법
```

### 리뷰 주기 (Review Cadence)

- 각 글의 frontmatter에 `last_reviewed` 날짜를 기록한다
- 관련 법률/제도가 개정되면 해당 글을 업데이트한다
- 최소 연 1회 전체 글을 검토하여 정확성을 확인한다

### 글 상태 (Article Status)

```
draft → review → active → outdated → archived
```

| 상태 | 의미 |
|------|------|
| `draft` | 초안. 구조와 내용이 작성 중 |
| `review` | 리뷰 대기. 출처 확인 완료 |
| `active` | 체크리스트 통과. 공개 가능 |
| `outdated` | 관련 제도가 개정되어 업데이트 필요 |
| `archived` | 더 이상 유효하지 않음. 참고용 보존 |

### 파일 명명 규칙

| 유형 | 패턴 | 예시 |
|------|------|------|
| 시스템 글 | `descriptive-slug.md` | `constitution-as-root-architecture.md` |
| 케이스 (급성) | `YYYY-slug.md` | `2016-impeachment.md` |
| 케이스 (다년) | `YYYY-YYYY-slug.md` | `1997-1998-imf-crisis.md` |
| 케이스 (만성) | `descriptive-slug.md` | `low-birth-rate-chronic-decline.md` |

### Article-as-Folder 패턴

- 이미지/다이어그램 없는 글 → 단일 `.md` 파일
- 에셋이 있는 글 → 폴더로 전환:
  ```
  2016-impeachment/
  ├── index.md
  └── assets/
      ├── timeline.png
      └── flowchart.svg
  ```
