import React from 'react';

import Header from './Header';
import ReservationGroup from './ReserVationGroup';

import useDataChangeHandler from './useDataChangeHandler';

export const ReservationList: React.FC = () => {
  const { date, handleDateChange, excludeCancelled, setExcludeCancelled } = useDataChangeHandler();

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
