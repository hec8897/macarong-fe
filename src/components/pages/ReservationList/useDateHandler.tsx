import dayjs from 'dayjs';
import { useState } from 'react';

const DATE = '2024-07-14';
const format = 'YYYY-MM-DD';

/**
 * 날짜 핸들러
 * @returns
 */
const useDateHandler = () => {
  const [date, setDate] = useState<string>(DATE);

  const handleDateChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setDate(dayjs(date).subtract(1, 'day').format(format));
    } else {
      setDate(dayjs(date).add(1, 'day').format(format));
    }
  };

  return { date, handleDateChange };
};

export default useDateHandler;
