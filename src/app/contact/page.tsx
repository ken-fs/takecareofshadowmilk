'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <main className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-4xl font-bold text-gradient mb-6">{t('navigation.contact')}</h1>
        <div className="card p-8 space-y-4">
          <p className="text-gray-300">{t('footer.copyrightNotice')}</p>
          <p className="text-gray-300">{t('footer.termsOfUse')}</p>
          <p className="text-gray-300">{t('footer.privacyPolicy')}</p>
          <div className="pt-4">
            <Link href="/" className="btn-primary">{t('navigation.home')}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

