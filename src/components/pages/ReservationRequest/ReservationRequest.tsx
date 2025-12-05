import React, { useMemo } from 'react';

import { useReservationDetail } from '@/hooks';

import Header from './Header';
import ProductInfo from './ProductInfo';
import CustomerInfo from './CustomerInfo';
import CarInfo from './CarInfo';
import PayMentInfo from './PayMentInfo';
import RejectButton from './Cta';

import type { ReservationRequestProps } from './ReservationRequest.types';

export const ReservationRequest: React.FC<ReservationRequestProps> = ({ reservationId }) => {
  const { data } = useReservationDetail(reservationId);

  const totalPrice = useMemo(
    () => data?.products.reduce((acc, product) => acc + product.price * product.quantity, 0),
    [data?.products]
  );
  if (!data) return null;

  return (
    <>
      <Header reservedAt={data?.reservedAt || ''} />
      <div className="min-h-screen pb-[64px]">
        <section>
          <ProductInfo products={data?.products || []} requirements={data?.requirements || ''} />
        </section>
        <div className="h-2 bg-field-border_default"></div>
        <section className="p-5">
          <CustomerInfo name={data?.customer?.name || ''} phone={data?.customer?.phone || ''} />
          <div className="my-4 divider"></div>
          <CarInfo vehicle={data?.vehicle || {}} />
        </section>
        <div className="h-2 bg-field-border_default"></div>
        <section className="p-5 pb-0">
          <PayMentInfo totalPrice={totalPrice || 0} paymentMethod={data?.paymentMethod || ''} />
        </section>
      </div>
      <div className="sticky bottom-0 border-t px-4 py-3 bg-white">
        <RejectButton />
      </div>
    </>
  );
};
