import React, { useState } from 'react';

import { Flex, Icon, Toggle } from '@/components/atoms';

interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isCanceled, setIsCanceled] = useState(false);
  const handleLeftClick = () => {
    console.log('left click');
  };
  const handleRightClick = () => {
    console.log('right click');
  };
  return (
    <header className="bg-white">
      <Flex align="center" justify="between" gap={16} className="p-4 pb-3">
        <button onClick={handleLeftClick}>
          <Icon variant="chevronLeft" />
        </button>
        <h3 className="text-heading-3-semibold">{title}</h3>
        <button onClick={handleRightClick}>
          <Icon variant="chevronRight" />
        </button>
      </Flex>

      <div className="py-4 px-3">
        <Flex align="center" justify="between" gap={16} className="px-1">
          <div className="text-title-medium-2 text-secondary">취소된 예약 안보기</div>
          <Toggle checked={isCanceled} onChange={() => setIsCanceled(!isCanceled)} />
        </Flex>
      </div>
    </header>
  );
};

export default Header;
