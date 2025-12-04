import dayjs from 'dayjs';
import { useState } from 'react';

const DATE = '2024-07-14';
const format = 'YYYY-MM-DD';

/**
 * 데이터 핸들러
 * @returns
 */
const useDataChangeHandler = () => {
  // 날짜
  const [date, setDate] = useState<string>(DATE);
  // 취소된 예약 제외 여부
  const [excludeCancelled, setExcludeCancelled] = useState(false);

  // 날짜 변경
  const handleDateChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setDate(dayjs(date).subtract(1, 'day').format(format));
    } else {
      setDate(dayjs(date).add(1, 'day').format(format));
    }
  };

  return { date, handleDateChange, excludeCancelled, setExcludeCancelled };
};

export default useDataChangeHandler;
