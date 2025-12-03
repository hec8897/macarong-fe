import React from 'react';
import { Flex } from '@/components/atoms';

const CustomerInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-heading-4-semibold mb-3">고객 정보</h3>
      <Flex direction="col" gap={6}>
        <Flex className="w-full" justify="between" align="center">
          <p className="text-title-1-medium text-tertiary">고객 이름</p>
          <p className="text-title-1-semibold text-secondary">고경표</p>
        </Flex>
        <Flex className="w-full" justify="between" align="center">
          <p className="text-title-1-medium text-tertiary">전화번호</p>
          <p className="text-title-1-medium text-secondary">010-2012-4913</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default CustomerInfo;
