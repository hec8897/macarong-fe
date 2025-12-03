interface ButtonOwnProps {
  /** 버튼 텍스트 */
  children: React.ReactNode;
  /** 버튼 색상 테마 - default: 'primary' */
  variant?: 'primary' | 'tertiary';
  /** 비활성화 여부 - default: false */
  disabled?: boolean;
}

type ButtonProps = ButtonOwnProps &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>;

export type { ButtonProps };
