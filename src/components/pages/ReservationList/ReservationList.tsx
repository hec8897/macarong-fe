import React from 'react';

import Header from './Header';
import ReserVationGroup from './ReserVationGroup';

import { Flex } from '@/components/atoms';

import { mockReservations } from '@/mocks/reservation';
import type { ReservationListProps } from './ReservationList.types';

export const ReservationList: React.FC<ReservationListProps> = () => {
  return (
    <div className="bg-background">
      <Header title="7월 23일 화" />
      <main className="py-6 px-5">
        <Flex direction="col" gap={20}>
          {mockReservations.map((reservation) => (
            <ReserVationGroup key={reservation.serverId} reservation={reservation} />
          ))}
        </Flex>
      </main>
    </div>
  );
};
