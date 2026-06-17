'use client';

import { useEffect } from 'react';

export default function HtmlDir({ locale }) {
  useEffect(() => {
    const dir = locale === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  return null;
}
