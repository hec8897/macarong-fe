import React from 'react';

import { Flex, Icon } from '@/components/atoms';
import { Reservation } from '@/types';

interface ReservationGroupProps {
  reservation: Reservation;
}

const GroupItem: React.FC<ReservationGroupProps> = ({ reservation: { products } }) => {
  return (
    <div className="w-full bg-white rounded-[20px] px-5 py-6">
      <Flex direction="col" gap={8}>
        <h2 className="text-heading-3-semibold font-bold">{products[0].name}</h2>
        {products.length > 1 && (
          <Flex direction="col" gap={4}>
            {products.slice(1).map((product, index) => (
              <Flex key={index} gap={6} align="center">
                <Icon variant="plusCircle" size={16} />
                <p className="text-title-medium-1 text-secondary">{product.name}</p>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
      <div className="my-[18px] divider"></div>
      <div>
        <Flex justify="between" align="center" className="mb-2">
          <h3 className="text-title-1-semibold">올 뉴 쏘렌토</h3>
          <div className="bg-background-accent_light rounded-full px-2 py-[1.5px] text-title-medium-3 text-accent">
            5회 방문
          </div>
        </Flex>
        <div className="border p-3 rounded-[10px]">
          <Flex
            as={'p'}
            justify="between"
            align="center"
            className="text-tertiary text-title-2-medium"
          >
            <span>고경표</span>
            <span>010-0021-3911</span>
          </Flex>
          <div className="mt-1">
            <span className="text-title-3-medium text-secondary">
              예약 시간보다 20분 일찍 도착할 것 같습니다
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
