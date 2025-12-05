import { useMemo, useState } from 'react';

export const useCtaEvent = () => {
  const [mode, setMode] = useState<'confirm' | 'reject' | ''>('');

  const modalContent = useMemo(() => {
    switch (mode) {
      case 'confirm':
        return {
          title: '예약을 확정할까요?',
          subtitle: '고객에게 예약 확정 알림을 보낼게요.',
          leftButton: {
            text: '취소',
          },
          rightButton: {
            text: '예약 확정',
            onClick: () => setMode(''),
          },
        };
      default:
        return {
          title: '작업이 어려우신가요?',
          subtitle: '고객의 신뢰 유지를 위해 예약이 불가능한 시간은 미리 표시해주세요.',
          leftButton: {
            text: '취소',
          },
          rightButton: {
            text: '예약 불가능',
            onClick: () => setMode(''),
          },
        };
    }
  }, [mode]);

  return { mode, setMode, modalContent, isOpen: mode !== '' };
};
