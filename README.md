# 68a674ecaebf05d1f9c0b1d6

This Next.js website was generated using AI-powered template selection and enhancement.

## Generation Method

- **Template System**: Pre-built templates from database
- **AI Enhancement**: Content customized by AI with page-specific context
- **Structure**: Clean layout-based architecture
- **Unique Components**: Each page gets unique component instances (no deduplication)

## Pages

- **Homepage** (/homepage): 3 components
- **Services** (/services): 3 components
- **CaseStudies** (/case-studies): 2 components
- **About** (/about): 3 components
- **Resources** (/resources): 2 components
- **Blog** (/blog): 2 components
- **Contact** (/contact): 2 components

## Layout Components

- Header: 1 components
- Footer: 1 components

## Statistics

- **Total Pages**: 7
- **Total Components**: 14 (unique instances)
- **Generated**: 2025-08-21T01:29:18.888Z
- **Method**: Template-based generation with unique page components

## Component Architecture

Each page header gets a unique component file to ensure page-specific content:
- Home page: `PageHeaderHome.tsx`
- About page: `PageHeaderAbout.tsx`
- Services page: `PageHeaderServices.tsx`

This prevents content duplication and ensures each page has relevant messaging.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Customization

All components are in `src/components/` and can be edited directly.
Each component file is unique to prevent cross-page content conflicts.

---
Generated with AI Template-Based Website Builder (Fixed Deduplication Issue)
