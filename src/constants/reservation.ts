/**
 * 예약 관련 상수
 */

import type { ReservationStatus, PaymentMethod, FuelType } from '@/types';

/**
 * 예약 상태 한글화 맵
 */
export const RESERVATION_STATUS_LABELS: Record<ReservationStatus, string> = {
  CREATED: '예약 요청',
  CANCELLED: '예약 취소',
  CONFIRMED: '작업 가능',
  DEFERRED: '작업 불가능',
  COMPLETED: '작업 완료',
} as const;

/**
 * 결제 수단 한글화 맵
 */
export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  CARD: '카드결제',
  BANK: '계좌이체',
  VBANK: '무통장입금',
  ONSITE: '현장결제',
} as const;

/**
 * 연료 타입 한글화 맵
 */
export const FUEL_TYPE_LABELS: Record<FuelType, string> = {
  PREMIUM_GASOLINE: '고급 휘발유',
  GASOLINE: '일반 휘발유',
  DIESEL: '경유',
  LPG: 'LPG',
  ELECTRICITY: '전기',
} as const;

/**
 * 예약 상태를 한글로 변환하는 함수
 * @param status - 예약 상태
 * @returns 한글화된 예약 상태 텍스트
 */
export const getReservationStatusLabel = (status: ReservationStatus): string => {
  return RESERVATION_STATUS_LABELS[status];
};

/**
 * 결제 수단을 한글로 변환하는 함수
 * @param method - 결제 수단
 * @returns 한글화된 결제 수단 텍스트
 */
export const getPaymentMethodLabel = (method: PaymentMethod): string => {
  return PAYMENT_METHOD_LABELS[method];
};

/**
 * 연료 타입을 한글로 변환하는 함수
 * @param fuelType - 연료 타입
 * @returns 한글화된 연료 타입 텍스트
 */
export const getFuelTypeLabel = (fuelType: FuelType): string => {
  return FUEL_TYPE_LABELS[fuelType];
};
