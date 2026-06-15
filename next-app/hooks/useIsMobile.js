'use client';

import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < breakpoint);
    const fn = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, [breakpoint]);

  return mobile;
}
