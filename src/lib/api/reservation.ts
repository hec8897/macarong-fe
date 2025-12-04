/**
 * 예약 관련 API
 */

import { apiClient } from './client';
import { API_ENDPOINTS } from '@/constants';
import type { ReservationListResponse, ReservationDetail } from '@/types';

export interface GetReservationsParams {
  /** 요청 날짜 (YYYY-MM-DD) */
  date?: string;
  /** 페이지 번호 (default: 1) */
  page?: number;
  /** 페이지당 항목 수 (default: 20) */
  per_page?: number;
}

/**
 * 예약 리스트 조회
 */
export const getReservations = async (
  params?: GetReservationsParams
): Promise<ReservationListResponse> => {
  return await apiClient.get<ReservationListResponse>(API_ENDPOINTS.RESERVATIONS, {
    params,
  });
};

/**
 * 예약 상세 조회
 */
export const getReservationDetail = async (serverId: number): Promise<ReservationDetail> => {
  return apiClient.get<ReservationDetail>(API_ENDPOINTS.RESERVATION_DETAIL(serverId));
};
