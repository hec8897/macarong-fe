import React from 'react';
import { Flex, Icon } from '@/components/atoms';

const ProductInfo: React.FC = () => {
  return (
    <div className="bg-white py-8 px-5">
      <Flex direction="col" gap={12} className="mb-4">
        <div>
          <h2 className="text-heading-3-bold font-bold">프리미엄 엔진오일 교환상품</h2>
          <p className="text-title-medium-1 text-secondary">훅스 타이탄 GT1 PRO C3</p>
        </div>
        <Flex direction="col" gap={4}>
          <Flex gap={6} align="center">
            <Icon variant="plusCircle" size={16} />
            <p className="text-title-medium-1 text-secondary">연료필터 카트리지</p>
          </Flex>
          <Flex gap={6} align="center">
            <Icon variant="plusCircle" size={16} />
            <p className="text-title-medium-1 text-secondary">브레이크 패드</p>
          </Flex>
        </Flex>
      </Flex>
      <div className="border rounded-[10px] p-3">
        <h4 className="text-title-2-medium text-tertiary mb-1">요청사항</h4>
        <p className="text-title-2-medium text-secondary">3시 퇴근이라 3시15분 도착 예정입니다!</p>
      </div>
    </div>
  );
};

export default ProductInfo;
