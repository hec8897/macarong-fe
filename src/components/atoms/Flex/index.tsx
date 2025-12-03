import React from 'react';
import classNames from 'classnames';
import type { FlexProps } from './type';

/**
 * Flex 컴포넌트
 *
 * Tailwind CSS flex 유틸리티를 쉽게 사용할 수 있도록 하는 컴포넌트입니다.
 *
 * @example
 * ```tsx
 * <Flex direction="row" justify="between" align="center" gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 * ```
 */
const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'start',
  gap,
  wrap = 'nowrap',
  className,
  as: Component = 'div',
  children,
  ...rest
}) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const wrapClasses = {
    wrap: 'flex-wrap',
    nowrap: 'flex-nowrap',
    'wrap-reverse': 'flex-wrap-reverse',
  };

  const classes = classNames(
    'flex',
    directionClasses[direction],
    justifyClasses[justify],
    alignClasses[align],
    wrapClasses[wrap],
    className
  );

  return (
    <Component style={{ gap: gap ? `${gap}px` : undefined }} className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default Flex;
