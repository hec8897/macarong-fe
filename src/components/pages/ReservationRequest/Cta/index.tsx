import React from 'react';
import { Button, Flex } from '@/components/atoms';
import { Modal } from '@/components/molecules';
import { useCtaEvent } from './useCtaEvent';

const RejectButton: React.FC = () => {
  const { isOpen, setMode, modalContent } = useCtaEvent();

  return (
    <>
      <Modal
        title={modalContent?.title}
        subtitle={modalContent?.subtitle}
        isOpen={isOpen}
        onClose={() => setMode('')}
        leftButton={{
          text: '취소',
          onClick: () => setMode(''),
          variant: 'tertiary',
        }}
        rightButton={{
          text: modalContent?.rightButton.text,
          onClick: () => setMode(''),
        }}
      />

      <Flex gap={8}>
        <Button variant="tertiary" onClick={() => setMode('reject')}>
          예약 불가
        </Button>
        <Button onClick={() => setMode('confirm')}>예약 확정</Button>
      </Flex>
    </>
  );
};

export default RejectButton;
