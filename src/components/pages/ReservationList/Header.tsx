import React, { useState } from 'react';

import dayjs from 'dayjs';
import { Flex, Icon, Toggle } from '@/components/atoms';

interface HeaderProps {
  title: string;
  onClickDate: (direction: 'prev' | 'next') => void;
  excludeCancelled: boolean;
  onToggleCanceled: (isCanceled: boolean) => void;
}
const Header: React.FC<HeaderProps> = ({
  title,
  onClickDate,
  excludeCancelled,
  onToggleCanceled,
}) => {
  return (
    <header className="bg-white sticky top-0 z-10">
      <Flex align="center" justify="between" gap={16} className="p-4 pb-3">
        <button onClick={() => onClickDate('prev')}>
          <Icon variant="chevronLeft" />
        </button>
        <h3 className="text-heading-3-semibold">{dayjs(title).format('M월 D일 dd')}</h3>
        <button onClick={() => onClickDate('next')}>
          <Icon variant="chevronRight" />
        </button>
      </Flex>

      <div className="py-4 px-3">
        <Flex align="center" justify="between" gap={16} className="px-1">
          <div className="text-title-medium-2 text-secondary">취소된 예약 안보기</div>
          <Toggle checked={excludeCancelled} onChange={onToggleCanceled} />
        </Flex>
      </div>
    </header>
  );
};

export default Header;
