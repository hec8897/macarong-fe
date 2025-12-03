interface ModalButtonProps {
  /** 버튼 텍스트 */
  text: string;
  /** 버튼 클릭 핸들러 */
  onClick: () => void;
  /** 버튼 테마 */
  variant?: 'primary' | 'tertiary';
}

interface ModalProps {
  /** 모달 열림 여부 */
  isOpen: boolean;
  /** 모달 닫기 핸들러 */
  onClose: () => void;
  /** 모달 제목 */
  title: string;
  /** 모달 부제목 (선택) */
  subtitle?: string;
  /** 왼쪽 버튼 (선택) */
  leftButton?: ModalButtonProps;
  /** 오른쪽 버튼 (선택) */
  rightButton?: ModalButtonProps;
  /** 오버레이 클릭 시 닫기 여부 - default: true */
  closeOnOverlayClick?: boolean;
  /** 추가 클래스명 */
  className?: string;
}

export type { ModalProps, ModalButtonProps };
