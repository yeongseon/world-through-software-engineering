# 기여 가이드 — Contributing

이 프로젝트에 기여해주셔서 감사합니다.

## 기여 방법

### 1. 새로운 글 작성

1. 해당 유형의 템플릿을 복사합니다:
   - 시스템 분석: `templates/base-system.md` + 시리즈별 addon
   - 케이스 분석: `templates/base-case.md` + 시리즈별 addon
2. 해당 시리즈/도메인의 `system/` 또는 `cases/` 디렉토리에 저장합니다.
3. Frontmatter를 빠짐없이 채웁니다.
4. [방법론](docs/methodology.md)의 분석 프로세스를 따릅니다.
5. 해당 유형의 체크리스트를 모두 통과하는지 확인합니다.
6. Pull Request를 생성합니다.

### 2. 기존 글 개선

- 오류 수정, 출처 추가, 다이어그램 개선 등은 언제든 환영합니다.
- 메타포 변경이나 구조적 수정은 Issue에서 먼저 논의해주세요.

### 3. 용어 추가

- 새로운 메타포 매핑은 반드시 glossary에 먼저 등록합니다.
  - 프로젝트 전체 공유 용어: `docs/glossary/core.md`
  - 시리즈 전용 용어: 해당 시리즈의 `glossary.md`
- glossary PR과 해당 메타포를 사용하는 글의 PR을 함께 제출해주세요.

### 4. 새로운 시리즈/도메인 제안

- Issue에서 먼저 논의합니다.
- 최소 3개 이상의 system 글 주제가 있어야 도메인으로 등록됩니다.
- 기존 도메인 내 topics/에서 시작하여, 글이 쌓이면 독립 도메인으로 승격하는 것을 권장합니다.

## 글 작성 규칙

### 반드시 지켜야 하는 것

- [ ] 제도를 먼저 설명하고, 메타포는 그 다음에 제시한다
- [ ] Terminology map (3열 테이블)을 포함한다
- [ ] Source basis를 명시한다 — 1순위 또는 2순위 출처 최소 1개
- [ ] Limits of the analogy를 구체적으로 작성한다
- [ ] Disclaimer를 포함한다
- [ ] Mermaid 다이어그램을 포함한다
- [ ] 사용한 모든 메타포가 glossary에 등록되어 있다
- [ ] 규범적 판단("~해야 한다")과 시스템 기술("~이다")을 섞지 않는다

### 하지 않는 것

- 핫테이크나 사건 반응형 글을 쓰지 않는다
- 정치적 입장을 취하지 않는다
- glossary에 없는 메타포를 등록 없이 사용하지 않는다
- 블로그, 위키피디아, SNS를 1차 출처로 인용하지 않는다

## 파일 명명 규칙

- 영어 slug, 소문자, 하이픈 구분
- 시스템 글: `descriptive-slug.md` (예: `constitution-as-root-architecture.md`)
- 케이스 글 (급성): `YYYY-slug.md` (예: `2016-impeachment.md`)
- 케이스 글 (다년): `YYYY-YYYY-slug.md` (예: `1997-1998-imf-crisis.md`)
- 케이스 글 (만성): `descriptive-slug.md` (예: `low-birth-rate-chronic-decline.md`)

## Article-as-Folder

- 에셋이 없는 글 → 단일 `.md` 파일
- 에셋(이미지, 다이어그램 등)이 있는 글 → 폴더로 전환:
  ```
  2016-impeachment/
  ├── index.md
  └── assets/
  ```

## 커밋 메시지

```
feat(korea/politics): add article on constitution as root architecture
fix(corporate/hr): correct source citation in hiring article
docs(glossary): add new economy terms to core glossary
chore: update issue templates
```

형식: `type(scope): description`
- **type**: feat, fix, docs, chore, refactor
- **scope**: 시리즈/도메인 (예: `korea/politics`, `corporate/hr`, `glossary`, `templates`)

## 리뷰 기준

PR은 다음을 기준으로 리뷰합니다:

1. **정확성**: 제도 설명이 공식 자료와 일치하는가
2. **구조**: 템플릿을 따르고 있는가
3. **균형**: 메타포의 유효 범위와 한계가 모두 명시되어 있는가
4. **출처**: 인용이 충분하고 위계에 맞는가
5. **용어 일관성**: glossary에 등록된 용어를 사용하고 있는가
