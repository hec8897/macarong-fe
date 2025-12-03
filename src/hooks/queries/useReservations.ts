/**
 * 예약 관련 React Query Hooks
 */

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/api';
import {
  getReservations,
  getReservationDetail,
  type GetReservationsParams,
} from '@/lib/api/reservation';

/**
 * 예약 리스트 조회 훅
 */
export const useReservations = (params?: GetReservationsParams) => {
  return useQuery({
    queryKey: QUERY_KEYS.RESERVATIONS.LIST(params?.page, params?.date),
    queryFn: () => getReservations(params),
  });
};

/**
 * 예약 상세 조회 훅
 */
export const useReservationDetail = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.RESERVATIONS.DETAIL(id),
    queryFn: () => getReservationDetail(id),
    enabled: !!id, // id가 있을 때만 실행
  });
};
