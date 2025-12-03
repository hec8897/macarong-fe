import React from 'react';
import { Flex } from '@/components/atoms';

const PayMentInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-heading-4-semibold mb-3">결제 상세</h3>
      <Flex direction="col" gap={6}>
        <Flex className="w-full" justify="between" align="center">
          <p className="text-title-1-medium text-tertiary">결제방법</p>
          <p className="text-title-1-medium text-secondary">카드 결제</p>
        </Flex>
        <Flex className="w-full" justify="between" align="center">
          <p className="text-title-1-medium text-accent">총 결제금액</p>
          <p className="text-heading-4-bold text-accent">45,100원</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default PayMentInfo;
