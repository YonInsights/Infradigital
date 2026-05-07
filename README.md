# Infradigital

Professional Highway Design Toolkit Hub — Civil Engineering Standards Compliance

## 🚀 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 3 + shadcn/ui
- **State**: React Server Components + Client Components
- **Utilities**: lucide-react, next-themes, zod, jszip, papaparse, pdfjs-dist

## 📁 Project Structure
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
│   │   │   ── generators/     # Road Mark, Sign, Guardrail + Schedules
│   │   ── resources/          # Reference tables, guides, downloads
│   ├── globals.css             # Tailwind + custom variables
│   ── not-found.tsx
├── components/
│   ├── ui/                     # shadcn base components (Button, Input, etc.)
│   ├── layout/                 # Header, Sidebar, Navigation, Footer
│   ├── manuals/                # PdfViewer, ManualCard, HorizontalGrid
│   ├── tools/                  # FolderCreator, SurveyWizard, OrganizerForm, GeneratorCanvas
│   ── shared/                 # Toasts, Modals, LoadingStates, ErrorBoundaries
├── lib/
│   ├── utils.ts                # cn(), formatters, constants
│   ├── pdf-handler.ts          # In-browser PDF rendering & download
│   ├── zip-generator.ts        # JSZip folder structuring & renumbering
│   ├── csv-processor.ts        # PapaParse integration, validation, merging
│   ├── validation-schemas.ts   # Zod schemas for all tools
│   └── tool-configs.ts         # Centralized tool metadata & routing
├── public/
│   ├── manuals/                # ERA PDFs (Bridge, Drainage, Geometric, etc.)
│   ├── icons/                  # SVG icon set
│   └── templates/              # Default CSV/JSON templates
├── types/
│   └── index.ts                # Global TypeScript interfaces
├── config/
│   ├── site.ts                 # Metadata, SEO, navigation config
│   ── tools.ts                # Tool definitions, categories, permissions
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
