import React from 'react';

import GroupHeader from './GroupHeader';
import GroupItem from './GroupItem';

import { Flex } from '@/components/atoms';
import { Reservation } from '@/types';

interface ReservationGroupProps {
  reservation: Reservation;
}

const ReserVationGroup: React.FC<ReservationGroupProps> = ({
  reservation: { reservedAt, products },
}) => {
  return (
    <>
      <GroupHeader reservedAt={reservedAt} length={products.length} />
      <Flex direction="col" gap={12} className="w-full">
        <GroupItem />
      </Flex>
    </>
  );
};

export default ReserVationGroup;
