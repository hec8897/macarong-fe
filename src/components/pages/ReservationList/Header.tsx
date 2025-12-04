import React, { useEffect, useState } from 'react';

import { Flex, Icon, Toggle } from '@/components/atoms';

import dayjs from 'dayjs';
import { throttle } from 'lodash';
import classNames from 'classnames';

interface HeaderProps {
  date: string;
  onClickDate: (direction: 'prev' | 'next') => void;
  excludeCancelled: boolean;
  onToggleCanceled: (isCanceled: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  date,
  onClickDate,
  excludeCancelled,
  onToggleCanceled,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const title = dayjs(date).format('M월 D일 dd');

  /**
   * 날짜 변경 시 스크롤을 상단으로 이동
   * @param direction - 이전 날짜 또는 다음 날짜
   */
  const handleOnClickDate = (direction: 'prev' | 'next') => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    onClickDate(direction);
  };

  useEffect(() => {
    const onScroll = throttle(() => {
      const isScrolledNow = window.scrollY > 0;
      setIsScrolled(isScrolledNow);
    }, 500); // 3초마다 최대 1번 실행

    window.addEventListener('scroll', onScroll, { passive: true });
    // 초기 상태 확인
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={classNames('sticky bg-white top-0 z-10', { header_scrolled: isScrolled })}>
      <Flex align="center" justify="between" gap={16} className="p-4 pb-3">
        <button onClick={() => handleOnClickDate('prev')}>
          <Icon variant="chevronLeft" />
        </button>
        <h3 className="text-heading-3-semibold">{title}</h3>
        <button onClick={() => handleOnClickDate('next')}>
          <Icon variant="chevronRight" />
        </button>
      </Flex>

      <div className="py-4 px-3">
        <Flex align="center" justify="between" gap={16} className="px-1">
          <div className="text-title-medium-2 text-secondary">취소된 예약 안보기</div>
          <Toggle checked={excludeCancelled} onChange={onToggleCanceled} />
        </Flex>
      </div>
    </header>
  );
};

export default Header;
