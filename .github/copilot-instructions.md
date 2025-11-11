# AIDC Website - AI Coding Guidelines

## Project Overview
This is a bilingual (English/Vietnamese) corporate website for AIDC (AI Development Center) built with React, TypeScript, and Vite. The site showcases AI technology services, company information, and career opportunities.

## Architecture & Structure

### Feature-Based Organization
- **Features** are organized in `src/features/` with each feature containing:
  - Main component (e.g., `Home.tsx`)
  - Sub-components in `components/` folder
  - Feature-specific styles if needed
- **UI Components** live in `src/components/ui/` (shadcn/ui based)
- **Layout Components** in `src/components/layout/` (Header, Footer)
- **Shared Utilities** in `src/lib/`

### Routing & Navigation
- Uses `HashRouter` for client-side routing
- Routes defined in `App.tsx` with automatic scroll-to-top behavior
- Navigation handled through React Router's `useNavigate` hook

## Technology Stack & Patterns

### Core Technologies
- **React 18** with TypeScript
- **Vite** for build tooling (SWC plugin for fast compilation)
- **React Router DOM** for routing
- **TailwindCSS** for styling with custom design tokens

### UI Framework (shadcn/ui + Radix UI)
- All UI components use `cva` (class-variance-authority) for variants
- Components follow Radix UI patterns with `asChild` prop support
- Custom `cn` utility function for className merging (`clsx` + `twMerge`)
- Example: `src/components/ui/button.tsx`

### Internationalization (i18n)
- Custom i18n system using React Context (`I18nContext`)
- Translation keys stored in `App.tsx` with `en`/`vn` objects
- Use `useI18n()` hook to access `t()` function
- Always provide both English and Vietnamese translations

### Styling Conventions
- **Primary Brand Color**: `#53bedd` (used throughout design)
- CSS variables defined in `src/styles/globals.css` for theming
- Dark mode support with `.dark` class variants
- Custom animations using `motion/react` (framer-motion)
- Image imports: `new URL('@/assets/path', import.meta.url).href`

### Component Patterns
- Feature components compose smaller components from `components/`
- Use `motion` components for animations with staggered delays
- Smooth scrolling: `element.scrollIntoView({ behavior: 'smooth' })`
- Responsive design with TailwindCSS breakpoints

## Development Workflow

### Build Commands
```bash
npm run dev    # Start development server (port 3000)
npm run build  # Production build to dist/
```

### File Organization Rules
- **Assets**: Images in `src/assets/images/`, icons in `src/assets/icons/`
- **Styles**: Global styles in `src/styles/`, component-specific in feature folders
- **Components**: One component per file, named after the component
- **Imports**: Use `@/` alias for `src/` directory (configured in `vite.config.ts`)

### Code Quality Standards
- TypeScript strict mode enabled
- ESLint/Prettier configuration (if present)
- Component props fully typed with interfaces
- Vietnamese comments for internal logic, English for public APIs

## Common Patterns & Examples

### Creating New Features
1. Create folder in `src/features/featureName/`
2. Add main component `FeatureName.tsx`
3. Create `components/` subfolder for sub-components
4. Add route in `App.tsx` if needed

### Adding UI Components
- Extend shadcn/ui patterns in `src/components/ui/`
- Use `cva` for component variants
- Include proper TypeScript interfaces
- Export both component and variants

### Internationalization Usage
```tsx
const { t } = useI18n();
// Use: {t('hero_title')} in JSX
// Always add both 'en' and 'vn' translations in App.tsx
```

### Animation Implementation
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Content
</motion.div>
```

### Image Handling
```tsx
const imageUrl = new URL('@/assets/images/image.jpg', import.meta.url).href;
<img src={imageUrl} alt="Description" />
```

## Design System Compliance

### Color Palette
- Primary: `#53bedd` (brand blue)
- Background: Dark blue `#0a2342` gradients
- Text: Standard contrast ratios maintained

### Typography
- Font sizes defined in CSS variables
- Responsive text scaling
- Vietnamese language support

### Component Variants
- Buttons: default, outline, secondary, ghost, link
- Consistent sizing: sm, default, lg, icon
- Focus states with ring styling

## Performance Considerations
- Vite's SWC compilation for fast builds
- Tree-shaking enabled
- Image optimization through Vite
- Lazy loading for routes if needed

## Deployment Notes
- Built to `dist/` directory
- Static hosting compatible (HashRouter)
- No server-side rendering
- Environment variables through Vite (if needed)