import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, PlusCircle } from '@/assets';

export const ICON_MAP = {
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  plusCircle: PlusCircle,
} as const;

interface IconWrapProps {
  variant: keyof typeof ICON_MAP;
  size?: number;
}

const Icon: React.FC<IconWrapProps> = ({ variant, size = 24 }) => {
  return <Image src={ICON_MAP[variant]} alt={variant} width={size} height={size} />;
};

export default Icon;
