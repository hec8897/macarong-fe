# API 아키텍처

## 📁 구조

```
src/
├── constants/
│   └── api.ts                    # API 엔드포인트, 쿼리 키 상수
├── lib/
│   ├── queryClient.ts            # React Query 클라이언트 설정
│   └── api/
│       ├── client.ts             # HTTP 클라이언트 (axios 기반)
│       └── reservation.ts        # 예약 관련 API 함수
└── hooks/
    └── queries/
        └── useReservations.ts    # 예약 관련 React Query 훅
```

## 🔧 주요 파일 설명

### 1. `constants/api.ts`

API 관련 상수를 관리합니다.

```typescript
// API Base URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '...';

// API 엔드포인트
export const API_ENDPOINTS = {
  RESERVATIONS: '/reservations',
  RESERVATION_DETAIL: (id: number) => `/reservations/${id}`,
};

// React Query 키
export const QUERY_KEYS = {
  RESERVATIONS: {
    ALL: ['reservations'],
    LIST: (page?: number, date?: string) => ['reservations', 'list', { page, date }],
    DETAIL: (id: number) => ['reservations', 'detail', id],
  },
};
```

### 2. `lib/api/client.ts`

Axios를 래핑한 HTTP 클라이언트입니다.

**주요 기능:**

- GET 요청 지원
- 자동 JSON 변환
- 요청/응답 인터셉터 (토큰 추가, 에러 핸들링)
- 타임아웃 설정 (30초)
- 쿼리 파라미터 자동 처리

**사용 예시:**

```typescript
// GET 요청
const data = await apiClient.get('/reservations', {
  params: { date: '2024-07-23', page: 1, per_page: 20 },
});
```

### 3. `lib/api/reservation.ts`

예약 관련 API 함수를 정의합니다.

**주요 함수:**

- `getReservations()` - 예약 리스트 조회
- `getReservationDetail()` - 예약 상세 조회

### 4. `hooks/queries/useReservations.ts`

React Query를 사용한 커스텀 훅입니다.

**주요 훅:**

- `useReservations()` - 예약 리스트 조회
- `useReservationDetail()` - 예약 상세 조회

## 💡 사용 방법

### 1. 컴포넌트에서 데이터 조회

```typescript
import { useReservations } from '@/hooks';

function ReservationList() {
  const { data, isLoading, error } = useReservations({
    date: '2024-07-23',
    page: 1,
    per_page: 20,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {error.message}</div>;

  return (
    <div>
      {data?.data.map((reservation) => (
        <div key={reservation.serverId}>{reservation.customerId}</div>
      ))}
    </div>
  );
}
```

## 🌟 새로운 API 추가하기

### 1. API 엔드포인트 정의 (`constants/api.ts`)

```typescript
export const API_ENDPOINTS = {
  // 기존 코드...
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: number) => `/products/${id}`,
};

export const QUERY_KEYS = {
  // 기존 코드...
  PRODUCTS: {
    ALL: ['products'],
    LIST: () => ['products', 'list'],
    DETAIL: (id: number) => ['products', 'detail', id],
  },
};
```

### 2. API 함수 작성 (`lib/api/product.ts`)

```typescript
import { apiClient } from './client';
import { API_ENDPOINTS } from '@/constants/api';

export const getProducts = async () => {
  return apiClient.get(API_ENDPOINTS.PRODUCTS);
};

export const getProductDetail = async (id: number) => {
  return apiClient.get(API_ENDPOINTS.PRODUCT_DETAIL(id));
};
```

### 3. React Query 훅 작성 (`hooks/queries/useProducts.ts`)

```typescript
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/api';
import { getProducts, getProductDetail } from '@/lib/api/product';

export const useProducts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS.LIST(),
    queryFn: getProducts,
  });
};

export const useProductDetail = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS.DETAIL(id),
    queryFn: () => getProductDetail(id),
    enabled: !!id,
  });
};
```

### 4. Export 추가

```typescript
// lib/index.ts
export * from './api/product';

// hooks/index.ts
export * from './queries/useProducts';
```

## 🔄 캐싱 전략

React Query의 기본 설정 (`lib/queryClient.ts`):

- **staleTime**: 5분 - 데이터가 신선하다고 간주되는 시간
- **gcTime**: 10분 - 캐시가 메모리에 유지되는 시간
- **retry**: 1회 - 실패 시 재시도 횟수
- **refetchOnWindowFocus**: false - 윈도우 포커스 시 자동 재조회 비활성화

## 📝 환경 변수

`.env.local` 파일에 다음을 추가하세요:

```bash
NEXT_PUBLIC_API_BASE_URL=https://port-0-macarong-recruitment-api-lyyamidzf5be5120.sel4.cloudtype.app/api
```

## 🛠 개발 도구

React Query Devtools가 개발 환경에서 자동으로 활성화됩니다.

- 화면 좌측 하단의 아이콘을 클릭하여 쿼리 상태를 확인할 수 있습니다.
