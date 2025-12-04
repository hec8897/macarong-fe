import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

type Direction = 'left' | 'right';

// 좌우 슬라이드 애니메이션 variants
const slideVariants = {
  enter: (direction: Direction) => ({
    x: direction === 'right' ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    x: direction === 'right' ? '-100%' : '100%',
    opacity: 0,
  }),
};

// 페이지 전환 방향 감지 훅
const usePageTransitionDirection = () => {
  const router = useRouter();
  const [direction, setDirection] = useState<Direction>('right');
  const historyStackRef = useRef<string[]>([]);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      const currentPath = router.asPath;
      const stack = historyStackRef.current;

      // 히스토리 스택에서 현재 경로를 찾기
      const currentIndex = stack.indexOf(currentPath);

      if (currentIndex > -1) {
        // 히스토리 스택에 있으면 뒤로가기
        historyStackRef.current = stack.slice(0, currentIndex + 1);
        setDirection('left');
      } else {
        // 새로운 경로면 앞으로가기
        historyStackRef.current = [...stack, currentPath];
        setDirection('right');
      }
    };

    // 초기 경로 추가
    if (historyStackRef.current.length === 0) {
      historyStackRef.current = [router.asPath];
    }

    router.events?.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events?.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router]);

  return direction;
};

// 페이지 전환 애니메이션 컴포넌트
interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const router = useRouter();
  const direction = usePageTransitionDirection();

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={router.asPath}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            width: '100%',
            willChange: 'transform',
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
