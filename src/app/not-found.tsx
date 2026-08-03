import Link from 'next/link';
import type { Metadata } from 'next';

/*
  Server component on purpose. As a client component it inherited the root
  layout's canonical, so every 404 declared itself the canonical homepage — the
  exact signal that collapsed the rest of the site. `robots: noindex` plus no
  canonical of its own is what a not-found page should emit.

  Copy is hardcoded rather than translated: the LanguageProvider is a client
  context, and reaching for it here would force this back into a client
  component and undo the fix.
*/
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
  // Metadata fields are inherited, so the root layout's homepage canonical
  // lands here unless it is explicitly reset. `null` is how Next clears an
  // inherited field; omitting the key keeps the parent's value.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="display-lg mt-4 text-bone">This page does not exist</h1>
        <p className="prose-body mt-4">
          The link may be broken, or the page may have been moved. The game is
          still where you left it.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/game" className="btn-primary">
            Play the game
          </Link>
          <Link href="/games" className="btn-secondary">
            Browse all games
          </Link>
        </div>
      </div>
    </main>
  );
}
