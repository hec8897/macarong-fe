import React from 'react';
import { Flex, Icon } from '@/components/atoms';
import { useRouter } from 'next/router';

import dayjs from 'dayjs';

interface HeaderProps {
  reservedAt: string;
}

const Header: React.FC<HeaderProps> = ({ reservedAt }) => {
  const { back } = useRouter();
  return (
    <header className="bg-white sticky top-0">
      <Flex className="h-16 px-1" align="center" gap={4}>
        <Flex onClick={back} as="button" align="center" justify="center" className="h-12 w-12">
          <Icon variant="arrowLeft" />
        </Flex>
        <h1 className="text-title-1-medium">예약 요청 확인</h1>
      </Flex>
      <div className="bg-background-accent_light">
        <Flex className="py-2.5 px-5" align="center" gap={4}>
          <Icon variant="clockFill" size={20} />
          <b className="text-title-1-semibold text-accent">
            {dayjs(reservedAt).format('YYYY년 M월 D일 (ddd) H:mm')}
          </b>
        </Flex>
      </div>
    </header>
  );
};

export default Header;
