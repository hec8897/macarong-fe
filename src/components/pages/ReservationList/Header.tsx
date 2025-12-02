import React from 'react';
import Image from 'next/image';

import { Flex, Icon } from '@/components/atoms';

interface HeaderProps {
  title: string;
  onBack: () => void;
}
const Header: React.FC = () => {
  return (
    <Flex>
      <Icon variant="chevronLeft" />
      <Icon variant="chevronRight" />
    </Flex>
  );
};

export default Header;
