import React from 'react';
import { Flex, Icon, ICON_MAP } from '@/components/atoms';
import classNames from 'classnames';

interface IconLabelProps {
  variant: keyof typeof ICON_MAP;
  children: React.ReactNode;
  disabled?: boolean;
}

const IconLabel: React.FC<IconLabelProps> = ({ variant, children, disabled }) => (
  <Flex gap={6} align="center">
    <Icon variant={variant} size={16} className={classNames({ 'opacity-[50%]': disabled })} />
    <p
      className={classNames(
        'text-title-medium-1 flex-1 line-clamp-1',
        disabled ? 'text-disabled' : 'text-secondary'
      )}
    >
      {children}
    </p>
  </Flex>
);

export default IconLabel;
