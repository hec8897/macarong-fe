/**
 * 예약 관련 유틸리티 함수
 */

import type { Reservation } from '@/types';
import dayjs from 'dayjs';

export interface GroupedReservation {
  time: string; // HH:mm (예: "09:00")
  reservedAt: string; // ISO 8601 형식 (예: "2024-07-14T09:00:00")
  reservations: Reservation[];
}

/**
 * reservedAt의 시간(HH:mm) 기준으로 예약 데이터를 그룹핑
 */
export const groupReservationsByTime = (reservations: Reservation[]): GroupedReservation[] => {
  // 시간별로 그룹핑
  const grouped = reservations.reduce(
    (acc, reservation) => {
      const time = dayjs(reservation.reservedAt).format('A H:mm');

      if (!acc[time]) {
        acc[time] = {
          reservedAt: reservation.reservedAt,
          reservations: [],
        };
      }

      acc[time].reservations.push(reservation);

      return acc;
    },
    {} as Record<string, { reservedAt: string; reservations: Reservation[] }>
  );

  // 객체를 배열로 변환하고 시간순 정렬
  return Object.entries(grouped)
    .map(([time, { reservedAt, reservations }]) => ({
      time,
      reservedAt,
      reservations,
    }))
    .sort((a, b) => dayjs(a.reservedAt).valueOf() - dayjs(b.reservedAt).valueOf());
};

/**
 * 취소된 예약을 필터링하는 함수
 */
export const filterCancelledReservations = (reservations: Reservation[]): Reservation[] => {
  return reservations.filter((reservation) => reservation.status !== 'CANCELLED');
};
