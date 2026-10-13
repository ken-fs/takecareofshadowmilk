/*
  English-first on purpose: the queries this page answers are English, and the
  rest of the homepage localises around it. Hardcoding keeps one source of
  truth between the visible answers and the FAQPage schema below.
*/
const FAQ = [
  {
    q: 'What is Take Care of Shadow Milk?',
    a: 'A free virtual-pet game built on Scratch by GPE_sb3. Its full title on Scratch is "TAKE CARE OF YOUR OWN SHADOW MILK!" — you look after Shadow Milk Cookie from Cookie Run: Kingdom across four rooms, feeding, bathing and playing with him (or not).',
  },
  {
    q: 'Is Take Care of Shadow Milk free to play?',
    a: 'Yes. It runs in your browser with no download and no account — press the green flag and you are in.',
  },
  {
    q: 'How do you win the game?',
    a: "You don't. There are no missions, no endings and no game over — just four meters (hunger, hygiene, energy, health) that drain at different speeds. Whether you keep him thriving or let the chaos happen is entirely your call.",
  },
  {
    q: 'Who made Take Care of Shadow Milk?',
    a: 'The Scratch creator GPE_sb3, first published in August 2025 and last updated in May 2026. It is a fan project — this site and the game are not affiliated with Devsisters, the makers of Cookie Run: Kingdom.',
  },
  {
    q: 'Is this the same game as "take care of your own shadow milk"?',
    a: 'Yes — same Scratch project, shorter name. Searchers drop the middle words, the game does not care.',
  },
  {
    q: 'Why is Shadow Milk Cookie everywhere?',
    a: 'He is the Beast of Deceit from Cookie Run: Kingdom — a villain written so charmingly that the fandom adopted him. The Scratch game turned that energy into 890,000+ plays and a wave of TikTok clips.',
  },
];

export function HomeFaq() {
  return (
    <section className="mt-16" aria-labelledby="home-faq">
      <p className="eyebrow">Quick answers</p>
      <h2 id="home-faq" className="display-lg mt-4">
        Take Care of Shadow Milk, answered
      </h2>
      <div className="mt-8 space-y-6">
        {FAQ.map((f) => (
          <div key={f.q}>
            <h3 className="text-base font-semibold text-bone">{f.q}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-bone/60">{f.a}</p>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
