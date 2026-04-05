# 법률 — Law

대한민국의 법체계를 소프트웨어 엔지니어링의 관점에서 분석합니다. 법체계의 계층 구조, 위임입법, 법개정 프로세스, 위헌심사 메커니즘을 시스템 설계로 이해합니다.

## 도메인 개요

법체계는 계층적 아키텍처로, 헌법이 root이고 법률, 시행령, 규칙이 순차적으로 구현됩니다. 마치 소프트웨어의 아키텍처 결정, API 명세, 구현 디테일의 관계와 유사합니다.

## 주요 은유

- **법체계**: Layered Architecture — 헌법→법률→시행령→규칙의 계층
- **위임입법**: Dependency Injection — 상위 법이 하위 법에 권한 위임
- **법개정**: Changelog — 법의 변경 이력과 버전 관리
- **위헌심사**: Validation Engine — 법의 유효성 검증 프로세스
- **판례**: Design Pattern — 반복되는 법적 상황의 해결 방식

## 계획된 글

### 시스템 분석
- [draft] [헌법 — 루트 아키텍처](system/constitution-as-root-architecture.md) — Root Architecture 관점에서 헌법의 구조 분석
- [계획중] 법체계의 아키텍처 — Layered Design Pattern 분석
- [계획중] 위임입법 이해하기 — Dependency Injection으로 보는 권한 위임
- [계획중] 위헌심사 프로세스 — Validation과 Exception Handling

### 케이스 분석
- [계획중] 특정 법개정 사례 — System Migration의 위험성
- [계획중] 판례의 패턴화 — Design Pattern으로 보는 법적 판단

[시리즈로 돌아가기 →](/docs/series/korea-systems/README.md)

[용어 사전 →](/docs/series/korea-systems/glossary.md)
