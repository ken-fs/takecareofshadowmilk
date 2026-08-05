'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { FLAGSHIP_GAME_PATH } from '@/lib/seo';
import { Menu, X, Search, Home, Gamepad2, Info, Mail } from 'lucide-react';

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { href: FLAGSHIP_GAME_PATH, label: t('navigation.game'), icon: Gamepad2 },
    { href: '/', label: t('navigation.home'), icon: Home },
    { href: '/games', label: t('navigation.games'), icon: Gamepad2 },
    { href: '/about', label: t('navigation.about'), icon: Info },
    { href: '/contact', label: t('navigation.contact'), icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            {/* A single clean diamond: rotate a square rather than tile the
                conic pattern, which would clip at this size. */}
            <span
              className="block h-3 w-3 shrink-0 rotate-45 bg-ice transition-transform group-hover:rotate-[135deg]"
              aria-hidden="true"
            />
            <span className="font-display text-base font-bold leading-none tracking-tight text-bone transition-colors group-hover:text-ice sm:text-lg">
              {t('home.hero.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems
              .filter((item) => item.href !== FLAGSHIP_GAME_PATH)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wider text-bone/60 transition-colors hover:bg-white/5 hover:text-bone"
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden rounded-lg p-2 text-bone/60 transition-colors hover:bg-white/5 hover:text-bone md:flex"
              aria-label={t('common.search')}
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Language Switcher */}
            <LanguageSwitcher />

            <Link href={FLAGSHIP_GAME_PATH} className="btn-primary hidden lg:inline-flex">
              {t('navigation.game')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-lg text-bone/70 transition-colors hover:bg-white/5 hover:text-bone lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
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
                placeholder={t('common.search')}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-12 text-sm text-bone placeholder-bone/35 transition-colors focus:border-ice/50 focus:outline-none"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bone/40" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="animate-fade-in pb-4 lg:hidden">
            <div className="space-y-1">
              {navItems
                .filter((item) => item.href !== FLAGSHIP_GAME_PATH)
                .map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 font-mono text-xs uppercase tracking-wider text-bone/70 transition-colors hover:bg-white/5 hover:text-bone"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              <Link
                href={FLAGSHIP_GAME_PATH}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                <Gamepad2 className="h-4 w-4" />
                <span>{t('home.hero.startGame')}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
