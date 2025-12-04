import React, { useState } from 'react';

import Header from './Header';
import { ReservationGroup } from './ReserVationGroup';

import useDateHandler from './useDateHandler';

// 그룹 아이템의 예상 높이 (동적 높이를 위한 초기값)

export const ReservationList: React.FC = () => {
  const [excludeCancelled, setExcludeCancelled] = useState(false);

  const { date, handleDateChange } = useDateHandler();

  return (
    <>
      <Header
        date={date}
        onClickDate={handleDateChange}
        excludeCancelled={excludeCancelled}
        onToggleCanceled={setExcludeCancelled}
      />
      <ReservationGroup date={date} excludeCancelled={excludeCancelled} />
    </>
  );
};
