import React from 'react';

import { Flex } from '@/components/atoms';

interface DateGroupHeaderProps {
  reservedAt: string;
  length: number;
}

const DateGroupHeader: React.FC<DateGroupHeaderProps> = ({ reservedAt, length }) => (
  <Flex className="h-8 w-full" justify="center" align="center">
    <h3 className="text-heading-3-semibold text-tertiary">
      {reservedAt} &middot; {length}건
    </h3>
  </Flex>
);

export default DateGroupHeader;
