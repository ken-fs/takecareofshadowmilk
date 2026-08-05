import { ImageResponse } from 'next/og';
import { SITE_NAME } from './seo';

/*
  Shared renderer for every og:image on the site.

  Why this is generated rather than a static file: there was no OG image at all,
  so every share of every page rendered as a bare text link, and `twitter:card`
  was already declaring summary_large_image with no large image to show. There is
  also no artwork in public/ to point at, and the game's own sprites belong to
  their creators — drawing our own card from type and the site palette avoids
  republishing someone else's art as our social thumbnail.

  Generated at build time, not per request: every route that uses this exports
  its params statically, so these become files in the build output.
*/

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

/* Sampled from tailwind.config.js — keep in sync with the site palette. */
const INK_DEEP = '#060a18';
const INK = '#0b1026';
const ICE = '#8fe9ff';
const BONE = '#f4f1e4';
const BLUSH = '#ff6e9c';

export function renderOgImage({
  title,
  eyebrow,
  footnote,
}: {
  title: string;
  /** Small label above the title — section or category name. */
  eyebrow?: string;
  /** Small label bottom-right. Defaults to the bare domain. */
  footnote?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: `linear-gradient(135deg, ${INK_DEEP} 0%, ${INK} 55%, #141b3a 100%)`,
        }}
      >
        {/* Top row: the same rotated diamond the header uses as a mark. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 28,
              height: 28,
              background: ICE,
              transform: 'rotate(45deg)',
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: BONE,
              opacity: 0.65,
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {eyebrow ? (
            <div
              style={{
                fontSize: 30,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: ICE,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          {/*
            Long game names are common here (one is 70 characters), so the size
            steps down rather than overflowing the card.
          */}
          <div
            style={{
              fontSize: title.length > 46 ? 62 : 82,
              fontWeight: 700,
              lineHeight: 1.1,
              color: BONE,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                background: BLUSH,
              }}
            />
            <div style={{ fontSize: 28, color: BONE, opacity: 0.75 }}>
              Free in your browser — no download
            </div>
          </div>
          <div style={{ fontSize: 26, color: BONE, opacity: 0.5 }}>
            {footnote ?? 'takecareofshadowmilk.site'}
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
