# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for fast HMR)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js 15 application with the App Router, built with TypeScript and Tailwind CSS.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (configured with "new-york" style)
- **Content**: MDX support for markdown pages
- **Icons**: Lucide React

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/ui/` - Reusable UI components (shadcn/ui)
- `src/components/feature/` - Feature-specific components
- `src/lib/` - Utility functions and shared logic
- `mdx-components.tsx` - Global MDX component customizations

### Key Configurations
- **shadcn/ui**: Configured with path aliases (`@/components`, `@/lib/utils`)
- **MDX**: Enabled for `.md` and `.mdx` files in pages
- **ESLint**: Uses Next.js recommended config with TypeScript support
- **CSS Variables**: Enabled for Tailwind theming

### Development Notes
- Uses `cn()` utility from `@/lib/utils` for conditional className merging
- Component variants use `class-variance-authority` (cva)
- MDX pages can be created in `src/app/posts/` directory
- Icons from Lucide React should be preferred for consistency