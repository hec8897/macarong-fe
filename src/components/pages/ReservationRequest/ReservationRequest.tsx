import React from 'react';

import Header from './Header';
import type { ReservationRequestProps } from './ReservationRequest.types';
import ProductInfo from './ProductInfo';
import { Flex } from '@/components/atoms';

export const ReservationRequest: React.FC<ReservationRequestProps> = ({ reservationId }) => {
  return (
    <>
      <Header />
      <div className="bg-background-gray min-h-screen">
        <Flex direction="col" gap={8}>
          <div className="w-full">
            <ProductInfo />
          </div>
          <div className="bg-white w-full">1</div>
        </Flex>
      </div>
      <div className="sticky bottom-0">바텀 cta</div>
    </>
  );
};
