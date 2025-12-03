import React from 'react';
import { Flex } from '@/components/atoms';

interface ReservationInfoProps {
  reservedAt: string;
  status: string;
  requirements?: string;
}

const ReservationInfo: React.FC<ReservationInfoProps> = ({ reservedAt, status, requirements }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[date.getDay()];

    return {
      date: `${month}월 ${day}일 ${weekday}요일`,
      time: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
    };
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'CREATED':
        return '예약 요청';
      case 'DEFERRED':
        return '보류됨';
      case 'CANCELLED':
        return '취소됨';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CREATED':
        return 'bg-background-accent_light text-accent';
      case 'DEFERRED':
        return 'bg-yellow-100 text-yellow-600';
      case 'CANCELLED':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const { date, time } = formatDate(reservedAt);

  return (
    <div className="bg-white rounded-[20px] p-5">
      <Flex direction="col" gap={12}>
        <Flex justify="between" align="center">
          <h2 className="text-heading-3-semibold">예약 정보</h2>
          <div className={`rounded-full px-3 py-1 text-title-medium-3 ${getStatusColor(status)}`}>
            {getStatusText(status)}
          </div>
        </Flex>

        <Flex direction="col" gap={8}>
          <Flex gap={8}>
            <span className="text-title-1-semibold text-secondary min-w-[60px]">예약일시</span>
            <Flex direction="col" gap={2}>
              <span className="text-title-1-medium">{date}</span>
              <span className="text-title-1-medium">{time}</span>
            </Flex>
          </Flex>

          {requirements && (
            <Flex gap={8}>
              <span className="text-title-1-semibold text-secondary min-w-[60px]">요청사항</span>
              <span className="text-title-1-medium">{requirements}</span>
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default ReservationInfo;
