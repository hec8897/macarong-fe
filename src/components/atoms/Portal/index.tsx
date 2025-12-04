import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { PortalProps } from './type';

const Portal: React.FC<PortalProps> = ({ children, selector = 'modal-root' }) => {
  const [mounted, setMounted] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const el = document.getElementById(selector);
    setElement(el);

    return () => setMounted(false);
  }, [selector]);

  if (!mounted || !element) {
    return null;
  }

  return createPortal(children, element);
};

export default Portal;
