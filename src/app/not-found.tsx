'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl font-bold text-gray-300 mb-4">
          {t('notFound.title')}
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          {t('notFound.heading')}
        </h1>
        <p className="text-gray-600 mb-8">
          {t('notFound.description')}
        </p>
        <div className="space-x-4">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {t('notFound.backHome')}
          </Link>
          <Link 
            href="/game" 
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {t('notFound.startGame')}
          </Link>
        </div>
      </div>
    </div>
  );
} 