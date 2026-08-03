'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_EMAIL, GAME_AUTHOR } from '@/lib/seo';

/*
  This page used to render three untranslated policy labels and nothing else —
  51 words, no email, no form, no way to reach anyone. For a site that embeds
  another person's game, having no contact route is both a trust problem and a
  practical one: rights holders need somewhere to send a notice.
*/
export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-4xl font-bold text-gradient mb-4">{t('navigation.contact')}</h1>
        <p className="text-lg text-gray-300 mb-10">
          Questions, corrections, or a copyright notice — this is where to send them.
        </p>

        <div className="card p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-200 mb-2">Email</h2>
            <p className="text-gray-400 mb-3">
              We read everything that arrives here and reply to anything that needs
              a reply. Please include the URL of the page you are writing about.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary inline-block">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-gray-200 mb-2">
              Copyright and takedown requests
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The games here were made by their respective creators; the original
              Take Care of Shadow Milk was built in Scratch by{' '}
              <a
                href="https://scratch.mit.edu/users/GPE_sb3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 underline hover:text-purple-200"
              >
                {GAME_AUTHOR}
              </a>
              . Shadow Milk Cookie and Cookie Run: Kingdom are the property of
              Devsisters. If you hold rights to something published here and want it
              removed, email the address above with the page URL, a description of
              the material, and confirmation that you can act for the rights holder.
              Valid requests are actioned without argument.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-gray-200 mb-2">Corrections</h2>
            <p className="text-gray-400 leading-relaxed">
              If something here is wrong — a game credited to the wrong creator, a
              broken embed, a description that does not match what the game actually
              does — say so and it gets fixed. Specific reports get fixed faster than
              general ones.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-gray-200 mb-2">What this site is</h2>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.disclaimer')} This site collects and organises browser games
              so they are easy to find and play; it does not claim authorship of them.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
            <Link href="/about" className="text-purple-300 underline hover:text-purple-200">
              About this site
            </Link>
            <Link href="/games" className="text-purple-300 underline hover:text-purple-200">
              {t('navigation.games')}
            </Link>
            <Link href="/" className="text-purple-300 underline hover:text-purple-200">
              {t('navigation.home')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
