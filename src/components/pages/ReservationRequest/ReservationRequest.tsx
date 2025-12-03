import React from 'react';

import Header from './Header';
import ProductInfo from './ProductInfo';
import CustomerInfo from './CustomerInfo';
import CarInfo from './CarInfo';
import PayMentInfo from './PayMentInfo';

import type { ReservationRequestProps } from './ReservationRequest.types';

export const ReservationRequest: React.FC<ReservationRequestProps> = ({ reservationId }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="w-full">
          <ProductInfo />
        </div>
        <div className="h-2 bg-field-border_default"></div>
        <div className="bg-white w-full p-5">
          <CustomerInfo />
          <div className="my-4 divider"></div>
          <CarInfo />
        </div>
        <div className="h-2 bg-field-border_default"></div>
        <div className="bg-white w-full p-5 pb-[64px]">
          <PayMentInfo />
        </div>
      </div>
      <div className="sticky bottom-0">바텀 cta</div>
    </>
  );
};
