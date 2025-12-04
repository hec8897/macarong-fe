import React from 'react';

import { Flex } from '@/components/atoms';

import Header from './Header';
import DateGroupHeader from './ReserVationGroup/GroupHeader';
import GroupItem from './ReserVationGroup/GroupItem';

import dayjs from 'dayjs';
import { useReservations } from '@/hooks';
import type { ReservationListProps } from './ReservationList.types';

const DATE = '2024-07-14';

export const ReservationList: React.FC<ReservationListProps> = () => {
  const { data } = useReservations({
    date: DATE, // YYYY-MM-DD 형식
    page: 1, // 기본값: 1
    per_page: 20, // 기본값: 20
  });

  return (
    <>
      <Header title={dayjs(DATE).format('MM월 DD일 dd')} />
      <main className="py-6 px-5 bg-background-gray">
        <Flex direction="col" gap={20}>
          {/* 시간별로 그룹핑된 데이터 */}
          {data?.grouped.map(({ time, reservations }, index) => (
            <React.Fragment key={index}>
              <DateGroupHeader reservedAt={time} length={reservations.length} />
              <Flex direction="col" gap={12} className="w-full">
                {reservations.map((reservation) => (
                  <GroupItem key={reservation.serverId} reservation={reservation} />
                ))}
              </Flex>
            </React.Fragment>
          ))}
        </Flex>
      </main>
    </>
  );
};
