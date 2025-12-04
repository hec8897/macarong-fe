import React from 'react';

import Header from './Header';
import { ReservationGroup } from './ReserVationGroup';

import useDateHandler from './useDateHandler';
import type { ReservationListProps } from './ReservationList.types';

// 그룹 아이템의 예상 높이 (동적 높이를 위한 초기값)

export const ReservationList: React.FC<ReservationListProps> = () => {
  const { date, handleDateChange } = useDateHandler();

  return (
    <>
      <Header title={date} onClickDate={handleDateChange} />
      <ReservationGroup date={date} />
    </>
  );
};
