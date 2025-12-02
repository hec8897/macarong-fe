import React from 'react';
import Header from './Header';
import type { ReservationListProps } from './ReservationList.types';
import { Flex } from '@/components/atoms';
import { mockReservations } from '@/mocks/reservation';

export const ReservationList: React.FC<ReservationListProps> = () => {
  return (
    <div className="bg-background">
      <Header title="7월 23일 화" />
      <Flex direction="col" gap={20}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Flex>
    </div>
  );
};
