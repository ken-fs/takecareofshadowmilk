/**
 * Per-game editorial copy, keyed by slug.
 *
 * Detail pages previously ran ~60 words each, roughly 58% of it shared
 * boilerplate — 32 near-identical pages, which is the classic thin/doorway
 * shape. This file is the fix: each entry says something only true of that game.
 *
 * Ground rules for anything added here:
 *   - describe premise, character and mechanics, all of which are observable
 *   - never invent review counts, play counts, release dates or awards
 *   - if you have not seen the game, do not claim specifics about its content
 */

export interface GameDetail {
  /** One-line hook. Shown under the H1. */
  tagline: string;
  /** Two or three sentences of genuinely game-specific prose. */
  body: string;
  /** Concrete, checkable pointers for a first-time player. */
  tips?: string[];
}

/* The four real drain rates from useGameState, reused where a game runs the
   original four-meter loop. These are measured from the code, not invented. */
const CARE_LOOP_TIPS = [
  'Hunger drains fastest at 0.5% per second — it is the meter to watch first.',
  'Energy falls at 0.3%, hygiene at 0.2%, and health only slips once hunger or energy drops under 20%.',
  'Nothing in the game tells you the right move. Neglect is a valid way to play it.',
];

export const GAME_DETAILS: Record<string, GameDetail> = {
  'take-care-of-shadow-milk': {
    tagline: 'The original: four meters, one jester, and no instructions.',
    body: 'Shadow Milk Cookie is the Beast of Deceit, which makes him an unusual thing to be handed as a pet. The game gives you four rooms — bedroom, kitchen, bathroom, playroom — and four meters that drain in real time whether or not you are paying attention. Feeding, bathing and playing each move different meters by different amounts, and the interface never states which combination is correct.',
    tips: CARE_LOOP_TIPS,
  },
  'take-care-of-your-own-shadow-milk-remix': {
    tagline: 'The community remix of the original care loop.',
    body: 'Scratch lets anyone republish a modified copy of a project, and this is that: the same four-meter structure as the original with the pacing and presentation changed. If you have played the base game, the controls will read immediately — what differs is the feel rather than the rules.',
  },
  'take-care-of-your-own-pure-vanilla': {
    tagline: 'The same care loop, rebuilt around Pure Vanilla Cookie.',
    body: 'Pure Vanilla is the tonal opposite of Shadow Milk — a healer rather than a trickster — and swapping him into the care loop changes what the game feels like it is asking of you. Looking after someone gentle reads as straightforwardly kind; looking after the Beast of Deceit does not. The mechanics are near enough identical, which is precisely what makes the contrast legible.',
  },
  'take-care-of-your-own-burning-spice': {
    tagline: 'Burning Spice takes the care loop somewhere hotter.',
    body: 'Burning Spice Cookie is one of the Beasts, like Shadow Milk, so this variant keeps the slight wrongness of caring for something that does not need your help. The art leans into reds and fire motifs where the original works in blues and blacks.',
  },
  'take-care-of-your-own-hollyberry': {
    tagline: 'A warmer, fruitier take on the same four meters.',
    body: 'Hollyberry Cookie is an Ancient Hero, and this variant plays the care loop straight — no undercurrent, no joke about the character resenting you. Worth trying right after the Shadow Milk original if you want to feel how much the character choice, rather than the mechanics, drives the mood.',
  },
  'take-care-of-your-own-sage-of-truth': {
    tagline: 'A quieter variant built around Sage of Truth.',
    body: 'This one runs the familiar meters with a more subdued presentation than the brighter Cookie Run variants. The theming sits closer to the original Shadow Milk build than most of the remixes in this collection.',
  },
  'take-care-of-your-own-eternal-sugar': {
    tagline: 'Eternal Sugar, in the confectionery register.',
    body: 'Sweets-themed art over the standard care structure. There is also an earlier V1 build of this variant listed separately in the collection, which is worth a look if you are interested in how these remixes get revised.',
  },
  'take-care-of-your-own-white-lily': {
    tagline: 'White Lily gets the gentlest treatment of the set.',
    body: 'White Lily Cookie carries a lot of narrative weight in Cookie Run lore, and this variant handles her softly — pale palette, unhurried presentation. The four meters behave as they do elsewhere.',
  },
  'take-care-of-your-own-golden-cheese-cookie': {
    tagline: 'Golden Cheese, in gold.',
    body: 'One of the more visually distinct variants: heavy gold and amber where most of the collection stays in cooler colours. Mechanically it is the same care loop the rest of these remixes share.',
  },
  'take-care-of-your-own-dark-choco': {
    tagline: 'Dark Choco Cookie takes a turn in the care loop.',
    body: 'Dark Choco is a fallen-knight character, which puts this variant tonally nearer the Shadow Milk original than the sweeter entries in the collection. Standard four-meter structure underneath.',
  },
  'take-care-of-your-own-butter-roll': {
    tagline: 'A soft, bakery-themed variant.',
    body: 'Butter Roll is a lower-stakes choice than the Beasts, and the variant plays accordingly. A reasonable first stop if the Shadow Milk original felt more unsettling than you wanted.',
  },
  'take-care-of-your-own-truthless-recluse': {
    tagline: 'A withdrawn, secretive spin on the loop.',
    body: 'Themed around isolation rather than mischief, which is a genuinely different note from the rest of the Shadow Milk variants. The care mechanics are the collection standard.',
  },
  'take-care-of-your-own-fount': {
    tagline: 'The calmest variant in the collection.',
    body: 'Water and fountain motifs, slower presentation, less visual noise than the Beast-themed builds. A good palate cleanser between the louder remixes.',
  },
  'take-care-of-your-own-shadow-milk-but-with-a-beer-bottle': {
    tagline: 'Exactly what the title says.',
    body: 'A one-joke remix, and the joke is in the title — Shadow Milk, holding a beer bottle, otherwise unchanged. It is a fair example of how Scratch remix culture actually works: someone changed one asset and republished it, and enough people found it funny that it stuck.',
  },
  'take-care-of-your-own-silent-salt': {
    tagline: 'Silent Salt, played quietly.',
    body: 'Another Beast character, handled with restraint rather than spectacle. Sits close to the original in tone.',
  },
  'take-care-of-your-own-two-s-tpot-bfb': {
    tagline: 'A Battle for BFDI crossover.',
    body: 'Two from TPOT dropped into the Cookie Run care loop — a crossover that only makes sense if you know both source objects, which is most of its appeal. Scratch remix culture routinely collides fandoms this way.',
  },
  'take-care-of-your-own-book': {
    tagline: 'The pet is a book.',
    body: 'The joke here is the category error: a book has no needs, and the game asks you to attend to them anyway. Short, and more interesting as a comment on the genre than as a game.',
  },
  'take-care-of-wily': {
    tagline: 'A Wily-themed variant with a twist.',
    body: 'One of the smaller remixes in the collection, keeping the four-meter loop with its own character art. Quick to try if you are working through the whole set.',
  },
  'take-care-of-your-own-pursuer': {
    tagline: 'Caring for something that is hunting you.',
    body: 'The premise inverts the genre: the thing you are looking after is a pursuer. That reframing is doing more work here than any mechanical change.',
  },
  'take-care-of-your-1x1x1x1': {
    tagline: 'A Roblox urban legend as a virtual pet.',
    body: '1x1x1x1 is a long-running piece of Roblox folklore, and putting it in a care loop is the same move as the Book variant — take something that should not have needs and give it needs. Slight, and knowingly so.',
  },
  'take-care-of-your-own-shadow-milk-but-he-looks-like-his-in-game-sprite': {
    tagline: 'Shadow Milk, redrawn to match Cookie Run: Kingdom.',
    body: 'The original uses its creator\'s own interpretation of the character. This remix replaces that art with something closer to the official in-game sprite, which makes it the variant to play if the hand-drawn look was what put you off.',
  },
  'take-care-of-your-own-shelky': {
    tagline: 'A small, obscure entry in the set.',
    body: 'One of the least-known remixes here, running the standard care structure with its own character. Included for completeness of the variant collection.',
  },
  'take-care-of-your-own-masenko': {
    tagline: 'A Dragon Ball reference in the care loop.',
    body: 'Masenko is a Dragon Ball attack name, so this is another cross-fandom remix rather than a mechanical departure. Energetic art, familiar meters.',
  },
  'take-care-of-your-own-gamzee-makara': {
    tagline: 'Homestuck meets the Cookie Run care loop.',
    body: 'Gamzee is a Homestuck troll, and pairing him with Shadow Milk is less arbitrary than most crossovers in this set — both are jester-coded characters with a menace under the greasepaint. The care loop is unchanged.',
  },
  'v1-take-care-of-your-own-eternal-sugar': {
    tagline: 'The earlier build of the Eternal Sugar variant.',
    body: 'Kept alongside the current version rather than replaced by it. Comparing the two is a small window into how Scratch creators revise a remix — what got redrawn, what got cut, what stayed.',
  },
};

export function getGameDetail(slug: string): GameDetail | undefined {
  return GAME_DETAILS[slug];
}
