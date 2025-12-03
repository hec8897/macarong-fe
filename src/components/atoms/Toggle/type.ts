interface ToggleOwnProps {
  /** 토글 상태 */
  checked: boolean;
  /** 상태 변경 핸들러 */
  onChange: (checked: boolean) => void;
  /** 비활성화 여부 - default: false */
  disabled?: boolean;
}

type ToggleProps = ToggleOwnProps &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof ToggleOwnProps | 'onClick'>;

export type { ToggleProps };
