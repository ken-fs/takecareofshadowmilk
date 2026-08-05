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
  /**
   * What the remixer themselves said about the project, paraphrased from the
   * instructions/description fields on api.scratch.mit.edu. This is the part of
   * each page that no other site has, because it comes from the actual source
   * rather than from a scrape of a scrape.
   *
   * Paraphrase, do not quote at length: most of these authors are children
   * writing informally, and reproducing their text verbatim on an ad-supported
   * page is neither kind nor useful. Never paraphrase in a way that invents a
   * claim they did not make.
   */
  creatorNote?: string;
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
    body: 'Scratch lets anyone republish a modified copy of a project, and this is that: the same four-meter structure as the original with the pacing and presentation changed. If you have played the base game, the controls will read immediately — what differs is the feel rather than the rules. It is one of 871 remixes the original has accumulated, and one of the few in this collection that kept the Shadow Milk character rather than swapping in someone else.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author keeps the original description almost intact, including its promise of more ways to "torture and nurture" the character, and invites players to suggest features in the comments.',
  },
  'take-care-of-your-own-pure-vanilla': {
    tagline: 'The same care loop, rebuilt around Pure Vanilla Cookie.',
    body: 'Pure Vanilla is the tonal opposite of Shadow Milk — a healer rather than a trickster — and swapping him into the care loop changes what the game feels like it is asking of you. Looking after someone gentle reads as straightforwardly kind; looking after the Beast of Deceit does not. The mechanics are near enough identical, which is precisely what makes the contrast legible: the same four meters, the same four rooms, and a completely different read on what you are doing.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The remixer is candid that they cannot code, and asks for suggestions on that basis — the changes here are art and character, not mechanics.',
  },
  'take-care-of-your-own-burning-spice': {
    tagline: 'Burning Spice takes the care loop somewhere hotter.',
    body: 'Burning Spice Cookie is one of the Beasts, like Shadow Milk, so this variant keeps the slight wrongness of caring for something that does not need your help. The art leans into reds and fire motifs where the original works in blues and blacks. It is among the most-played remixes in this collection, and the redraw is more thorough than most: the sprite work is credited jointly to the remixer and the original author rather than lifted wholesale.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author credits the code to the original creator and the art to themselves, notes that some assets come from Cookie Run: Kingdom directly, and admits the character\'s hair is hard to make out at this size.',
  },
  'take-care-of-your-own-hollyberry': {
    tagline: 'A warmer, fruitier take on the same four meters.',
    body: 'Hollyberry Cookie is an Ancient Hero, and this variant plays the care loop straight — no undercurrent, no joke about the character resenting you. Worth trying right after the Shadow Milk original if you want to feel how much the character choice, rather than the mechanics, drives the mood. This is the single most-played remix in the collection by a wide margin, and it has itself been remixed more than a dozen times.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The remixer is affectionate about swapping out the original character for one they prefer, credits all the coding to the original author, and notes that an early bug which made the character go bald has since been fixed.',
  },
  'take-care-of-your-own-sage-of-truth': {
    tagline: 'A quieter variant built around Sage of Truth.',
    body: 'This one runs the familiar meters with a more subdued presentation than the brighter Cookie Run variants. The theming sits closer to the original Shadow Milk build than most of the remixes in this collection — the premise is Shadow Milk without the malice, which changes the tone more than it changes the play. It is one of the more popular variants on Scratch, with tens of thousands of plays.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author has used the project page to say that their game was reposted on another games website without permission, that they are a minor, and that they found the situation concerning. This page embeds their project from Scratch so that the plays and the credit go to them.',
  },
  'take-care-of-your-own-eternal-sugar': {
    tagline: 'Eternal Sugar, in the confectionery register.',
    body: 'Sweets-themed art over the standard care structure. A second Eternal Sugar variant is listed separately in the collection, published two days after this one by a different author working from the same original — the two arrived independently rather than as one person\'s draft and final. This is the more played of the pair, and has itself been remixed several times.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author credits the original creator, mentions that Eternal Sugar is their favourite Ancient, and warns that the character occasionally goes bald.',
  },
  'take-care-of-your-own-white-lily': {
    tagline: 'White Lily gets the gentlest treatment of the set.',
    body: 'White Lily Cookie carries a lot of narrative weight in Cookie Run lore, and this variant handles her softly — pale palette, unhurried presentation. The four meters behave as they do elsewhere, which means the game will still let you neglect her; nothing in the interface stops you, and nothing tells you that you should not.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The remixer adapted the original\'s description for a female character and left its invitation to suggest new features in place.',
  },
  'take-care-of-your-own-golden-cheese-cookie': {
    tagline: 'Golden Cheese, in gold.',
    body: 'One of the more visually distinct variants: heavy gold and amber where most of the collection stays in cooler colours. Mechanically it is the same care loop the rest of these remixes share. The author has revised it at least three times since publishing, which is unusual — most remixes in this set were posted once and left alone.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author\'s update log records fixing the plushie positions and changing the character\'s eye colour, with further changes flagged as possible but not promised.',
  },
  'take-care-of-your-own-dark-choco': {
    tagline: 'Dark Choco Cookie takes a turn in the care loop.',
    body: 'Dark Choco is a fallen-knight character, which puts this variant tonally nearer the Shadow Milk original than the sweeter entries in the collection. Standard four-meter structure underneath. Unlike most of the collection, this one is a remix of a remix rather than a direct descendant of the original — the care loop has passed through another author\'s hands before reaching it.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author\'s note is one line: they made it for their son.',
  },
  'take-care-of-your-own-butter-roll': {
    tagline: 'A soft, bakery-themed variant.',
    body: 'Butter Roll is a lower-stakes choice than the Beasts, and the variant plays accordingly. A reasonable first stop if the Shadow Milk original felt more unsettling than you wanted. One of the details worth noticing: one of the plush toys in the room is not a Cookie Run character at all but the remixer\'s friend\'s own original character.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author credits the original code, explains they built it for a friend who wanted a Butter Roll version, and says they left the sounds alone because the code is more advanced than they are used to and they were afraid of breaking it.',
  },
  'take-care-of-your-own-truthless-recluse': {
    tagline: 'A withdrawn, secretive spin on the loop.',
    body: 'Themed around isolation rather than mischief, which is a genuinely different note from the rest of the Shadow Milk variants. The care mechanics are the collection standard. Like the Dark Choco variant, this one descends from an intermediate remix rather than directly from the original, and it has become one of the more played entries in the set.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author sums the game up in one line — abuse it or actually care for it — thanks the original creator for the sprites and code, and is self-deprecating about their own drawing.',
  },
  'take-care-of-your-own-fount': {
    tagline: 'The calmest variant in the collection.',
    body: 'Water and fountain motifs, slower presentation, less visual noise than the Beast-themed builds. A good palate cleanser between the louder remixes. It is one of the smallest entries here by play count, which is worth knowing before you go in expecting the polish of the Hollyberry or Burning Spice variants.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The remixer left the original description in place, including its list of planned updates.',
  },
  'take-care-of-your-own-shadow-milk-but-with-a-beer-bottle': {
    tagline: 'Exactly what the title says.',
    body: 'A one-joke remix, and the joke is in the title — Shadow Milk, holding a beer bottle, otherwise unchanged. It is a fair example of how Scratch remix culture actually works: someone changed one asset and republished it, and enough people found it funny that it stuck. Nearly ten thousand people have played it, which is more than most of the carefully redrawn variants in this collection managed.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author says the remix exists because commenters on the original kept asking for it, and a later update swapped the slipper item for Pure Vanilla\'s staff.',
  },
  'take-care-of-your-own-silent-salt': {
    tagline: 'Silent Salt, played quietly.',
    body: 'Another Beast character, handled with restraint rather than spectacle. Sits close to the original in tone. The four-meter loop is intact, so the usual warning applies: hunger moves fastest, and the game is equally content to let you look after him or let him deteriorate.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author frames the two ways to play bluntly — look after him, or reduce him to a vegetable — and is straightforwardly fond of the character.',
  },
  'take-care-of-your-own-two-s-tpot-bfb': {
    tagline: 'A Battle for BFDI crossover.',
    body: 'Two from TPOT dropped into the Cookie Run care loop — a crossover that only makes sense if you know both source objects, which is most of its appeal. Scratch remix culture routinely collides fandoms this way. Notable for how well it landed with the people who did get the reference: it has a very high ratio of loves to plays compared with the rest of the collection.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author is proprietary about the character — this is their baby Two, and you had better take care of it — and credits the original game by name.',
  },
  'take-care-of-your-own-book': {
    tagline: 'The pet is a book.',
    body: 'The joke here is the category error: a book has no needs, and the game asks you to attend to them anyway. Short, and more interesting as a comment on the genre than as a game. It is also among the least-played entries in the collection, so treat it as a curiosity rather than a headline.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author\'s note is pure enthusiasm for the character, in capitals, at length.',
  },
  'take-care-of-wily': {
    tagline: 'A Wily-themed variant with a twist.',
    body: 'One of the smaller remixes in the collection by presentation, though not by audience — close to ten thousand people have played it. It keeps the four-meter loop with its own character art. Quick to try if you are working through the whole set, and one of the few variants whose author swapped in a different background track rather than leaving the original\'s music alone.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author asks you, briefly and politely, to take care of Wily for them, and credits the replacement background music to a freely licensed harp loop from OpenGameArt.',
  },
  'take-care-of-your-own-pursuer': {
    tagline: 'Caring for something that is hunting you.',
    body: 'The premise inverts the genre: the thing you are looking after is a pursuer. That reframing is doing more work here than any mechanical change. It is the newest entry in the collection by some margin — published months after the wave of remixes that followed the original — and the smallest by play count.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author credits the original game, is clear that the Pursuer character belongs to someone else rather than to them, and openly flags that the build has a bug you will probably run into.',
  },
  'take-care-of-your-1x1x1x1': {
    tagline: 'A Roblox urban legend as a virtual pet.',
    body: '1x1x1x1 is a long-running piece of Roblox folklore, and putting it in a care loop is the same move as the Book variant — take something that should not have needs and give it needs. Slight, and knowingly so: the author describes it as just a remix and points you at the original.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author credits the original by username, and clarifies that the orange object in the room is meant to be dry lime.',
  },
  'take-care-of-your-own-shadow-milk-but-he-looks-like-his-in-game-sprite': {
    tagline: 'Shadow Milk, redrawn to match Cookie Run: Kingdom.',
    body: 'The original uses its creator\'s own interpretation of the character. This remix replaces that art with something closer to the official in-game sprite, which makes it the variant to play if the hand-drawn look was what put you off. The redraw is honest about being imperfect, and one prop — a hand borrowed from Pure Vanilla — is left in place unapologetically.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author credits the original, says they wanted the character to look more like his in-game sprite, notes they do not know how to code so the project is unlikely to be updated, and adds that they would take it down if the original creator asked.',
  },
  'take-care-of-your-own-shelky': {
    tagline: 'A small, obscure entry in the set.',
    body: 'One of the least-known remixes here, running the standard care structure with its own character. Included for completeness of the variant collection. Its author lost access to the account for a while and came back to find people still playing it, which is a fairly typical lifecycle for a Scratch remix that finds its small audience after the fact.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author offers the usual two options — torture or nourish — was visibly surprised to find the project still picking up players after they had forgotten about it, and mentions elsewhere that they got their account back.',
  },
  'take-care-of-your-own-gamzee-makara': {
    tagline: 'Homestuck meets the Cookie Run care loop.',
    body: 'Gamzee is a Homestuck troll, and pairing him with Shadow Milk is less arbitrary than most crossovers in this set — both are jester-coded characters with a menace under the greasepaint. The care loop is unchanged. This is one of the smallest entries in the collection by audience, and reads as something made for the author and a handful of people who share the reference.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author credits the original creator for all the coding, calls it the best game on Scratch, and is delighted that Gamzee fans now have their own version.',
  },
  'v1-take-care-of-your-own-eternal-sugar': {
    tagline: 'A second, independent Eternal Sugar variant.',
    body: 'Listed alongside the other Eternal Sugar entry rather than replacing it. Despite the V1 label these are two different authors\' takes on the same idea, published two days apart in the same burst of remixing — not one person\'s draft and revision. Comparing them is a small window into how several people independently reach for the same character within a week of an original going viral.',
    tips: CARE_LOOP_TIPS,
    creatorNote:
      'The author thanks the original creator for the Eternal Sugar sprite and keeps the original\'s framing otherwise intact.',
  },
};

export function getGameDetail(slug: string): GameDetail | undefined {
  return GAME_DETAILS[slug];
}
