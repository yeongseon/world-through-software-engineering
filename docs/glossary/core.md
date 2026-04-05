# 공유 용어 사전 — Core Glossary

> 이 프로젝트 전체에서 공유하는 엔지니어링 메타포 매핑입니다.
> 시리즈별 전용 용어는 각 시리즈의 `glossary.md`를 참고하세요.

## 사용 규칙

1. **Glossary-first**: 새로운 메타포를 글에서 사용하려면, 반드시 여기(또는 시리즈 glossary)에 먼저 등록한다.
2. **일관성**: 같은 개념에 대해 글마다 다른 메타포를 쓰지 않는다.
3. **계층**: core glossary의 용어가 시리즈 glossary보다 우선한다. 충돌 시 core를 따른다.

---

## 구조적 메타포 (Structural)

| 현실 세계 | 엔지니어링 메타포 | 설명 |
|-----------|-------------------|------|
| 헌법 / 정관 | Root Architecture | 다른 모든 규칙이 의존하는 최상위 설계 문서 |
| 법률 체계 / 사규 체계 | Layered Architecture | 상위 규칙이 하위 규칙을 제약하는 계층 구조 |
| 위임 입법 / 권한 위임 | Dependency Injection | 상위 시스템이 하위 시스템에 구현을 위임 |
| 제도 / 프로세스 | System | 입력을 받아 처리하고 출력을 내는 설계된 구조 |
| 기관 / 부서 | Component / Service | 특정 책임을 수행하는 독립적 단위 |
| 규정 / 조항 | Rule Set | 시스템의 동작을 제약하는 명시적 규칙 |
| 계약 / 합의 | Interface Contract | 두 시스템(당사자) 간의 명시적 상호작용 규약 |
| 헌법 전문 / 사업 미션 | README / Design Philosophy | 시스템의 설계 철학과 목적을 선언하는 문서. 코드를 직접 실행하지는 않지만 모든 설계 판단의 기준 |
| 기본권 / 핵심 보장 사항 | Core API Contract | 시스템이 모든 사용자에게 보장하는 불가침의 인터페이스 |
| 삼권분립 / 역할 분리 | Separation of Concerns | 책임을 분리하여 결합도를 낮추고 독립적 동작을 보장하는 설계 원칙 |
| 삼권분립 / 권력 격리 | Fault Isolation | 한 컴포넌트의 장애가 다른 컴포넌트로 전파되지 않도록 격리하는 설계. 권력분립은 Separation of Concerns이자 Fault Isolation이다 |

## 흐름 메타포 (Flow)

| 현실 세계 | 엔지니어링 메타포 | 설명 |
|-----------|-------------------|------|
| 입법 과정 | Legislative Pipeline | 입력(법안)이 여러 단계를 거쳐 출력(법률)이 되는 처리 흐름 |
| 예산 편성 / 리소스 배분 | Resource Allocation | 한정된 자원을 경쟁하는 요청에 배분하는 메커니즘 |
| 채용 프로세스 | Candidate Pipeline | 후보가 여러 단계를 통과하는 선별 흐름 |
| 세일즈 파이프라인 | State Machine | 리드가 정의된 상태를 순서대로 전이하는 구조 |
| 승인 절차 | Gated Workflow | 각 단계에 통과 조건(gate)이 있는 순차 처리 |
| 마감 / 결산 | Batch Closing Cycle | 일정 주기로 누적된 처리를 확정하는 배치 작업 |
| 전환 / 클로징 | Conversion Event | 한 상태에서 다른 상태로의 확정적 전이 |

## 제어 메타포 (Control)

| 현실 세계 | 엔지니어링 메타포 | 설명 |
|-----------|-------------------|------|
| 금리 / 핵심 정책 변수 | Control Parameter | 시스템 전체 동작에 영향을 미치는 조절 가능한 변수 |
| 세금 / 인센티브 | Incentive Mechanism | 특정 행동을 유도하거나 억제하는 설계된 피드백 |
| 선거 / 리더 교체 | Leadership Rotation | 주기적으로 실행 주체를 교체하는 메커니즘 |
| 탄핵 / 비상 해임 | Exception Flow | 정상 흐름이 아닌 비상 경로가 발동되는 처리 |
| 감사 / 검사 | Validation | 시스템 상태나 출력이 규칙에 부합하는지 검증 |
| 위헌 심사 | Schema Validation | 하위 규칙이 상위 규칙(스키마)에 부합하는지 검증 |

## 장애 메타포 (Failure)

| 현실 세계 | 엔지니어링 메타포 | 설명 |
|-----------|-------------------|------|
| 연쇄 위기 | Cascading Failure | 한 컴포넌트의 장애가 의존 시스템으로 전파 |
| 자원 고갈 (재정, 연금) | Resource Exhaustion | 가용 자원이 소진되어 시스템이 정지 |
| 권한 남용 | Privilege Escalation | 부여된 권한 범위를 초과하여 접근 시도 |
| 협조 실패 | Coordination Failure | 다수 actor가 공동 목표에 합의하지 못함 |
| 피드백 폭주 (부동산 등) | Feedback Loop | 양성 피드백이 제어 불능 상태로 증폭 |
| 경고 무시 (저출생 등) | Alert Fatigue | 반복된 경고에 대응이 무뎌지는 현상 |
| 제도 공백 | Design Gap | 설계 시 예상하지 못한 상황이 발생 |
| 규모 실패 | Scaling Failure | 규모 변화에 기존 구조가 대응하지 못함 |
| 전환 실패 | Migration Failure | 시스템 전환 과정에서 발생하는 장애 |
| 의존성 충돌 | Dependency Conflict | 기존 의존성과 새로운 요소가 충돌 |

## 규모 메타포 (Scale)

| 현실 세계 | 엔지니어링 메타포 | 설명 |
|-----------|-------------------|------|
| 조직 설계 / 조직 개편 | Scaling Architecture | 규모 변화에 대응하는 구조 설계 |
| 표준 운영 절차 (SOP) | Runbook | 반복 작업의 절차를 문서화한 실행 가이드 |
| 물류 / 공급망 | Logistics Pipeline | 물리적 자원이 여러 단계를 거쳐 이동하는 흐름 |
| 재고 | Inventory Buffer | 수요 변동을 흡수하는 중간 저장소 |
| 브랜드 | Stable Abstraction Layer | 내부 구현이 바뀌어도 외부에 일관된 인터페이스를 제공 |
| 디자인 시스템 | Component Library | 재사용 가능한 표준화된 구성 요소 모음 |
| 와이어프레임 / 설계도 | Blueprint | 구현 전 구조와 흐름을 정의하는 설계 산출물 |

## 지표 메타포 (Metrics)

| 현실 세계 | 엔지니어링 메타포 | 설명 |
|-----------|-------------------|------|
| 출산율 | Throughput Indicator | 시스템의 처리량/생산량을 나타내는 지표 |
| 비용 | Runtime Cost | 시스템 운영에 소요되는 자원 |
| 보상 / 급여 | Incentive Model | 참여자의 동기를 설계하는 보상 구조 |
| 평가 | Review Protocol | 정기적으로 성과/상태를 검증하는 절차 |
| 사용자 리서치 | User Testing | 실제 사용자의 행동과 피드백을 수집하는 검증 방법 |

## 특수 패턴 메타포 (Domain-Specific Patterns)

| 현실 세계 | 엔지니어링 메타포 | 설명 |
|-----------|-------------------|------|
| 전세 제도 | Unique Protocol | 특정 시스템에만 존재하는 고유한 처리 방식 |
| 사교육 | Shadow Processing | 공식 시스템 바깥에서 병렬로 실행되는 비공식 처리 |
| 캠페인 / 프로모션 | Traffic Generation Workflow | 외부 트래픽을 유입시키는 워크플로우 |
| 마케팅 퍼널 | Conversion Pipeline | 넓은 입력을 단계적으로 좁혀 전환하는 구조 |
| 메시지 / 대외 커뮤니케이션 | External API Surface | 외부에 노출되는 시스템의 인터페이스 |

---

> ⚠️ **새로운 메타포를 추가하려면**: 이 파일에 PR을 먼저 제출하고, 해당 메타포를 사용하는 글의 PR과 함께 머지합니다.
> 시리즈 특화 용어는 해당 시리즈의 `glossary.md`에 등록합니다.
