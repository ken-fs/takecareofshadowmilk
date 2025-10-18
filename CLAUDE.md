# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Take Care of Shadow Milk" - a Next.js 14 virtual pet game website that simulates caring for the Shadow Milk Cookie character from Cookie Run: Kingdom. The game features room-based gameplay, real-time stat management, inventory system, and multi-language support.

**Target Audience**: Primarily targets Western (European/American) users with English as the main language, though multi-language support is available.

## Development Commands

**Package Manager**: This project can use either npm or pnpm. If using pnpm, delete package-lock.json first.

```bash
# Install dependencies
pnpm install  # or npm install

# Start development server (http://localhost:3000)
pnpm dev      # or npm run dev

# Build for production
pnpm build    # or npm run build

# Start production server
pnpm start    # or npm start

# Lint code
pnpm lint     # or npm run lint

# Type checking
pnpm type-check # or npm run type-check
```

### Common Installation Issues

If encountering network timeout issues:

1. **Switch registry sources**:
   ```bash
   # For pnpm
   pnpm config set registry https://registry.npmjs.org/
   # or
   pnpm config set registry https://registry.npmmirror.com/

   # For npm
   npm config set registry https://registry.npmjs.org/
   ```

2. **Clear cache and retry**:
   ```bash
   rm -rf node_modules
   rm -f package-lock.json pnpm-lock.yaml
   pnpm install  # or npm install
   ```

3. **Removed critters dependency**: The `critters` package was removed from dependencies as it was causing network issues and is not essential for this project's functionality.

## Architecture & Core Systems

### Game State Management
The game uses a reducer pattern with `useGameState` hook for centralized state management:
- Real-time stat degradation (hunger, energy, hygiene, health decrease over time)
- Room-based gameplay with different item types per room
- Inventory system with item effects on pet stats
- Game timer and active/inactive states

**State degradation rates** (when game is active):
- Hunger: -0.5% per second
- Energy: -0.3% per second
- Hygiene: -0.2% per second
- Health: -0.1% per second (only when hunger < 20% or energy < 20%)

**State Actions**:
- `CHANGE_ROOM`: Switch active room
- `USE_ITEM`: Remove item from inventory and apply effects
- `ADD_ITEM`: Add item to inventory
- `REMOVE_ITEM`: Delete item from inventory
- `UPDATE_STATS`: Modify pet stats directly
- `UPDATE_TIME`: Increment game timer
- `TOGGLE_GAME`: Pause/resume gameplay

Key files:
- [src/hooks/useGameState.ts](src/hooks/useGameState.ts) - Main game state logic with auto-decreasing stats
- [src/data/gameData.ts](src/data/gameData.ts) - Game items, rooms, and initial stats configuration
- [src/types/game.ts](src/types/game.ts) - TypeScript interfaces for game entities

### Room System
Four main rooms with themed items:
- **Bedroom** (furniture) - blue/purple gradient - Contains: bed, chair
- **Kitchen** (food) - yellow/orange gradient - Contains: cookie, milk, cake
- **Bathroom** (hygiene tools) - cyan/blue gradient - Contains: bath, medicine
- **Playroom** (toys) - green/emerald gradient - Contains: ball, teddy

Items have effects on different stats (hunger, energy, health, hygiene).

### Internationalization (i18n)
Multi-language support with client-side locale detection:
- 6 supported languages: English (en-US), Chinese (zh-CN), Portuguese (pt-BR), Spanish (es-ES), French (fr-FR), German (de-DE)
- Browser language auto-detection via `navigator.language`
- Stored in [src/i18n/](src/i18n/) with separate locale files
- Uses React Context for language state management via `LanguageContext`
- Persistence via localStorage
- Translation function: `t('key.path')` with dot notation

**Adding new translations**:
1. Add translation keys to all locale files in `src/i18n/locales/`
2. Use `t('your.new.key')` in components after importing `useLanguage()` hook
3. Missing keys return the original key string as fallback

### SEO & Performance
Comprehensive SEO optimization in [src/app/layout.tsx](src/app/layout.tsx):
- Open Graph and Twitter Card meta tags
- Multi-language alternates (`<link rel="alternate" hreflang="..."`)
- Structured metadata (JSON-LD VideoGame schema) for search engines
- Image optimization with WebP/AVIF formats in [next.config.js](next.config.js)
- Security headers and cache control headers (3600s public, 86400s CDN)
- Verification codes for Google/Yandex/Yahoo

## Directory Structure

```
src/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── globals.css              # Global styles with Tailwind + custom animations
│   ├── page.tsx                 # Home/landing page
│   ├── not-found.tsx            # 404 error page
│   └── game/
│       └── page.tsx             # Game page (main gameplay interface)
├── components/                   # Reusable React components
│   ├── GameInterface.tsx        # Main game room display with character & items
│   ├── GameStats.tsx            # Stats display (energy, health, hunger, hygiene)
│   ├── RoomSelector.tsx         # Room navigation (4 buttons)
│   ├── Inventory.tsx            # Item management and usage
│   ├── LanguageSwitcher.tsx     # Multi-language UI selector
│   ├── GameHero.tsx             # Landing page hero section
│   ├── GameSummary.tsx          # Game description
│   ├── GameFeatures.tsx         # Feature highlights
│   ├── FeaturedGames.tsx        # Related games showcase
│   └── SEOHead.tsx              # Dynamic SEO metadata component
├── hooks/                        # Custom React Hooks
│   └── useGameState.ts          # Centralized game state with reducer pattern
├── contexts/                     # React Context API
│   └── LanguageContext.tsx      # Multi-language state & translation function
├── types/                        # TypeScript type definitions
│   └── game.ts                  # Game interfaces (GameState, GameItem, Room, etc.)
├── data/                         # Game configuration data
│   └── gameData.ts              # Items, rooms, initial stats (GAME_ITEMS, ROOMS)
├── i18n/                         # Internationalization
│   ├── config.ts                # i18n config & locale detection
│   └── locales/                 # Translation files (6 languages)
└── lib/                          # Utility functions
    └── utils.ts                 # cn(), formatNumber(), debounce(), etc.
```

## Key Components Structure

- [GameInterface.tsx](src/components/GameInterface.tsx) - Main game UI component with character display and room items
- [GameStats.tsx](src/components/GameStats.tsx) - Displays pet's current stats with color-coded progress bars
- [RoomSelector.tsx](src/components/RoomSelector.tsx) - Room navigation interface (4 buttons)
- [Inventory.tsx](src/components/Inventory.tsx) - Item management system with effect descriptions
- [LanguageSwitcher.tsx](src/components/LanguageSwitcher.tsx) - Multi-language dropdown selector
- [SEOHead.tsx](src/components/SEOHead.tsx) - Dynamic SEO metadata component

## Game Data Configuration

### Adding New Items
Modify [src/data/gameData.ts](src/data/gameData.ts) `GAME_ITEMS` array:
```typescript
{
  id: 'new-item',
  name: 'New Item',
  type: 'food', // 'food' | 'toy' | 'tool' | 'furniture'
  icon: '🍕',
  effect: { hunger: 20, energy: 5 }, // All optional: hunger, energy, health, hygiene
  description: 'Description of the item'
}
```

**Item Types**:
- `food` - Appears in Kitchen
- `toy` - Appears in Playroom
- `tool` - Appears in Bathroom
- `furniture` - Appears in Bedroom

### Adding New Rooms
Modify [src/data/gameData.ts](src/data/gameData.ts) `ROOMS` array:
```typescript
{
  id: 'new-room',
  name: 'New Room',
  description: 'Room description',
  background: 'bg-gradient-to-br from-purple-500 to-blue-500', // Tailwind gradient classes
  items: [] // Will be auto-populated from GAME_ITEMS by type
}
```

### Existing Items Reference
| Item | Type | Icon | Effects |
|------|------|------|---------|
| Cookie | food | 🍪 | +20 hunger, +5 energy |
| Milk | food | 🥛 | +15 hunger, +10 health |
| Cake | food | 🎂 | +30 hunger, +15 energy, +5 health |
| Ball | toy | ⚽ | +10 energy |
| Teddy | toy | 🧸 | +5 energy, +5 health |
| Bath | tool | 🛁 | +30 hygiene, -5 energy |
| Medicine | tool | 💊 | +25 health, -10 energy |
| Bed | furniture | 🛏️ | +40 energy, +10 health |
| Chair | furniture | 🪑 | +5 energy |

## Styling System

**Framework**: Tailwind CSS with custom components layer

**Custom CSS classes** (defined in [src/app/globals.css](src/app/globals.css)):
- `.btn-primary` - Purple→Blue gradient buttons
- `.btn-secondary` - Gray gradient buttons
- `.card` - Glass-morphism card with semi-transparent bg
- `.game-container` - Max-width wrapper (1200px)
- `.hero-gradient` - Purple/blue/indigo blend
- `.glass-effect` - Frosted glass backdrop effect
- `.text-gradient` - Purple→Blue text gradient
- `.accent-border` - Purple left border

**Custom animations**:
- `.animate-fade-in` - Fade with 20px slide up (0.5s)
- `.animate-fade-in-delay` - Delayed fade (0.7s)
- `.animate-fade-in-scale` - Scale transition (0.6s)
- `.animate-float` - Floating animation (3s infinite)
- `.animate-pulse-slow` - Slow pulse (3s)
- `.animate-bounce-slow` - Slow bounce (2s)

**Color scheme**:
- Primary: Purple (600-700)
- Secondary: Blue (600-700)
- Background: Gray (900) with purple/indigo tones
- Accent: Purple (400-500), Blue (400-500)

## Component Data Flow

```
GamePage (uses useGameState hook)
├── GameStats (displays stats from state)
├── RoomSelector (dispatches CHANGE_ROOM action)
├── GameInterface (shows current room items)
└── Inventory (dispatches USE_ITEM action)
```

All components receive state and dispatch functions as props from the parent `GamePage` component.

## Technical Notes

### Build Configuration
- **Output**: `standalone` mode (self-contained server for Docker/K8s)
- **Compiler**: SWC for fast minification
- **Images**: WebP and AVIF support with device sizes 640-3840px
- **Security headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Redirects**: `/home` → `/`, `/play` → `/game`

### TypeScript Configuration
- **Strict mode**: Enabled
- **Path aliases**: `@/*` → `./src/*`
- **Target**: ES5 with DOM/ES6 libs
- **JSX**: preserve mode (Next.js handles)

### Real-time Game Mechanics
- Stats degrade every 1 second when `isGameActive: true`
- All stats have floor of 0 and ceiling of 100
- Low hunger/energy (<20%) causes health to decrease faster
- Game timer increments every second
- `useEffect` cleanup prevents memory leaks on unmount

### Character Mood System
The character emoji in `GameInterface` changes based on interactions:
- Happy (😊) - When using food/toys
- Neutral (😐) - When using tools/furniture
- Sad (😢) - Default state

### SEO Features
- Structured data (JSON-LD) with VideoGame schema
- og:image for social sharing (1200x630)
- Multi-language alternates for 6 locales
- Twitter Card support (summary_large_image)
- Canonical URLs
- Meta keywords and description

## Common Development Tasks

### Modifying Stat Degradation Rates
Edit the `useEffect` interval in [src/hooks/useGameState.ts](src/hooks/useGameState.ts):
```typescript
const newStats = {
  hunger: Math.max(0, currentStats.hunger - 0.5), // Change 0.5 to new rate
  energy: Math.max(0, currentStats.energy - 0.3), // Change 0.3 to new rate
  // ...
}
```

### Adding New Stat Types
1. Update `ShadowMilkStats` interface in [src/types/game.ts](src/types/game.ts)
2. Add stat to `INITIAL_STATS` in [src/data/gameData.ts](src/data/gameData.ts)
3. Update stat degradation logic in [src/hooks/useGameState.ts](src/hooks/useGameState.ts)
4. Add display in [src/components/GameStats.tsx](src/components/GameStats.tsx)

### Changing Game Timer Speed
The game timer updates every 1000ms (1 second). To change:
- Modify the interval duration in [src/hooks/useGameState.ts](src/hooks/useGameState.ts) `setInterval` call

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

This project uses `standalone` build output suitable for:
- Docker containers
- Kubernetes
- Serverless platforms (Vercel, Netlify)
- Traditional Node.js hosting

Build artifacts are in `.next/standalone/` after running `pnpm build`.
