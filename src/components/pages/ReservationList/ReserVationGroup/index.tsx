import React from 'react';

import { Reservation } from '@/types';
import GroupHeader from './GroupHeader';
import { Flex } from '@/components/atoms';

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
        {products.map((product) => (
          <div className="w-full bg-white rounded-[20px] px-5 py-6">123</div>
        ))}
      </Flex>
    </>
  );
};

export default ReserVationGroup;
