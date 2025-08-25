export const defaultLocale = 'en-US';

export const locales = ['en-US', 'zh-CN', 'pt-BR', 'es-ES', 'fr-FR', 'de-DE'] as const;

export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  'en-US': 'English',
  'zh-CN': '中文',
  'pt-BR': 'Português',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'de-DE': 'Deutsch',
};

export const localeFlags: Record<Locale, string> = {
  'en-US': '🇺🇸',
  'zh-CN': '🇨🇳',
  'pt-BR': '🇧🇷',
  'es-ES': '🇪🇸',
  'fr-FR': '🇫🇷',
  'de-DE': '🇩🇪',
};

// 语言检测函数
export function getLocaleFromBrowser(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  
  const browserLang = navigator.language || navigator.languages?.[0] || defaultLocale;
  
  // 检测各种语言
  if (browserLang.startsWith('zh')) {
    return 'zh-CN';
  }
  if (browserLang.startsWith('pt')) {
    return 'pt-BR';
  }
  if (browserLang.startsWith('es')) {
    return 'es-ES';
  }
  if (browserLang.startsWith('fr')) {
    return 'fr-FR';
  }
  if (browserLang.startsWith('de')) {
    return 'de-DE';
  }
  
  // 默认返回英文
  return 'en-US';
}

// 语言切换函数
export function switchLocale(currentLocale: Locale): Locale {
  const currentIndex = locales.indexOf(currentLocale);
  const nextIndex = (currentIndex + 1) % locales.length;
  return locales[nextIndex];
} 