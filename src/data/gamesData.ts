/**
 * Games Database
 * Contains all game information including categories, links, ratings, and metadata
 */

export interface Game {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  /**
   * @deprecated Editorial placeholder, NOT a measured value. There is no review
   * system on this site, so this must never be rendered to users or emitted as
   * schema.org aggregateRating — doing so is a structured-data policy violation
   * and risks a manual action. Kept only for internal ordering. Delete once
   * `isFeatured`/`isTrending` fully replace it as sort keys.
   */
  rating: number;
  /**
   * @deprecated Editorial placeholder, NOT a play counter. Nothing in the app
   * counts plays. Do not display.
   */
  plays: string;
  category: GameCategory[];
  isNew: boolean;
  isTrending: boolean;
  isFeatured: boolean;
  thumbnailUrl?: string;
  gameUrl?: string; // internal route
  embedUrl?: string; // optional iframe source if embeddable
  externalUrl?: string; // fallback external play link
  tags: string[];
}

export type GameCategory =
  | 'scratch-games'
  | 'simulation-games'
  | 'casual-games'
  | 'virtual-pet'
  | 'shadow-milk-variants'
  | 'adventure'
  | 'puzzle'
  | 'action';

/*
  Each category carries its own prose. Category pages used to render nothing but
  a heading and a grid — 54 words, all of it shared template — which is exactly
  the shape Google treats as a thin doorway page. `intro` and `blurb` give each
  page something only that page says.
*/
export const GAME_CATEGORIES = {
  'scratch-games': {
    id: 'scratch-games',
    name: 'Scratch Games',
    icon: '🎮',
    color: 'from-purple-500 to-pink-500',
    blurb: 'Browser games built in MIT Scratch and playable without a download.',
    intro:
      'Scratch is the block-based programming environment from MIT, and the games here were all built in it by individual creators rather than studios. That shapes how they play: short loops, sprite art drawn by hand, and mechanics that do one thing well instead of ten things adequately. Take Care of Shadow Milk is the anchor of this collection — a care loop where four meters drain in real time and nothing in the interface tells you what the right move is. Because Scratch projects run on a web player, everything in this category starts in a couple of seconds with no install, no account, and no plugin.',
  },
  'simulation-games': {
    id: 'simulation-games',
    name: 'Simulation Games',
    icon: '🏠',
    color: 'from-blue-500 to-cyan-500',
    blurb: 'Games about running a system: a salon, a clinic, a household.',
    intro:
      'Simulation games give you a system with rules and let you find the edges of it yourself. In this category that usually means managing something with several competing needs — a grooming salon with a queue, a veterinary clinic with patients in varying states, a household where every action costs time you could have spent elsewhere. The appeal is not winning but noticing: which lever matters most, what happens when you neglect one meter to protect another. These are all browser-based and free, so experimenting costs you nothing more than a reload.',
  },
  'casual-games': {
    id: 'casual-games',
    name: 'Casual Games',
    icon: '😊',
    color: 'from-green-500 to-emerald-500',
    blurb: 'Short sessions, gentle difficulty, no tutorial required.',
    intro:
      'Casual games are built to be picked up in the gap between other things. Nothing in this category demands a tutorial or a commitment: controls are usually a single click or tap, sessions run a few minutes, and stopping mid-game costs you nothing. That does not make them shallow — the care games in particular reward paying attention over several sessions, because the meters keep telling you something about how you played. Everything here loads directly in the browser on desktop and mobile.',
  },
  'virtual-pet': {
    id: 'virtual-pet',
    name: 'Virtual Pet',
    icon: '🐾',
    color: 'from-orange-500 to-yellow-500',
    blurb: 'Feed it, clean it, play with it — or find out what happens if you do not.',
    intro:
      'The virtual pet genre goes back to the Tamagotchi keychains of the late nineties, and the core idea has barely changed: a creature with needs that decay whether or not you are watching. What varies is the tone. Some games in this category are affectionate and forgiving; others, Take Care of Shadow Milk among them, hand you a character who is not entirely harmless and decline to tell you which way to play. Hunger tends to drain fastest in these games, which makes it the meter to watch when you are learning one.',
  },
  'shadow-milk-variants': {
    id: 'shadow-milk-variants',
    name: 'Shadow Milk Variants',
    icon: '🍼',
    color: 'from-fuchsia-500 to-purple-500',
    blurb: 'Community remixes of the original Shadow Milk care game.',
    intro:
      'Scratch lets anyone remix a published project, and Take Care of Your Own Shadow Milk has been remixed a lot. This category collects those variants: the same care loop rebuilt around Pure Vanilla, Burning Spice, Hollyberry, Golden Cheese and a long tail of stranger choices, including one where Shadow Milk holds a beer bottle and one styled after his in-game sprite. Most keep the four-meter structure and change the art, the pacing, or the joke. If you have played the original and want the same rhythm with a different character, start here.',
  },
} as const;

export const GAMES: Game[] = [
  {
    id: 'shadow-milk',
    name: 'Take Care of Shadow Milk',
    slug: 'take-care-of-shadow-milk',
    icon: '🍪',
    description: 'Take care of the adorable Shadow Milk Cookie from Cookie Run: Kingdom. Feed, bathe, and play with your virtual pet!',
    rating: 4.9,
    plays: '1.5M',
    category: ['scratch-games', 'simulation-games', 'virtual-pet', 'shadow-milk-variants'],
    isNew: true,
    isTrending: true,
    isFeatured: true,
    gameUrl: '/game',
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-shadow-milk',
    embedUrl: 'https://takecareofshadowmilk.org/take-care-of-shadow-milk.embed',
    tags: ['virtual pet', 'cookie run', 'scratch', 'simulation', 'cute'],
  },
  // Shadow Milk Variants from reference site
  {
    id: 'shadow-milk-remix',
    name: 'Take Care of Your Own Shadow Milk Remix',
    slug: 'take-care-of-your-own-shadow-milk-remix',
    icon: '🎵',
    description: 'A remixed version of the Shadow Milk experience with new twists.',
    rating: 4.7,
    plays: '540K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: true,
    isTrending: true,
    isFeatured: true,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-shadow-milk-remix',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-shadow-milk-remix',
    tags: ['shadow milk', 'remix', 'virtual pet', 'scratch'],
  },
  {
    id: 'pure-vanilla',
    name: 'Take Care of Your Own Pure Vanilla',
    slug: 'take-care-of-your-own-pure-vanilla',
    icon: '🍦',
    description: 'Care for the Pure Vanilla variant with sweet interactions.',
    rating: 4.6,
    plays: '610K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: true,
    isFeatured: true,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-pure-vanilla',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-pure-vanilla',
    tags: ['pure vanilla', 'virtual pet', 'cookie'],
  },
  {
    id: 'burning-spice',
    name: 'Take Care of Your Own Burning Spice',
    slug: 'take-care-of-your-own-burning-spice',
    icon: '🌶️',
    description: 'Spice things up with the Burning Spice variant.',
    rating: 4.5,
    plays: '480K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: true,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-burning-spice',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-burning-spice',
    tags: ['burning spice', 'spicy', 'virtual pet'],
  },
  {
    id: 'hollyberry',
    name: 'Take Care of Your Own Hollyberry',
    slug: 'take-care-of-your-own-hollyberry',
    icon: '🍓',
    description: 'A fresh and fruity variant to take care of.',
    rating: 4.6,
    plays: '520K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: true,
    isFeatured: true,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-hollyberry',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-hollyberry',
    tags: ['hollyberry', 'virtual pet', 'cookie'],
  },
  {
    id: 'sage-of-truth',
    name: 'Take Care of Your Own Sage of Truth',
    slug: 'take-care-of-your-own-sage-of-truth',
    icon: '🧠',
    description: 'A wise and mysterious variant to look after.',
    rating: 4.5,
    plays: '450K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-sage-of-truth',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-sage-of-truth',
    tags: ['sage of truth', 'mystery', 'virtual pet'],
  },
  {
    id: 'eternal-sugar',
    name: 'Take Care of Your Own Eternal Sugar',
    slug: 'take-care-of-your-own-eternal-sugar',
    icon: '🍬',
    description: 'Sugar-coated care with the Eternal Sugar variant.',
    rating: 4.4,
    plays: '430K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-eternal-sugar',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-eternal-sugar',
    tags: ['eternal sugar', 'sweet', 'virtual pet'],
  },
  {
    id: 'white-lily',
    name: 'Take Care of Your Own White Lily',
    slug: 'take-care-of-your-own-white-lily',
    icon: '🌸',
    description: 'Gentle care for the White Lily variant.',
    rating: 4.5,
    plays: '410K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-white-lily',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-white-lily',
    tags: ['white lily', 'flower', 'virtual pet'],
  },
  {
    id: 'golden-cheese',
    name: 'Take Care of Your Own Golden Cheese Cookie',
    slug: 'take-care-of-your-own-golden-cheese-cookie',
    icon: '🧀',
    description: 'Golden and cheesy variant to play with.',
    rating: 4.6,
    plays: '470K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: true,
    isFeatured: true,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-golden-cheese-cookie',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-golden-cheese-cookie',
    tags: ['golden cheese', 'cookie', 'virtual pet'],
  },
  {
    id: 'dark-choco',
    name: 'Take Care of Your Own Dark Choco',
    slug: 'take-care-of-your-own-dark-choco',
    icon: '🍫',
    description: 'Dark and delicious variant care.',
    rating: 4.5,
    plays: '390K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-dark-choco',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-dark-choco',
    tags: ['dark choco', 'chocolate', 'virtual pet'],
  },
  {
    id: 'butter-roll',
    name: 'Take Care of Your Own Butter Roll',
    slug: 'take-care-of-your-own-butter-roll',
    icon: '🥐',
    description: 'A buttery soft variant to nurture.',
    rating: 4.4,
    plays: '360K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-butter-roll',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-butter-roll',
    tags: ['butter roll', 'bakery', 'virtual pet'],
  },
  // --- Additional variants from reference sitemap ---
  {
    id: 'truthless-recluse',
    name: 'Take Care of Your Own Truthless Recluse',
    slug: 'take-care-of-your-own-truthless-recluse',
    icon: '🕶️',
    description: 'A mysterious recluse-themed Shadow Milk variant.',
    rating: 4.6,
    plays: '410K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: true,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-truthless-recluse',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-truthless-recluse',
    tags: ['truthless recluse', 'variant', 'virtual pet'],
  },
  {
    id: 'fount',
    name: 'Take Care of Your Own Fount',
    slug: 'take-care-of-your-own-fount',
    icon: '⛲',
    description: 'A serene Fount variant with calming vibes.',
    rating: 4.5,
    plays: '380K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-fount',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-fount',
    tags: ['fount', 'variant', 'virtual pet'],
  },
  {
    id: 'beer-bottle',
    name: 'Shadow Milk (With a Beer Bottle)',
    slug: 'take-care-of-your-own-shadow-milk-but-with-a-beer-bottle',
    icon: '🍺',
    description: 'A quirky variant featuring a beer bottle twist.',
    rating: 4.3,
    plays: '340K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: true,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-shadow-milk-but-with-a-beer-bottle',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-shadow-milk-but-with-a-beer-bottle',
    tags: ['beer bottle', 'quirky', 'virtual pet'],
  },
  {
    id: 'silent-salt',
    name: 'Take Care of Your Own Silent Salt',
    slug: 'take-care-of-your-own-silent-salt',
    icon: '🧂',
    description: 'A quiet yet flavorful Silent Salt variant.',
    rating: 4.4,
    plays: '320K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-silent-salt',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-silent-salt',
    tags: ['silent salt', 'variant', 'virtual pet'],
  },
  {
    id: 'two-s-tpot-bfb',
    name: 'Take Care of Your Own Two-S TPOT BFB',
    slug: 'take-care-of-your-own-two-s-tpot-bfb',
    icon: '2️⃣',
    description: 'A crossover-styled variant with unique flair.',
    rating: 4.3,
    plays: '300K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-two-s-tpot-bfb',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-two-s-tpot-bfb',
    tags: ['tpot', 'bfb', 'variant'],
  },
  {
    id: 'book',
    name: 'Take Care of Your Own Book',
    slug: 'take-care-of-your-own-book',
    icon: '📖',
    description: 'A literary-themed Book variant to care for.',
    rating: 4.2,
    plays: '290K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-book',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-book',
    tags: ['book', 'variant', 'virtual pet'],
  },
  {
    id: 'wily',
    name: 'Take Care of Wily',
    slug: 'take-care-of-wily',
    icon: '🌀',
    description: 'A playful Wily variant with a twist.',
    rating: 4.3,
    plays: '310K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-wily',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-wily',
    tags: ['wily', 'variant'],
  },
  {
    id: 'pursuer',
    name: 'Take Care of Your Own Pursuer',
    slug: 'take-care-of-your-own-pursuer',
    icon: '🕵️',
    description: 'A stealthy Pursuer variant.',
    rating: 4.4,
    plays: '330K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-pursuer',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-pursuer',
    tags: ['pursuer', 'variant'],
  },
  {
    id: '1x1x1x1',
    name: 'Take Care of Your 1x1x1x1',
    slug: 'take-care-of-your-1x1x1x1',
    icon: '🔢',
    description: 'A numeric-themed 1x1x1x1 variant.',
    rating: 4.2,
    plays: '280K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-1x1x1x1',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-1x1x1x1',
    tags: ['1x1x1x1', 'variant'],
  },
  {
    id: 'ingame-sprite',
    name: 'Shadow Milk (In-Game Sprite Look)',
    slug: 'take-care-of-your-own-shadow-milk-but-he-looks-like-his-in-game-sprite',
    icon: '🧩',
    description: 'Variant styled like the in-game sprite.',
    rating: 4.5,
    plays: '360K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: true,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-shadow-milk-but-he-looks-like-his-in-game-sprite',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-shadow-milk-but-he-looks-like-his-in-game-sprite',
    tags: ['sprite', 'variant'],
  },
  {
    id: 'shelky',
    name: 'Take Care of Your Own Shelky',
    slug: 'take-care-of-your-own-shelky',
    icon: '🕸️',
    description: 'A mysterious Shelky variant.',
    rating: 4.1,
    plays: '250K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-shelky',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-shelky',
    tags: ['shelky', 'variant'],
  },
  {
    id: 'masenko',
    name: 'Take Care of Your Own Masenko',
    slug: 'take-care-of-your-own-masenko',
    icon: '⚡',
    description: 'Energetic Masenko variant.',
    rating: 4.3,
    plays: '270K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-masenko',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-masenko',
    tags: ['masenko', 'variant'],
  },
  {
    id: 'gamzee-makara',
    name: 'Take Care of Your Own Gamzee Makara',
    slug: 'take-care-of-your-own-gamzee-makara',
    icon: '🎭',
    description: 'A dramatic Gamzee Makara-themed variant.',
    rating: 4.2,
    plays: '260K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-gamzee-makara',
    embedUrl: 'https://takecareofshadowmilk.com/take-care-of-your-own-gamzee-makara',
    tags: ['gamzee', 'variant'],
  },
  {
    id: 'v1-eternal-sugar',
    name: 'V1: Take Care of Your Own Eternal Sugar',
    slug: 'v1-take-care-of-your-own-eternal-sugar',
    icon: '🧁',
    description: 'The V1 edition of Eternal Sugar variant.',
    rating: 4.0,
    plays: '230K',
    category: ['shadow-milk-variants', 'virtual-pet', 'casual-games'],
    isNew: false,
    isTrending: false,
    isFeatured: false,
    externalUrl: 'https://takecareofshadowmilk.com/v1-take-care-of-your-own-eternal-sugar',
    embedUrl: 'https://takecareofshadowmilk.com/v1-take-care-of-your-own-eternal-sugar',
    tags: ['eternal sugar', 'v1', 'variant'],
  },
];

/**
 * Get games by category
 */
export function getGamesByCategory(category: GameCategory): Game[] {
  return GAMES.filter((game) => game.category.includes(category));
}

/**
 * Get featured games
 */
export function getFeaturedGames(): Game[] {
  return GAMES.filter((game) => game.isFeatured);
}

/**
 * Get trending games
 */
export function getTrendingGames(): Game[] {
  return GAMES.filter((game) => game.isTrending);
}

/**
 * Get new games
 */
export function getNewGames(): Game[] {
  return GAMES.filter((game) => game.isNew);
}

/**
 * Get game by ID
 */
export function getGameById(id: string): Game | undefined {
  return GAMES.find((game) => game.id === id);
}

/**
 * Get game by slug
 */
export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find((game) => game.slug === slug);
}

/**
 * Search games by query
 */
export function searchGames(query: string): Game[] {
  const lowerQuery = query.toLowerCase();
  return GAMES.filter(
    (game) =>
      game.name.toLowerCase().includes(lowerQuery) ||
      game.description.toLowerCase().includes(lowerQuery) ||
      game.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
