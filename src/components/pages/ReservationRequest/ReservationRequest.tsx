import React, { useState } from 'react';

import Header from './Header';
import ProductInfo from './ProductInfo';
import CustomerInfo from './CustomerInfo';
import CarInfo from './CarInfo';
import PayMentInfo from './PayMentInfo';

import type { ReservationRequestProps } from './ReservationRequest.types';
import { Button, Flex } from '@/components/atoms';
import { Modal } from '@/components/molecules';

export const ReservationRequest: React.FC<ReservationRequestProps> = ({ reservationId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
