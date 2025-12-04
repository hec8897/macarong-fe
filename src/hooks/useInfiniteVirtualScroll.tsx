// src/hooks/useInfiniteVirtualScroll.tsx
import { useEffect, useRef } from 'react';
import { useVirtualizer, type Virtualizer } from '@tanstack/react-virtual';

interface UseInfiniteVirtualScrollParams {
  /** 아이템 개수 */
  count: number;
  /** 다음 페이지 존재 여부 */
  hasNextPage: boolean;
  /** 다음 페이지 로딩 중 여부 */
  isFetchingNextPage: boolean;
  /** 다음 페이지 로드 함수 */
  fetchNextPage: () => void;
  /** 아이템 예상 높이 */
  estimatedItemHeight?: number;
  /** 화면 밖에 렌더링할 아이템 수 */
  overscan?: number;
}

const useInfiniteVirtualScroll = ({
  count,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  estimatedItemHeight = 200,
  overscan = 5,
}: UseInfiniteVirtualScrollParams) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const observerTarget = useRef<HTMLDivElement>(null);

  // 가상화 설정
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimatedItemHeight,
    overscan,
  });

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

  // 컨테이너 스타일 계산
  const containerStyle: React.CSSProperties = {
    height: `${virtualizer.getTotalSize() + (isFetchingNextPage ? 40 : 0)}px`,
    width: '100%',
    position: 'relative',
  };

  return {
    virtualizer,
    parentRef,
    observerTarget,
    containerStyle,
  };
};

export default useInfiniteVirtualScroll;
