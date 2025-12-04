/**
 * 예약 관련 React Query Hooks
 */

import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/api';
import {
  getReservations,
  getReservationDetail,
  type GetReservationsParams,
} from '@/lib/api/reservation';
import { groupReservationsByTime, filterCancelledReservations } from '@/lib/utils/reservationUtils';

/**
 * 예약 리스트 조회 훅 (인피니티 스크롤 지원)
 */
export const useReservations = (
  params?: Omit<GetReservationsParams, 'page'> & {
    /** 취소된 예약 필터링 여부 (기본값: false) */
    excludeCancelled?: boolean;
  }
) => {
  const date = params?.date ?? '';
  const perPage = params?.per_page ?? 20;
  const excludeCancelled = params?.excludeCancelled ?? false;

  return useInfiniteQuery({
    queryKey: QUERY_KEYS.RESERVATIONS.LIST(undefined, date),
    queryFn: ({ pageParam = 1 }) =>
      getReservations({
        date,
        page: pageParam,
        per_page: perPage,
      }),
    getNextPageParam: (lastPage, allPages) => {
      // hasNext가 true이고 마지막 페이지에 데이터가 있으면 다음 페이지 반환
      if (lastPage.hasNext && lastPage.data.length > 0) {
        return allPages.length + 1;
      }
      return undefined; // 더 이상 페이지가 없음
    },
    initialPageParam: 1,
    select: (data) => {
      // 모든 페이지의 데이터를 평탄화
      let allReservations = data.pages.flatMap((page) => page.data);

      // 취소된 예약 필터링
      if (excludeCancelled) {
        allReservations = filterCancelledReservations(allReservations);
      }

      return {
        data: allReservations,
        grouped: groupReservationsByTime(allReservations), // 시간별 그룹핑
        totalPages: data.pages[data.pages.length - 1]?.totalPages ?? 0,
        hasNext: data.pages[data.pages.length - 1]?.hasNext ?? false,
        hasPrevious: data.pages[0]?.hasPrevious ?? false,
      };
    },
  });
};

/**
 * 예약 상세 조회 훅
 */
export const useReservationDetail = (serverId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.RESERVATIONS.DETAIL(serverId),
    queryFn: () => getReservationDetail(serverId),
    enabled: !!serverId, // serverId가 있을 때만 실행
  });
};
