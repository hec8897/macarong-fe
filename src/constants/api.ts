/**
 * API 관련 상수
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export const API_ENDPOINTS = {
  // 예약 관련
  RESERVATIONS: '/reservations',
  RESERVATION_DETAIL: (id: number) => `/reservations/${id}`,

  // 고객 관련
  CUSTOMER_DETAIL: (id: number) => `/customers/${id}`,

  // 추가 엔드포인트는 여기에 정의
} as const;

export const QUERY_KEYS = {
  // 예약 관련 쿼리 키
  RESERVATIONS: {
    ALL: ['reservations'] as const,
    LIST: (page?: number, date?: string) => ['reservations', 'list', page, date] as const,
    DETAIL: (id: number) => ['reservations', 'detail', id] as const,
  },

  // 고객 관련 쿼리 키
  CUSTOMERS: {
    ALL: ['customers'] as const,
    DETAIL: (id: number) => ['customers', 'detail', id] as const,
  },

  // 추가 쿼리 키는 여기에 정의
} as const;
