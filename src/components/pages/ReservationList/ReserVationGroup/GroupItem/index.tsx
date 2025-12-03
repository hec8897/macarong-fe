import React from 'react';

import { Flex, Icon } from '@/components/atoms';

const GroupItem: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-[20px] px-5 py-6">
      <Flex direction="col" gap={8}>
        <h2 className="text-heading-3-semibold font-bold">훅스 타이탄 GT1 PRO C3</h2>
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
