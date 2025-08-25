import { useLanguage } from '@/contexts/LanguageContext';

export function useMetaData() {
  const { t } = useLanguage();
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
} 