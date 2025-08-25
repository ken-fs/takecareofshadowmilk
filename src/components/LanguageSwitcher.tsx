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
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
        <span className="text-lg">{localeFlags[locale]}</span>
        <span className="text-sm font-medium text-gray-700">{localeNames[locale]}</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {Object.entries(localeNames).map(([localeKey, localeName]) => (
            <button
              key={localeKey}
              onClick={() => handleLanguageChange(localeKey as Locale)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                locale === localeKey ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{localeFlags[localeKey as Locale]}</span>
              <span className="font-medium">{localeName}</span>
              {locale === localeKey && (
                <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
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