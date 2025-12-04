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

/**
 * 고객 관련 타입
 */

// 연료 타입
export type FuelType = 'PREMIUM_GASOLINE' | 'GASOLINE' | 'DIESEL' | 'LPG' | 'ELECTRIC' | 'HYBRID';

// 차량 정보
export interface Vehicle {
  brand: string;
  model: string;
  number: string;
  fuelType: FuelType;
}

// 고객 정보
export interface Customer {
  serverId: number;
  name: string;
  phone: string;
  vehicle: Vehicle;
  visitCount: number;
}

// 고객 기본 정보 (예약 상세에서 사용)
export interface CustomerBasic {
  serverId: number;
  name: string;
  phone: string;
}

/**
 * 예약 상세 정보
 */
export interface ReservationDetail {
  serverId: number;
  status: ReservationStatus;
  reservedAt: string;
  requirements: string;
  customer: CustomerBasic;
  vehicle: Vehicle;
  products: Product[];
  paymentMethod: PaymentMethod;
}
