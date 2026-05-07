# Infradigital

Professional Highway Design Toolkit Hub — Civil Engineering Standards Compliance

## 🚀 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 3 + shadcn/ui
- **State**: React Server Components + Client Components
- **Utilities**: lucide-react, next-themes, zod, jszip, papaparse, pdfjs-dist

## 📁 Project Structure

```text
infradigital/
├── app/
│   ├── (core)/
│   │   ├── layout.tsx          # Root layout (nav, footer, theme provider)
│   │   ├── page.tsx            # Dashboard / Home
│   │   ├── manuals/            # PDF library & viewer
│   │   ├── tools/
│   │   │   ├── folder-creator/ # ZIP folder generator
│   │   │   ├── survey-cleaner/ # 3-step data cleaning wizard
│   │   │   ├── organizers/     # Horizontal, Vertical, Centerline
│   │   │   └── generators/     # Road Mark, Sign, Guardrail + Schedules
│   │   └── resources/          # Reference tables, guides, downloads
│   ├── globals.css             # Tailwind + custom variables
│   └── not-found.tsx
├── components/
│   ├── ui/                     # shadcn base components
│   ├── layout/                 # Header, Sidebar, Navigation, Footer
│   ├── manuals/                # PdfViewer, ManualCard
│   ├── tools/                  # Tool-specific logic (Forms, Canvas)
│   └── shared/                 # Toasts, Modals, LoadingStates
├── lib/
│   ├── utils.ts                # cn(), formatters, constants
│   ├── pdf-handler.ts          # In-browser PDF rendering
│   ├── zip-generator.ts        # JSZip folder structuring
│   ├── csv-processor.ts        # PapaParse integration
│   ├── validation-schemas.ts   # Zod schemas
│   └── tool-configs.ts         # Centralized metadata
├── public/
│   ├── manuals/                # ERA PDF Standards
│   ├── icons/                  # SVG icon set
│   └── templates/              # Default CSV/JSON templates
├── types/
│   └── index.ts                # Global TypeScript interfaces
└── config/
    ├── site.ts                 # Metadata, SEO, navigation
    └── tools.ts                # Tool definitions & categories
