'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-4xl font-bold text-gradient mb-6">{t('navigation.about')}</h1>
        <div className="card p-8">
          <p className="text-gray-300 leading-relaxed">{t('footer.aboutUsDesc')}</p>
          <p className="text-gray-400 mt-6 text-sm">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </main>
  );
}

