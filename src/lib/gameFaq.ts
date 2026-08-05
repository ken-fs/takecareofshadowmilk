import type { Game } from '@/data/gamesData';
import { ORIGINAL_PROJECT_ID, scratchProjectUrl } from '@/data/gamesData';
import { GAME_AUTHOR } from '@/lib/seo';
import {
  getScratchStats,
  formatCount,
  formatSharedDate,
  SCRATCH_STATS_AS_OF,
} from '@/data/scratchStats';

/**
 * Per-game FAQ, derived entirely from verified fields — never hand-written per
 * game, so it cannot drift out of sync with the data or make a claim the API
 * does not support.
 *
 * Two things it is for. First, these are the questions people actually arrive
 * with ("who made this", "is it free", "is this the original one"), and until now
 * no page answered any of them. Second, the answers are page-specific by
 * construction: a different author, a different date, a different lineage. That
 * is the opposite of the shared boilerplate that made these pages thin.
 *
 * The visible copy and the FAQPage JSON-LD are both generated from this single
 * list, because structured data that does not match what a visitor can read on
 * the page is a spam signal rather than an enhancement.
 */

export interface FaqEntry {
  question: string;
  answer: string;
}

export function buildGameFaq(game: Game): FaqEntry[] {
  const stats = getScratchStats(game.scratchProjectId);
  const isOriginal = game.scratchProjectId === ORIGINAL_PROJECT_ID;
  const faq: FaqEntry[] = [];

  if (game.scratchAuthor && game.scratchProjectId) {
    faq.push({
      question: `Who made ${game.name}?`,
      answer: isOriginal
        ? `${game.scratchAuthor} built it in MIT Scratch and published it as project #${game.scratchProjectId}. Every variant in this collection is a remix of that project.`
        : `A Scratch user called ${game.scratchAuthor}, as project #${game.scratchProjectId}. It is a remix of TAKE CARE OF YOUR OWN SHADOW MILK! by ${GAME_AUTHOR}, so the underlying code is ${GAME_AUTHOR}'s work and the character and art changes are ${game.scratchAuthor}'s.`,
    });
  }

  faq.push({
    question: `Is ${game.name} free to play?`,
    answer: game.scratchProjectId
      ? `Yes. It runs in the browser through the official Scratch player embedded on this page, with no download, no install and no account. You can also play it directly on Scratch at ${scratchProjectUrl(game.scratchProjectId)}.`
      : 'Yes — it runs in the browser with no download or account required.',
  });

  faq.push({
    question: `How do you play ${game.name}?`,
    answer:
      'You look after a character whose four meters — hunger, energy, hygiene and health — drain in real time whether or not you are watching. Feeding, washing, resting and playing each move different meters by different amounts. Hunger falls fastest, at roughly half a percent per second, and health only starts slipping once hunger or energy drops below twenty percent. Nothing in the interface tells you the correct move, and neglecting the character is a valid way to play it.',
  });

  if (stats) {
    const remixLine =
      stats.remixes > 0
        ? ` It has since been remixed ${formatCount(stats.remixes)} time${stats.remixes === 1 ? '' : 's'} itself.`
        : '';
    faq.push({
      question: `How popular is ${game.name}?`,
      answer: `As recorded on ${formatSharedDate(SCRATCH_STATS_AS_OF)} it had ${formatCount(stats.views)} plays and ${formatCount(stats.loves)} loves on Scratch, where it was first shared on ${formatSharedDate(stats.shared)}.${remixLine} These are Scratch's own public counters, so they will have moved since.`,
    });
  }

  if (!isOriginal) {
    faq.push({
      question: `Is ${game.name} the same as the original Shadow Milk game?`,
      answer:
        'No. It shares the original\'s code and four-meter structure, but the character, artwork and often the pacing are different. If you want the version everything else here descends from, play Take Care of Your Own Shadow Milk instead.',
    });
  }

  return faq;
}

/* FAQPage JSON-LD for the same entries rendered on the page. */
export function faqJsonLd(faq: FaqEntry[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  };
}
