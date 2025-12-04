import React from 'react';

import { Flex } from '@/components/atoms';
import { IconLabel } from '@/components/molecules';

import type { Reservation } from '@/types';
import CustomerInfo from './CustomerInfo';

interface ReservationGroupProps {
  reservation: Reservation;
  customerId: number;
}

const GroupItem: React.FC<ReservationGroupProps> = ({ reservation: { products }, customerId }) => {
  return (
    <div className="w-full bg-white rounded-[20px] px-5 py-6">
      <Flex direction="col" gap={8}>
        <h2 className="text-heading-3-bold">{products[0].name}</h2>
        {products.length > 1 && (
          <Flex direction="col" gap={4}>
            {products.slice(1).map((product, index) => (
              <IconLabel key={index} variant="plusCircle">
                {product.name}
              </IconLabel>
            ))}
          </Flex>
        )}
      </Flex>
      <div className="my-[18px] divider"></div>
      <CustomerInfo customerId={customerId} />
    </div>
  );
};

export default GroupItem;
