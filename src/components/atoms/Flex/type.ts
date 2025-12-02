type FlexDirection = 'row' | 'col' | 'row-reverse' | 'col-reverse';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type Gap = number;

interface FlexOwnProps {
  /** Flex direction - default: 'row' */
  direction?: FlexDirection;
  /** Justify content - default: 'start' */
  justify?: JustifyContent;
  /** Align items - default: 'start' */
  align?: AlignItems;
  /** Gap between items */
  gap?: Gap;
  /** Flex wrap - default: 'nowrap' */
  wrap?: FlexWrap;
  /** Additional className */
  className?: string;
  /** Element type to render - default: 'div' */
  as?: React.ElementType;
  /** Children */
  children?: React.ReactNode;
}

type FlexProps = FlexOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof FlexOwnProps>;

export type { FlexProps };
