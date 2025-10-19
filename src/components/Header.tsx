'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Search, Home, Gamepad2, Info, Mail } from 'lucide-react';

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { href: '/game', label: t('navigation.game'), icon: Gamepad2 },
    { href: '/', label: t('navigation.home'), icon: Home },
    { href: '/games', label: t('navigation.games'), icon: Gamepad2 },
    { href: '/about', label: t('navigation.about'), icon: Info },
    { href: '/contact', label: t('navigation.contact'), icon: Mail },
  ];

  return (
    <header className="glass-effect sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-4xl group-hover:animate-bounce-slow">🍪</div>
            <div>
              <p className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform">
                {t('home.hero.title')}
              </p>
              <p className="text-xs text-gray-400 hidden sm:block">
                {t('home.features.rating')} ⭐⭐⭐⭐⭐
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isPlay = item.href === '/game';
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isPlay
                      ? 'btn-primary text-sm px-5 py-2.5 flex items-center space-x-2'
                      : 'flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-purple-400 hover:bg-white/10 transition-all duration-300 group'
                  }
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-purple-400 hover:bg-white/10 transition-all duration-300"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">{t('common.search')}</span>
            </button>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Play CTA merged into nav as first item */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-200 hover:text-purple-400 hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder={t('common.search') + '...'}
                className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isPlay = item.href === '/game';
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={
                      isPlay
                        ? 'flex items-center justify-center space-x-2 btn-primary w-full'
                        : 'flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-200 hover:text-purple-400 hover:bg-white/10 transition-all duration-300'
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <Link
                href="/game"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 btn-primary w-full mt-4"
              >
                <Gamepad2 className="w-5 h-5" />
                <span>{t('home.hero.startGame')}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
