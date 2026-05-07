// config/tools.ts
// Centralized tool registry for Infradigital engineering toolkit
// Drives dynamic routing, lazy-loading, and permission checks

import { ToolConfig } from "@/types";

/**
 * Complete tool registry with ALL 13 tools pre-defined
 * Each entry includes metadata for UI rendering, routing, and dependency management
 * DO NOT modify without updating corresponding route handlers in Phase 3+
 */
export const toolRegistry: ToolConfig[] = [
  // ── Utility Tools ──────────────────────────────────────
  {
    id: "folder-creator",
    category: "utility",
    title: "Folder Creator",
    description: "Generate standardized project folder structures with ZIP export",
    route: "/tools/folder-creator",
    difficulty: "basic",
    requiredLibs: ["jszip"],
  },
  {
    id: "survey-cleaner",
    category: "utility",
    title: "Survey Cleaner",
    description: "3-step wizard to validate, clean, and merge survey CSV data",
    route: "/tools/survey-cleaner",
    difficulty: "intermediate",
    requiredLibs: ["papaparse", "zod"],
  },

  // ── Data Organizers ───────────────────────────────────
  {
    id: "horizontal-organizer",
    category: "organizer",
    title: "Horizontal Alignment",
    description: "Design and refine horizontal curves per ERA/AASHTO standards",
    route: "/tools/organizers/horizontal",
    difficulty: "advanced",
    requiredLibs: ["zod"],
  },
  {
    id: "vertical-organizer",
    category: "organizer",
    title: "Vertical Profile",
    description: "Create vertical alignment profiles with grade calculations",
    route: "/tools/organizers/vertical",
    difficulty: "advanced",
    requiredLibs: ["zod"],
  },
  {
    id: "centerline-organizer",
    category: "organizer",
    title: "Centerline Generator",
    description: "Generate centerline coordinates from alignment parameters",
    route: "/tools/organizers/centerline",
    difficulty: "intermediate",
    requiredLibs: ["zod"],
  },
  {
    id: "superelevation-corrector",
    category: "organizer",
    title: "Superelevation Corrector",
    description: "Calculate and apply superelevation transitions per design standards",
    route: "/tools/organizers/superelevation",
    difficulty: "advanced",
    requiredLibs: ["zod"],
  },

  // ── Road Marking Generators ───────────────────────────
  {
    id: "road-mark-generator",
    category: "generator",
    title: "Road Markings",
    description: "Generate road marking layouts with MUTCD/ERA compliance",
    route: "/tools/generators/road-mark",
    difficulty: "intermediate",
    requiredLibs: ["jszip", "zod"],
  },
  {
    id: "road-mark-schedule",
    category: "generator",
    title: "Marking Schedule",
    description: "Export bill of quantities for road marking materials",
    route: "/tools/generators/road-mark-schedule",
    difficulty: "basic",
    requiredLibs: ["papaparse", "jszip"],
  },

  // ── Road Sign Generators ──────────────────────────────
  {
    id: "road-sign-generator",
    category: "generator",
    title: "Road Signs",
    description: "Place and configure regulatory/warning/guide signs per standards",
    route: "/tools/generators/road-sign",
    difficulty: "intermediate",
    requiredLibs: ["zod"],
  },
  {
    id: "road-sign-schedule",
    category: "generator",
    title: "Sign Schedule",
    description: "Generate sign installation schedules with material takeoffs",
    route: "/tools/generators/road-sign-schedule",
    difficulty: "basic",
    requiredLibs: ["papaparse", "jszip"],
  },

  // ── Guardrail Generators ──────────────────────────────
  {
    id: "guardrail-generator",
    category: "generator",
    title: "Guardrails",
    description: "Design guardrail layouts with AASHTO M180 compliance",
    route: "/tools/generators/guardrail",
    difficulty: "advanced",
    requiredLibs: ["zod"],
  },
  {
    id: "guardrail-schedule",
    category: "generator",
    title: "Guardrail Schedule",
    description: "Export guardrail material quantities and installation plans",
    route: "/tools/generators/guardrail-schedule",
    difficulty: "intermediate",
    requiredLibs: ["papaparse", "jszip"],
  },
] as const;

/**
 * Helper: Get tool config by ID (type-safe lookup)
 * @param id - Tool identifier (kebab-case)
 * @returns ToolConfig or undefined if not found
 */
export function getToolConfig(id: string): ToolConfig | undefined {
  return toolRegistry.find((tool) => tool.id === id);
}

/**
 * Helper: Filter tools by category for UI grouping
 * @param category - Tool category filter
 * @returns Array of ToolConfig matching category
 */
export function getToolsByCategory(
  category: ToolConfig["category"]
): ToolConfig[] {
  return toolRegistry.filter((tool) => tool.category === category);
}

/**
 * Helper: Check if tool requires specific library
 * @param toolId - Tool identifier
 * @param libName - Library name to check
 * @returns boolean indicating dependency requirement
 */
export function toolRequiresLib(toolId: string, libName: string): boolean {
  const tool = getToolConfig(toolId);
  return tool?.requiredLibs.includes(libName) ?? false;
}