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

# Start development server
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

Key files:
- `src/hooks/useGameState.ts` - Main game state logic with auto-decreasing stats
- `src/data/gameData.ts` - Game items, rooms, and initial stats configuration
- `src/types/game.ts` - TypeScript interfaces for game entities

### Room System
Four main rooms with themed items:
- Bedroom (furniture) - blue/purple gradient
- Kitchen (food) - yellow/orange gradient  
- Bathroom (hygiene tools) - cyan/blue gradient
- Playroom (toys) - green/emerald gradient

Items have effects on different stats (hunger, energy, health, hygiene).

### Internationalization (i18n)
Multi-language support with client-side locale detection:
- 6 supported languages: English, Chinese, Portuguese, Spanish, French, German
- Browser language auto-detection
- Stored in `src/i18n/` with separate locale files
- Uses React Context for language state management

### SEO & Performance
Comprehensive SEO optimization in layout.tsx:
- Open Graph and Twitter Card meta tags
- Multi-language alternates
- Structured metadata for search engines
- Image optimization with WebP/AVIF formats
- Security headers and cache control in next.config.js

## Key Components Structure

- `GameInterface.tsx` - Main game UI component
- `GameStats.tsx` - Displays pet's current stats (energy, health, etc.)
- `RoomSelector.tsx` - Room navigation interface
- `Inventory.tsx` - Item management system
- `LanguageSwitcher.tsx` - Multi-language toggle
- `SEOHead.tsx` - Dynamic SEO metadata component

## Game Data Configuration

To add new items, modify `src/data/gameData.ts`:
- Items require: id, name, type, icon, effect, description
- Types: 'food', 'toy', 'tool', 'furniture'
- Effects modify pet stats: { hunger: 20, energy: 5 }

To add rooms:
- Rooms require: id, name, description, background (Tailwind classes), items array
- Items are filtered by type for each room

## Technical Notes

- Uses standalone build output for deployment
- Implements iframe game support with fullscreen capability
- Real-time stat degradation happens every second when game is active
- Stats have floor values of 0 and affect each other (low hunger/energy reduces health)
- Tailwind CSS with gradient backgrounds for room themes
- TypeScript strict mode enabled