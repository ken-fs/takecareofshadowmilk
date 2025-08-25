'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, defaultLocale, getLocaleFromBrowser, locales } from '@/i18n/config';
import { enUS } from '@/i18n/locales/en-US';
import { zhCN } from '@/i18n/locales/zh-CN';
import { ptBR } from '@/i18n/locales/pt-BR';
import { esES } from '@/i18n/locales/es-ES';
import { frFR } from '@/i18n/locales/fr-FR';
import { deDE } from '@/i18n/locales/de-DE';

// 语言包映射
const localeData = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'pt-BR': ptBR,
  'es-ES': esES,
  'fr-FR': frFR,
  'de-DE': deDE,
};

type LocaleData = typeof enUS;

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => string;
  changeLocale: (newLocale: Locale) => void;
  localeNames: Record<Locale, string>;
  localeFlags: Record<Locale, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 客户端渲染后检测浏览器语言
    const detectedLocale = getLocaleFromBrowser();
    setLocale(detectedLocale);
    setMounted(true);
  }, []);

  // 保存语言设置到localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('locale', locale);
    }
  }, [locale, mounted]);

  // 从localStorage恢复语言设置
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  // 翻译函数
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = localeData[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // 如果找不到翻译，返回原始key
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: LanguageContextType = {
    locale,
    t,
    changeLocale,
    localeNames: {
      'en-US': 'English',
      'zh-CN': '中文',
      'pt-BR': 'Português',
      'es-ES': 'Español',
      'fr-FR': 'Français',
      'de-DE': 'Deutsch',
    },
    localeFlags: {
      'en-US': '🇺🇸',
      'zh-CN': '🇨🇳',
      'pt-BR': '🇧🇷',
      'es-ES': '🇪🇸',
      'fr-FR': '🇫🇷',
      'de-DE': '🇩🇪',
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 