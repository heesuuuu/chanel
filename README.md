# 💎 Chanel x Jennie 리디자인 프로젝트

> 샤넬 뷰티 브랜드의 감성과 K-pop 아이콘 제니(Jennie)의 이미지를 결합하여 리디자인한 웹사이트 개인 프로젝트입니다.

---

## 📌 프로젝트 개요

- **프로젝트명**: Chanel x Jennie 리디자인
- **목적**: 기존 샤넬 공식 사이트를 기반으로 제니를 메인 모델로 구성하여 브랜드 감성과 사용자 경험을 강화한 리뉴얼 웹사이트 제작
- **대상 사용자**: 20~30대 뷰티/패션 관심 여성 사용자층
- **특징**
  - 제니의 고급스러움과 샤넬의 클래식한 브랜드 이미지 결합
  - 패턴 기반의 CSS 설계로 유지보수 용이
  - GSAP 및 Swiper를 통한 생동감 있는 인터랙션 구현

---

## 🛠️ 사용 기술

- HTML5 / CSS3 / SCSS (Sass)
- Vanilla JavaScript (ES6)
- GSAP (Scroll Animation)
- Swiper.js (슬라이더)
- Git / VS Code

---

## 📁 폴더 구조

📦 root
├── pages/                 # HTML 페이지
│   ├── layout/            # 전체 레이아웃 관련 HTML
│   ├── index.html         # 메인 페이지
│   └── serv1.html         # 서비스 상세 페이지
│
├── resources/             # 리소스 모음
│   ├── css/
│   │   ├── output/        # 컴파일된 CSS
│   │   │   ├── styles.css
│   │   │   └── styles.css.map
│   │   └── pattern_css/   # 패턴용 CSS 파일
│   ├── images/            # 프로젝트 이미지
│   │   ├── component/common/
│   │   ├── pattern/
│   │   │   ├── common/icon/jewelry
│   │   ├── main/
│   │   ├── serve/
│   │   ├── serve2/
│   │   └── video/
│   ├── js/                # JavaScript 모듈
│   │   ├── include.js
│   │   ├── ui-gsap.js     # GSAP 애니메이션
│   │   ├── ui-pattern.js  # 패턴 스크립트
│   │   └── ui-swiper.js   # Swiper 슬라이더
│   └── scss/              # SCSS 파일
│       ├── component/
│       │   └── mixins/    # Mixin 및 전역 변수
│       │       ├── _breakpoints.scss
│       │       ├── _utils.scss
│       │       ├── _color.scss
│       │       ├── _fonts.scss
│       │       ├── _include.scss
│       │       ├── _reset.scss
│       │       └── _variables.scss
│       └── pattern/       # 실제 페이지용 스타일
│           ├── _p_common.scss
│           ├── _p_content.scss
│           ├── _p_include.scss
│           ├── _p_layout.scss
│           ├── _p_main.scss
│           ├── _p_serv1.scss
│           └── styles.scss
│
├── .gitignore
└── README.md              # 프로젝트 설명 파일
