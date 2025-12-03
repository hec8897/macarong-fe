/**
 * React Query 클라이언트 설정
 */

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 기본 쿼리 옵션
      staleTime: 1000 * 60 * 5, // 5분
      gcTime: 1000 * 60 * 10, // 10분 (구 cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      // 기본 뮤테이션 옵션
      retry: 0,
    },
  },
});

