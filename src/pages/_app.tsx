import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { PageTransition } from '@/components/hocs';

import dayjs from 'dayjs';
import type { AppProps } from 'next/app';

import 'dayjs/locale/ko';
import '@/styles/globals.scss';

// Day.js 한국어 로케일 전역 설정
dayjs.locale('ko');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <PageTransition> */}
      <Component {...pageProps} />
      {/* </PageTransition> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
