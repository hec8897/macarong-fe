import React from 'react';
import { Flex } from '@/components/atoms';
import { useCustomer } from '@/hooks';

interface CustomerInfoProps {
  //   customer: Customer;
  customerId: number;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ customerId }) => {
  const { data: customer } = useCustomer(customerId);
  return (
    <div>
      <Flex justify="between" align="center" className="mb-2">
        <h3 className="text-title-1-semibold">
          {customer?.vehicle.number} {customer?.vehicle.model}
        </h3>
        <div className="bg-background-accent_light rounded-full px-2 py-[1.5px] text-title-3-medium text-accent">
          {customer?.visitCount}회 방문
        </div>
      </Flex>
      <div className="border p-3 rounded-[10px]">
        <Flex
          as={'p'}
          justify="between"
          align="center"
          className="text-tertiary text-title-2-medium"
        >
          <span>{customer?.name}</span>
          <span>{customer?.phone}</span>
        </Flex>
        <div className="mt-1">
          <span className="text-title-3-medium text-secondary">
            예약 시간보다 20분 일찍 도착할 것 같습니다
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
