'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const { locale, changeLocale, localeNames, localeFlags } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleLanguageChange = (newLocale: Locale) => {
    changeLocale(newLocale);
    setOpen(false);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="focus-ring flex items-center gap-1.5 rounded-lg px-2 py-2 text-bone/60 transition-colors hover:bg-white/5 hover:text-bone"
      >
        <span className="text-base leading-none">{localeFlags[locale]}</span>
        <span className="hidden font-mono text-xs uppercase tracking-wider sm:inline">
          {locale.slice(0, 2)}
        </span>
        <svg className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute right-0 z-50 mt-2 max-h-72 w-44 overflow-auto overscroll-contain rounded-xl border border-white/10 bg-ink-raised shadow-2xl transition-all duration-150 ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
        role="listbox"
        tabIndex={-1}
      >
        <div className="p-1.5">
          {Object.entries(localeNames).map(([localeKey, localeName]) => (
            <button
              key={localeKey}
              onClick={() => handleLanguageChange(localeKey as Locale)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                locale === localeKey
                  ? 'bg-white/5 text-ice'
                  : 'text-bone/70 hover:bg-white/5 hover:text-bone'
              }`}
              role="option"
              aria-selected={locale === localeKey}
            >
              <span className="text-base leading-none">{localeFlags[localeKey as Locale]}</span>
              <span>{localeName}</span>
              {locale === localeKey && (
                <svg className="ml-auto h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
