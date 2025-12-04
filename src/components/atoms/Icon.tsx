import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, PlusCircle, ArrowLeft, ClockFill } from '@/assets';

export const ICON_MAP = {
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  plusCircle: PlusCircle,
  arrowLeft: ArrowLeft,
  clockFill: ClockFill,
} as const;

interface IconWrapProps {
  variant: keyof typeof ICON_MAP;
  size?: number;
}

export const Icon: React.FC<IconWrapProps> = ({ variant, size = 24 }) => {
  return <Image src={ICON_MAP[variant]} alt={variant} width={size} height={size} />;
};
