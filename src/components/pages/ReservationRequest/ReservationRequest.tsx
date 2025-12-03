import React from 'react';

import { Flex } from '@/components/atoms';

import Header from './Header';
import ProductInfo from './ProductInfo';
import CustomerInfo from './CustomerInfo';
import CarInfo from './CarInfo';

import type { ReservationRequestProps } from './ReservationRequest.types';

export const ReservationRequest: React.FC<ReservationRequestProps> = ({ reservationId }) => {
  return (
    <>
      <Header />
      <div className="bg-background-gray min-h-screen">
        <Flex direction="col" gap={8}>
          <div className="w-full">
            <ProductInfo />
          </div>
          <div className="bg-white w-full p-5">
            <CustomerInfo />
            <div className="my-4 divider"></div>
            <CarInfo />
          </div>
        </Flex>
      </div>
      <div className="sticky bottom-0">바텀 cta</div>
    </>
  );
};
