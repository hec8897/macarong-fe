# Macarong FE

Next.js 기반의 프론트엔드 프로젝트입니다.

## 🚀 시작하기

### 개발 서버 실행

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

### 빌드

```bash
yarn build
yarn start
```

## 🛠 기술 스택

- **Framework**: Next.js 16 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 + SCSS
- **Package Manager**: Yarn Berry
- **Code Quality**: ESLint + Prettier
- **Font**: Pretendard Variable

## 📁 프로젝트 구조 (아토믹 디자인 패턴)

```
src/
├── components/          # 아토믹 디자인 컴포넌트
│   ├── atoms/          # 가장 작은 단위 (Button, Input 등)
│   ├── molecules/      # Atoms의 조합 (SearchBar, Card 등)
│   ├── organisms/      # 복잡한 컴포넌트 (Header, Footer 등)
│   └── templates/      # 페이지 레이아웃
├── pages/              # Next.js 페이지
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티 함수
├── types/              # TypeScript 타입 정의
├── constants/          # 상수 정의
└── styles/             # 전역 스타일
```

## 📝 스크립트

```bash
# 개발 서버
yarn dev

# 프로덕션 빌드
yarn build

# 프로덕션 서버
yarn start

# 린트 검사
yarn lint

# 린트 자동 수정
yarn lint:fix

# 코드 포맷팅
yarn format
```

## 📚 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/)
