
import { useState, useEffect } from 'react';

// Compute the current match synchronously so the very first render is already
// correct on the real device. Guarded for SSR / prerender (no window), where it
// falls back to false (desktop) — matching the 1280px prerender viewport.
const isMobileNow = (breakpoint) =>
  typeof window !== 'undefined' && window.innerWidth < breakpoint;

export function useIsMobile(breakpoint = 768) {
  // Lazy initializer runs on first render — on the client this yields the right
  // value immediately, so we never paint the desktop tree on a phone (no flash).
  const [mobile, setMobile] = useState(() => isMobileNow(breakpoint));

  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < breakpoint);
    fn();
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, [breakpoint]);

  return mobile;
}
