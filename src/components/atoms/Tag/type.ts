import React from 'react';

interface TagOwnProps {
  /** 태그 텍스트 */
  children: React.ReactNode;
  /** 태그 색상 테마 - default: 'accent' */
  variant?: 'accent' | 'outline';
}

type TagProps = TagOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof TagOwnProps>;

export type { TagProps };
