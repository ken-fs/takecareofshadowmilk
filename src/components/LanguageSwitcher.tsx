'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const { locale, changeLocale, localeNames, localeFlags } = useLanguage();

  const handleLanguageChange = (newLocale: Locale) => {
    changeLocale(newLocale);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-3 px-4 py-3 rounded-xl glass-effect hover:bg-white/20 transition-all duration-300 focus-ring">
        <span className="text-xl">{localeFlags[locale]}</span>
        <span className="text-sm font-semibold text-gray-200">{localeNames[locale]}</span>
        <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-3 w-52 glass-effect rounded-2xl shadow-2xl border border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 backdrop-blur-xl">
        <div className="py-3">
          {Object.entries(localeNames).map(([localeKey, localeName]) => (
            <button
              key={localeKey}
              onClick={() => handleLanguageChange(localeKey as Locale)}
              className={`w-full flex items-center space-x-4 px-5 py-3 text-left hover:bg-white/10 transition-all duration-300 rounded-xl mx-2 ${
                locale === localeKey ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span className="text-xl">{localeFlags[localeKey as Locale]}</span>
              <span className="font-semibold">{localeName}</span>
              {locale === localeKey && (
                <svg className="w-5 h-5 ml-auto text-purple-400" fill="currentColor" viewBox="0 0 20 20">
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