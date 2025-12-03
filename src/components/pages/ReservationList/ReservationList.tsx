import React from 'react';

import { Flex } from '@/components/atoms';

import Header from './Header';
import ReserVationGroup from './ReserVationGroup';

import { useReservations } from '@/hooks/queries/useReservations';
import type { ReservationListProps } from './ReservationList.types';

export const ReservationList: React.FC<ReservationListProps> = () => {
  const { data: reservations } = useReservations({
    date: '2024-07-14', // YYYY-MM-DD 형식
    page: 1, // 기본값: 1
    per_page: 20, // 기본값: 20
  });

  return (
    <div className="bg-background-gray">
      <Header title="7월 23일 화" />
      <main className="py-6 px-5">
        <Flex direction="col" gap={20}>
          {reservations?.data?.map((reservation) => (
            <ReserVationGroup key={reservation.serverId} reservation={reservation} />
          ))}
        </Flex>
      </main>
    </div>
  );
};
