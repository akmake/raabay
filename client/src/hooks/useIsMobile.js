
import { useState, useLayoutEffect, useEffect } from 'react';

// useLayoutEffect fires synchronously before the browser paints —
// prevents the flash of desktop layout on mobile on first render.
// Falls back to useEffect on server (where window doesn't exist).
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const fn = () => setMobile(window.innerWidth < breakpoint);
    fn();
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, [breakpoint]);

  return mobile;
}
