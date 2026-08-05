'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { GAMES } from '@/data/gamesData';
import { CONTACT_EMAIL, GAME_AUTHOR, FLAGSHIP_GAME_PATH } from '@/lib/seo';

/*
  Was 70 words: one sentence of boilerplate plus the disclaimer. An About page
  is where a site states who is behind it and what it is for — the single most
  direct E-E-A-T signal available, and the cheapest one to get right.
*/
export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-4xl font-bold text-gradient mb-4">{t('navigation.about')}</h1>
        <p className="text-lg text-gray-300 mb-10">
          A fan site for Take Care of Shadow Milk and the virtual pet games around it.
        </p>

        <div className="card p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-200 mb-3">What this site does</h2>
            <p className="text-gray-400 leading-relaxed">
              Take Care of Shadow Milk is a Scratch game that got popular faster than
              anywhere to play it properly did. This site exists to be that place: the
              game loads directly, at a usable size, without a launcher or an account,
              alongside the {GAMES.length} related games we have collected — the
              community remixes built on the same care loop, and the wider virtual pet
              and simulation games worth playing next.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-gray-200 mb-3">The game</h2>
            <p className="text-gray-400 leading-relaxed">
              You look after Shadow Milk Cookie, the Beast of Deceit from Cookie Run:
              Kingdom, across four rooms — bedroom, kitchen, bathroom, playroom. Four
              meters drain in real time: hunger fastest at 0.5% per second, then energy
              at 0.3%, hygiene at 0.2%, and health only once hunger or energy falls
              below 20%. Feeding, bathing and playing each move different meters by
              different amounts, and the game never states which combination is
              correct. Caring for a trickster who did not ask for your help is the
              joke, and the game is happy to let you find out what neglect looks like.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-gray-200 mb-3">Who made it</h2>
            <p className="text-gray-400 leading-relaxed">
              The original game was built in{' '}
              <a
                href="https://scratch.mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 underline hover:text-purple-200"
              >
                Scratch
              </a>
              , MIT&apos;s block-based programming environment, by{' '}
              <a
                href="https://scratch.mit.edu/users/GPE_sb3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 underline hover:text-purple-200"
              >
                {GAME_AUTHOR}
              </a>
              . Credit for the game belongs to them, not to this site. Scratch also
              lets anyone remix a published project, which is why the Shadow Milk
              Variants category exists at all — every entry in it is someone else&apos;s
              rebuild of the same idea.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-gray-200 mb-3">
              Affiliation and rights
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.disclaimer')} Shadow Milk Cookie and Cookie Run: Kingdom are
              the property of Devsisters, who have no involvement with this site.
              Individual games belong to their creators. If you hold rights to
              something published here, email{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-purple-300 underline hover:text-purple-200"
              >
                {CONTACT_EMAIL}
              </a>{' '}
              and it will be dealt with.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-gray-200 mb-3">
              How games get listed
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Games are added because they are playable in a browser, free, and related
              to the care loop the site is built around. Descriptions are written from
              playing them. Where a game is hosted elsewhere and cannot be embedded, the
              listing links out and says so rather than pretending otherwise.
            </p>
          </section>

          <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
            <Link href={FLAGSHIP_GAME_PATH} className="btn-primary">
              {t('home.hero.startGame')}
            </Link>
            <Link href="/games" className="text-purple-300 underline hover:text-purple-200 self-center">
              {t('navigation.games')}
            </Link>
            <Link href="/contact" className="text-purple-300 underline hover:text-purple-200 self-center">
              {t('navigation.contact')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
