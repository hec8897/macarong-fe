import React from 'react';
import Image from 'next/image';

import { Icon } from '@/components/atoms';

interface HeaderProps {
  title: string;
  onBack: () => void;
}
const Header: React.FC = () => {
  return (
    <div>
      <Icon variant="chevronLeft" />
      <Icon variant="chevronRight" />
    </div>
  );
};

export default Header;
