import React, { useMemo, useState } from 'react';

import Header from './Header';
import ProductInfo from './ProductInfo';
import CustomerInfo from './CustomerInfo';
import CarInfo from './CarInfo';
import PayMentInfo from './PayMentInfo';

import type { ReservationRequestProps } from './ReservationRequest.types';
import { Button, Flex } from '@/components/atoms';
import { Modal } from '@/components/molecules';
import { useReservationDetail } from '@/hooks';

export const ReservationRequest: React.FC<ReservationRequestProps> = ({ reservationId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useReservationDetail(reservationId);

  const totalPrice = useMemo(
    () => data?.products.reduce((acc, product) => acc + product.price * product.quantity, 0),
    [data?.products]
  );
  if (!data) return null;

  return (
    <>
      <Modal
        title={'예약 불가' + reservationId}
        subtitle="예약 불가 사유를 선택해주세요."
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leftButton={{
          text: '취소',
          onClick: () => setIsModalOpen(false),
          variant: 'tertiary',
        }}
        rightButton={{
          text: '확정하기',
          onClick: () => setIsModalOpen(false),
        }}
      />

      <Header reservedAt={data?.reservedAt || ''} />
      <div>
        <div className="w-full">
          <ProductInfo products={data?.products || []} requirements={data?.requirements || ''} />
        </div>
        <div className="h-2 bg-field-border_default"></div>
        <div className="bg-white w-full p-5">
          <CustomerInfo name={data?.customer?.name || ''} phone={data?.customer?.phone || ''} />
          <div className="my-4 divider"></div>
          <CarInfo vehicle={data?.vehicle || {}} />
        </div>
        <div className="h-2 bg-field-border_default"></div>
        <div className="bg-white w-full p-5 pb-[64px]">
          <PayMentInfo totalPrice={totalPrice || 0} paymentMethod={data?.paymentMethod || ''} />
        </div>
      </div>
      <div className="sticky bottom-0 border-t px-4 py-3 bg-white">
        <Flex gap={8}>
          <Button variant="tertiary" onClick={() => setIsModalOpen(true)}>
            예약 불가
          </Button>
          <Button>예약 확정</Button>
        </Flex>
      </div>
    </>
  );
};
