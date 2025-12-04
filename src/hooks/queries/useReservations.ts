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
import { groupReservationsByTime } from '@/lib/utils/groupReservations';

/**
 * 예약 리스트 조회 훅 (원본 데이터)
 */
export const useReservations = (params?: GetReservationsParams) => {
  return useQuery({
    queryKey: QUERY_KEYS.RESERVATIONS.LIST(params?.page, params?.date),
    queryFn: () => getReservations(params),
    select: (data) => ({
      ...data,
      grouped: groupReservationsByTime(data.data), // 시간별 그룹핑
    }),
  });
};

/**
 * 예약 상세 조회 훅
 */
export const useReservationDetail = (serverId: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.RESERVATIONS.DETAIL(serverId),
    queryFn: () => getReservationDetail(serverId),
    enabled: !!serverId, // serverId가 있을 때만 실행
  });
};
