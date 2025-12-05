# Macarong FE 🍪

차량 정비 예약 관리 시스템을 위한 Next.js 기반 프론트엔드 프로젝트입니다.

## 📋 프로젝트 개요

Macarong은 차량 정비소의 예약 관리를 효율적으로 처리할 수 있는 웹 애플리케이션입니다.
예약 리스트 조회, 상세 정보 확인, 예약 확정/거절 등의 기능을 제공하며, 직관적인 UI/UX로 사용자 경험을 극대화했습니다.

### 주요 기능

#### 📋 예약 관리

- **예약 리스트**: 날짜별 예약 그룹핑 및 시간순 정렬
- **무한 스크롤**: React Virtual을 활용한 성능 최적화된 리스트
- **필터링**: 취소된 예약 제외 토글 기능
- **예약 상세**: 고객, 차량, 상품, 결제 정보 통합 뷰

#### ⚡ 성능 최적화

- **React Query**: 서버 상태 관리 및 자동 캐싱
- **가상 스크롤**: 대량 데이터 렌더링 최적화

## 🚀 시작하기

### 사전 요구사항

- Node.js 18 이상
- Yarn Berry

### 설치

```bash
# 의존성 설치
yarn install
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```bash
NEXT_PUBLIC_API_BASE_URL=https://port-0-macarong-recruitment-api-lyyamidzf5be5120.sel4.cloudtype.app/api
```

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

### Core

- **Framework**: Next.js 16 (Pages Router)
- **Language**: TypeScript
- **React**: 19.2.0

### 상태 관리 & 데이터 페칭

- **React Query**: @tanstack/react-query (서버 상태 관리)
- **Axios**: HTTP 클라이언트

### UI & 스타일링

- **Styling**: Tailwind CSS 3 + SCSS Modules
- **Icons**: Custom SVG
- **Font**: Pretendard Variable

### 유틸리티

- **Date**: Day.js
- **Virtual Scroll**: @tanstack/react-virtual
- **Class Names**: classnames
- **Lodash**: 유틸리티 함수

### 개발 도구

- **Package Manager**: Yarn Berry
- **Code Quality**: ESLint + Prettier
- **Type Checking**: TypeScript 5

## 📁 프로젝트 구조 (아토믹 디자인 패턴)

```
src/
├── components/              # 컴포넌트 (아토믹 디자인)
│   ├── atoms/              # 기본 컴포넌트
│   │   ├── Button/         # 버튼 컴포넌트
│   │   ├── Flex/           # Flexbox 레이아웃
│   │   ├── Icon.tsx        # SVG 아이콘
│   │   ├── Portal/         # 포탈 컴포넌트
│   │   └── Toggle/         # 토글 스위치
│   ├── molecules/          # 복합 컴포넌트
│   │   └── Modal/          # 모달 다이얼로그
│   ├── organisms/          # 복잡한 컴포넌트
│   ├── templates/          # 페이지 레이아웃
│   │   └── Layout/         # 기본 레이아웃
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── ReservationList/      # 예약 리스트
│   │   └── ReservationRequest/   # 예약 상세
│   └── hocs/               # Higher Order Components
│       └── PageTransition.tsx    # 페이지 전환 애니메이션
├── pages/                  # Next.js 페이지 라우팅
│   ├── index.tsx           # 홈 (예약 리스트)
│   └── reservation/
│       └── [id].tsx        # 예약 상세
├── hooks/                  # 커스텀 훅
│   ├── queries/            # React Query 훅
│   │   ├── useReservations.ts    # 예약 관련
│   │   └── useCustomer.ts        # 고객 관련
│   └── useInfiniteVirtualScroll.tsx  # 무한 스크롤
├── lib/                    # 유틸리티 & API
│   ├── api/                # API 클라이언트
│   │   ├── client.ts       # Axios 인스턴스
│   │   ├── reservation.ts  # 예약 API
│   │   └── customer.ts     # 고객 API
│   ├── utils/              # 유틸리티 함수
│   └── queryClient.ts      # React Query 설정
├── types/                  # TypeScript 타입
│   ├── api.ts              # API 응답 타입
│   └── index.ts
├── constants/              # 상수
│   ├── api.ts              # API 엔드포인트, 쿼리 키
│   └── index.ts
├── mocks/                  # Mock 데이터
│   └── reservation.ts
├── assets/                 # 정적 자산
│   ├── icons/              # SVG 아이콘
│   └── images/
└── styles/                 # 전역 스타일
    ├── globals.scss        # 글로벌 스타일
    └── typography.js       # 타이포그래피
```

## 🎨 디자인 시스템

### 컴포넌트 계층 구조 (Atomic Design)

1. **Atoms (원자)**: 가장 작은 단위의 컴포넌트
   - Button, Icon, Flex, Toggle, Portal

2. **Molecules (분자)**: Atoms의 조합
   - Modal (Portal + Button + Icon)

3. **Organisms (유기체)**: 복잡한 UI 블록
   - Header, ReservationGroup

4. **Templates (템플릿)**: 페이지 레이아웃
   - Layout

5. **Pages (페이지)**: 실제 콘텐츠가 있는 페이지
   - ReservationList, ReservationRequest

### 스타일링 규칙

- **Tailwind CSS**: 유틸리티 클래스 우선 사용
- **SCSS Modules**: 컴포넌트별 스타일 격리
- **classnames**: 조건부 클래스 관리

## 🔌 API 연동

### React Query 기반 아키텍처

**캐싱 전략:**

- staleTime: 5분 (데이터 신선도)
- gcTime: 10분 (캐시 유지 시간)
- retry: 1회
- refetchOnWindowFocus: false

**주요 훅:**

- `useReservations`: 예약 리스트 조회 (인피니트 쿼리)
- `useReservationDetail`: 예약 상세 조회
- `useCustomer`: 고객 정보 조회

자세한 API 문서는 [src/lib/api/README.md](src/lib/api/README.md)를 참고하세요.

## 📝 스크립트

```bash
# 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn start

# 린트 검사
yarn lint

# 린트 자동 수정
yarn lint:fix

# 코드 포맷팅 (Prettier)
yarn format
```

## 🧪 개발 도구

### React Query Devtools

개발 환경에서 자동으로 활성화됩니다.

- 화면 좌측 하단의 아이콘을 클릭하여 쿼리 상태를 확인할 수 있습니다.
- 캐시 상태, 리페칭, 에러 등을 실시간으로 모니터링할 수 있습니다.

### ESLint & Prettier

코드 품질과 일관성을 유지하기 위해 ESLint와 Prettier를 사용합니다.

- ESLint: 코드 품질 및 버그 감지
- Prettier: 코드 포맷팅 자동화

## 🎯 주요 페이지

### 1. 예약 리스트 (`/`)

- 날짜별 예약 그룹핑
- 시간순 정렬
- 취소 예약 필터링
- 무한 스크롤

### 2. 예약 상세 (`/reservation/:id`)

- 예약 시간 및 상태
- 고객 정보 (이름, 연락처)
- 차량 정보 (차종, 번호, 주행거리)
- 상품 정보 (서비스 항목, 가격)
- 결제 정보
- 예약 확정/불가 액션

### 환경 변수 설정

배포 플랫폼에서 다음 환경 변수를 설정하세요:

- `NEXT_PUBLIC_API_BASE_URL`: API 서버 URL

## 🚧 개선 필요 사항

### 1. 예약 관리 상태 관리

**현재 상태:**

- 예약 확정/불가 버튼 클릭 시 모달 표시만 구현
- 실제 API 호출 및 상태 업데이트 미구현

**개선 방향:**

- React Query의 `useMutation`을 활용한 예약 상태 변경 API 연동
- 낙관적 업데이트(Optimistic Update)를 통한 즉각적인 UI 반영
- 예약 상태 변경 후 리스트 자동 갱신

**예상 구현:**

```typescript
// hooks/mutations/useUpdateReservation.ts
export const useUpdateReservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => updateReservationStatus(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.RESERVATIONS.ALL });
      // 토스트 알림
    },
  });
};
```

### 2. 페이지 전환 애니메이션

**현재 상태:**

- Framer Motion 기반 페이지 전환 구현 완료
- 일부 성능 이슈 및 UX 개선 필요
- 코드 적용 X

### 3. 코드 리팩토링

**개선 필요 영역:**

#### 3.1 컴포넌트 분리

- `ReservationRequest` 컴포넌트 로직 분리
- `Header` 컴포넌트의 중복 코드 제거
- 공통 스타일을 Theme Provider로 관리

#### 3.2 타입 정의 개선

- API 응답 타입과 UI 컴포넌트 Props 타입 분리
- 재사용 가능한 공통 타입 정의

## 📚 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/)
