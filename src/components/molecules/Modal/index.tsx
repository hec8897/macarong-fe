import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Portal, Button } from '@/components/atoms';
import styles from './modal.module.scss';

import type { ModalProps } from './type';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  leftButton,
  rightButton,
  closeOnOverlayClick = true,
  className,
}) => {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // 모달이 열리면 body 스크롤 방지
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={classNames(styles.modal, className)}>
          {/* 컨텐츠 */}
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          {/* 버튼 영역 */}
          {(leftButton || rightButton) && (
            <div className={styles.buttonContainer}>
              {leftButton && (
                <Button
                  variant={leftButton.variant || 'tertiary'}
                  onClick={leftButton.onClick}
                  className={styles.button}
                >
                  {leftButton.text}
                </Button>
              )}
              {rightButton && (
                <Button
                  variant={rightButton.variant || 'primary'}
                  onClick={rightButton.onClick}
                  className={styles.button}
                >
                  {rightButton.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
