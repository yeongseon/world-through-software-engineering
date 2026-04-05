# CHANGELOG

이 프로젝트의 주요 변경사항을 기록합니다.

## [0.2.0] - 2026-04-05

### Changed

- **프로젝트 구조를 v2.1로 전면 개편**
  - seasons → series 기반 구조로 전환
  - incidents → cases로 용어 변경 (기업 도메인 포괄)
  - 단일 glossary → 계층형 glossary (core + 시리즈별)
  - 단일 템플릿 → base + addon 템플릿 체계
  - 글 상태: `draft → source-checked → published` → `draft → review → active → outdated → archived`

### Added

- 시리즈 2: 회사 직군 (corporate-functions) — PM, 법무, 재무, HR, 세일즈, 마케팅, 운영, 디자인
- `docs/topics/` — 시리즈 횡단 주제 영역
- `docs/glossary/core.md` — 프로젝트 전체 공유 용어 사전
- 시리즈별 `glossary.md` — 시리즈 전용 용어
- `templates/base-system.md` — 시스템 분석 기본 템플릿
- `templates/base-case.md` — 케이스 분석 기본 템플릿
- `templates/public-addon.md` — 공공 시리즈 추가 섹션
- `templates/corporate-addon.md` — 기업 시리즈 추가 섹션
- `ARCHITECTURE.md` — 9개 ADR (아키텍처 결정 기록)
- `CODE_OF_CONDUCT.md` — 행동 강령
- `LICENSE` — CC BY-SA 4.0 전문
- `.github/ISSUE_TEMPLATE/` — 새 글 제안, 오류 수정 템플릿
- `.github/pull_request_template.md` — PR 템플릿
- 12개 도메인별 README (4 korea + 8 corporate)
- Article-as-Folder 패턴 도입
- 선택적 하위 폴더 규칙 (글 ~10개 초과 시)

### Removed

- `docs/seasons/` 디렉토리 (series로 대체)
- `docs/glossary.md` 단일 파일 (계층형으로 대체)
- `templates/article-template.md` (base + addon으로 대체)

## [0.1.0] - 2026-04-05

### Added

- 프로젝트 초기 구조 생성
- README.md — 프로젝트 개요
- docs/manifesto.md — 프로젝트 선언문
- docs/methodology.md — 방법론 (분석 프로세스, 출처 위계, 비유 규칙, 체크리스트)
- docs/index.md — 시리즈 목차
- docs/glossary.md — 용어 사전 (정치, 법률, 경제, 사회)
- templates/article-template.md — 통일 아티클 템플릿
- CONTRIBUTING.md — 기여 가이드
- Season 01 디렉토리 구조 (politics, law, economy, society)
