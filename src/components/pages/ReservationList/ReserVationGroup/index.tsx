import React, { useEffect } from 'react';

import { Flex } from '@/components/atoms';

import DateGroupHeader from './GroupHeader';
import GroupItem from './GroupItem';

import { useReservations, useInfiniteVirtualScroll } from '@/hooks';

// 그룹 아이템의 예상 높이 (동적 높이를 위한 초기값)
const GROUP_GAP = 20;

interface ReservationGroupProps {
  date: string;
  excludeCancelled: boolean;
}
export const ReservationGroup: React.FC<ReservationGroupProps> = ({ date, excludeCancelled }) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useReservations({
    date, // YYYY-MM-DD 형식
    excludeCancelled,
  });
  const { virtualizer, parentRef, observerTarget, containerStyle } = useInfiniteVirtualScroll({
    count: data?.grouped.length ?? 0,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    overscan: 5,
  });

  // 날짜 변경 시 스크롤을 상단으로 이동
  useEffect(() => {
    // 데이터가 있을 때만 스크롤 이동
    if (data?.grouped.length && parentRef.current) {
      // virtualizer를 사용하여 첫 번째 아이템으로 스크롤
      virtualizer.scrollToIndex(0, { align: 'start' });
      // DOM 요소도 직접 스크롤 (이중 보장)
      parentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [date, virtualizer, data?.grouped.length]);

  // 인피니티 스크롤: 하단 감지 요소가 완전히 보일 때만 다음 페이지 로드
  useEffect(() => {
    const target = observerTarget.current;
    if (!target || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 하단 감지 요소가 완전히 보일 때만 다음 페이지 로드
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 1.0, // 요소가 100% 보일 때만 트리거
        rootMargin: '0px', // 추가 여백 없음
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <main ref={parentRef} className="h-full pt-6 pb-[64px] px-5 bg-background-gray overflow-auto">
      <div style={containerStyle}>
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const group = data?.grouped[virtualItem.index];
          if (!group) return null;

          return (
            <div
              key={virtualItem.key}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
                paddingBottom: `${GROUP_GAP}px`,
              }}
            >
              <Flex direction="col" gap={12}>
                <DateGroupHeader reservedAt={group.time} length={group.reservations.length} />
                <Flex direction="col" gap={12} className="w-full">
                  {group.reservations.map((reservation) => (
                    <GroupItem
                      key={reservation.serverId}
                      reservation={reservation}
                      customerId={reservation.customerId}
                    />
                  ))}
                </Flex>
              </Flex>
            </div>
          );
        })}
        {/* 인피니티 스크롤 감지용 요소 (하단에 배치) */}
        {hasNextPage && (
          <div
            ref={observerTarget}
            style={{
              position: 'absolute',
              top: `${virtualizer.getTotalSize()}px`,
              left: 0,
              width: '100%',
              height: '1px', // 최소 높이로 설정
            }}
          />
        )}
        {/* 인피니티 스크롤 로딩 표시 */}
        {isFetchingNextPage && (
          <div
            style={{
              position: 'absolute',
              top: `${virtualizer.getTotalSize()}px`,
              left: 0,
              width: '100%',
              height: '40px',
            }}
            className="flex items-center justify-center"
          >
            <div className="text-gray-500">로딩 중...</div>
          </div>
        )}
      </div>
    </main>
  );
};
