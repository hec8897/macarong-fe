import React from 'react';
import { Flex, Icon, ICON_MAP } from '@/components/atoms';

interface IconLabelProps {
  variant: keyof typeof ICON_MAP;
  children: React.ReactNode;
}

const IconLabel: React.FC<IconLabelProps> = ({ variant, children }) => (
  <Flex gap={6} align="center">
    <Icon variant={variant} size={16} />
    <p className="text-title-medium-1 text-secondary">{children}</p>
  </Flex>
);

export default IconLabel;
