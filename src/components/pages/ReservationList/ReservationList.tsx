import React from 'react';

import Header from './Header';
import ReserVationGroup from './ReserVationGroup';

import { Flex } from '@/components/atoms';

import { getMockReservationListResponse, mockReservations } from '@/mocks/reservation';
import type { ReservationListProps } from './ReservationList.types';

export const ReservationList: React.FC<ReservationListProps> = () => {
  const data = getMockReservationListResponse();
  console.log(data);
  return (
    <div className="bg-background-gray">
      <Header title="7월 23일 화" />
      <main className="py-6 px-5">
        <Flex direction="col" gap={20}>
          {data.data.map((reservation) => (
            <ReserVationGroup key={reservation.serverId} reservation={reservation} />
          ))}
        </Flex>
      </main>
    </div>
  );
};
