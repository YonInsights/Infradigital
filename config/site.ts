// config/site.ts
// Centralized site metadata, navigation, and AdSense configuration
// Strictly typed for IDE autocomplete and route safety

import { NavItem } from "@/types";

/**
 * Site metadata for SEO, Open Graph, and AdSense
 * Injected into next.config.js and layout.tsx
 */
export const siteMeta = {
  name: "Infradigital",
  description: "Professional Highway Design Toolkit Hub — Civil Engineering Standards Compliance",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://infradigital.com",
  ogImage: "/icons/og-banner.jpg",
  theme: {
    primary: "#0EA5E9", // Cyan for brand consistency
    background: "#0B0F19", // Navy for dark-mode-first design
  },
  // AdSense configuration (Phase 4 integration)
  adsense: {
    clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",
    enabled: process.env.NODE_ENV === "production",
  },
} as const;

/**
 * Navigation hierarchy matching 20-phase development roadmap
 * Drives sidebar, header, and mobile drawer components
 * WCAG 2.1 AA: aria-labels and keyboard navigation handled in layout components
 */
export const navigation: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: "LayoutDashboard",
  },
  {
    label: "Manuals",
    href: "/manuals",
    icon: "BookOpen",
    children: [
      { label: "ERA (Ethiopia)", href: "/manuals?standard=era", icon: "Flag" },
      { label: "AASHTO (USA)", href: "/manuals?standard=aashto", icon: "Flag" },
      { label: "DMRB (UK)", href: "/manuals?standard=dmrb", icon: "Flag" },
      { label: "IRC (India)", href: "/manuals?standard=irc", icon: "Flag" },
      { label: "Austroads (AU/NZ)", href: "/manuals?standard=austroads", icon: "Flag" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    icon: "Wrench",
    children: [
      { label: "Folder Creator", href: "/tools/folder-creator", badge: "New" },
      { label: "Survey Cleaner", href: "/tools/survey-cleaner" },
      {
        label: "Organizers",
        href: "/tools/organizers",
        children: [
          { label: "Horizontal Alignment", href: "/tools/organizers/horizontal" },
          { label: "Vertical Profile", href: "/tools/organizers/vertical" },
          { label: "Centerline Generator", href: "/tools/organizers/centerline" },
        ],
      },
      {
        label: "Generators",
        href: "/tools/generators",
        children: [
          { label: "Road Markings", href: "/tools/generators/road-mark" },
          { label: "Marking Schedule", href: "/tools/generators/road-mark-schedule" },
          { label: "Road Signs", href: "/tools/generators/road-sign" },
          { label: "Sign Schedule", href: "/tools/generators/road-sign-schedule" },
          { label: "Guardrails", href: "/tools/generators/guardrail" },
          { label: "Guardrail Schedule", href: "/tools/generators/guardrail-schedule" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    icon: "FolderOpen",
  },
];

/**
 * Footer navigation links
 * Simple flat structure for legal/compliance pages
 */
export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" }, // WCAG 2.1 AA compliance statement
] as const;

/**
 * Breakpoint configuration for responsive layout logic
 * Matches Tailwind CSS default breakpoints for JS-side checks
 */
export const breakpoints = {
  mobile: 767, // <768px: mobile drawer navigation
  tablet: 1023, // 768–1023px: icon-only sidebar rail
  desktop: 1024, // ≥1024px: full collapsible sidebar
} as const;