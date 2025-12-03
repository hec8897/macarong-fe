import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

// Day.js 한국어 로케일 전역 설정
dayjs.locale('ko');

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
