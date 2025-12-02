export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

/**
 * 예약 관리 관련 타입
 */

// 예약 상태
export type ReservationStatus = 'CREATED' | 'DEFERRED' | 'CANCELLED';

// 결제 수단
export type PaymentMethod = 'CARD' | 'VBANK' | 'CASH' | 'TRANSFER';

// 제품 정보
export interface Product {
  group: string;
  name: string;
  price: number;
  quantity: number;
}

// 예약 정보
export interface Reservation {
  serverId: number;
  customerId: number;
  status: ReservationStatus;
  reservedAt: string;
  requirements: string;
  products: Product[];
  paymentMethod: PaymentMethod;
}

// 예약 리스트 응답 (페이지네이션 포함)
export interface ReservationListResponse {
  data: Reservation[];
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}
