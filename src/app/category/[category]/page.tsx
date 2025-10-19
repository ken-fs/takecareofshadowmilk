'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { GAME_CATEGORIES, getGamesByCategory } from '@/data/gamesData';

export default function CategoryPage() {
  const params = useParams<{ category: keyof typeof GAME_CATEGORIES }>();
  const { t } = useLanguage();

  const categoryKey = params?.category as keyof typeof GAME_CATEGORIES;
  const category = GAME_CATEGORIES[categoryKey];
  const games = useMemo(() => category ? getGamesByCategory(categoryKey) : [], [categoryKey]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card p-10 text-center">
          <h1 className="text-2xl font-bold text-gradient mb-4">{t('notFound.heading')}</h1>
          <p className="text-gray-400 mb-6">{t('notFound.description')}</p>
          <div className="flex justify-center gap-4">
            <Link href="/games" className="btn-primary">{t('navigation.games')}</Link>
            <Link href="/" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 transition-colors">{t('navigation.home')}</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="text-4xl" aria-hidden>{category.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gradient">{t(`categories.${category.id}`)}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((g) => (
            <Link key={g.id} href={`/game/${g.slug}`} className="card p-5 hover:scale-105 transition-all duration-300 group">
              <div className="text-5xl mb-3 group-hover:animate-bounce-slow" aria-hidden>{g.icon}</div>
              <h3 className="font-bold text-gray-200 mb-2 text-lg">{g.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>⭐ {g.rating}</span>
                <span>•</span>
                <span>{g.plays} {t('sidebar.plays')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
