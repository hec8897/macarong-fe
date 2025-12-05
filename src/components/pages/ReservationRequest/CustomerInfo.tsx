import React from 'react';
import { Flex } from '@/components/atoms';
import { formatPhone } from '@/lib/utils/formatPhone';

interface CustomerInfoProps {
  name: string;
  phone: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ name, phone }) => {
  return (
    <div>
      <h3 className="text-heading-4-semibold mb-3">고객 정보</h3>
      <Flex direction="col" gap={6}>
        <Flex className="w-full" justify="between" align="center">
          <p className="text-title-1-medium text-tertiary">고객 이름</p>
          <p className="text-title-1-semibold text-secondary">{name}</p>
        </Flex>
        <Flex className="w-full" justify="between" align="center">
          <p className="text-title-1-medium text-tertiary">전화번호</p>
          <p className="text-title-1-medium text-secondary">{formatPhone(phone)}</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default CustomerInfo;
