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

## Design Guide

### Color System
This project uses a custom Claude AI-inspired color palette with warm undertones. All colors are defined as CSS custom properties in `src/app/globals.css`.

#### Primary Colors
- **Background**: `bg-background` - Warm off-white (light) / Deep warm charcoal (dark)
- **Foreground**: `text-foreground` - Deep charcoal (light) / Warm off-white (dark)
- **Primary**: `text-primary` / `bg-primary` - Soft burnt orange with warm undertones
- **Card**: `bg-card` - Subtle warm card background with `border-border`

#### Text Colors
- **Primary text**: `text-foreground` - Main content text
- **Secondary text**: `text-muted-foreground` - Subdued content text
- **Card text**: `text-card-foreground` - Text on card backgrounds

#### Interactive States
- **Hover**: Use `hover:border-primary/30` for subtle primary color highlights
- **Focus**: `ring-ring` provides consistent focus states
- **Active**: `group-hover:text-primary` for grouped hover effects

### Typography
- **Headings**: Use gradient text for main titles: `bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent`
- **Large headings**: `text-5xl font-bold` for hero sections
- **Section headings**: `text-3xl font-bold` for content sections
- **Card titles**: `text-2xl font-semibold` for post titles

### Layout Patterns
- **Full-height pages**: `min-h-screen bg-background`
- **Container**: `container mx-auto px-6 py-16` for consistent spacing
- **Content width**: `max-w-3xl mx-auto` for readable content
- **Hero sections**: `max-w-4xl mx-auto text-center mb-16`

### Component Patterns
- **Cards**: Use `bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border`
- **Hover effects**: Combine transform and color changes: `group-hover:translate-x-1 transition-transform`
- **Animations**: Use `transition-all duration-300` for smooth interactions

### Best Practices
1. **Consistency**: Always use the CSS custom properties instead of hardcoded colors
2. **Accessibility**: Maintain proper contrast ratios in both light and dark modes
3. **Responsive**: Use responsive classes like `sm:text-left` and `sm:flex-row`
4. **Spacing**: Follow consistent spacing patterns with Tailwind's spacing scale
5. **Hover states**: Always provide visual feedback for interactive elements