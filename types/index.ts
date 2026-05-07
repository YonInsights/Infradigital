// types/index.ts
// Global TypeScript interfaces for Infradigital engineering domain
// Strict typing ensures data integrity across civil engineering workflows

/**
 * Navigation item for sidebar/header menus
 * Supports nested dropdowns for Tools/Organizers/Generators hierarchy
 */
export interface NavItem {
  label: string;
  href: string;
  icon: string; // lucide-react icon name (e.g., "Wrench", "BookOpen")
  children?: NavItem[]; // Nested items for dropdown menus
  badge?: string; // Optional badge text (e.g., "New", "Beta")
  disabled?: boolean; // Disable nav item during development phases
}

/**
 * Tool configuration for dynamic tool registry
 * Drives tool discovery, routing, and permission checks
 */
export interface ToolConfig {
  id: string; // Unique identifier (kebab-case, matches route segment)
  category: "organizer" | "generator" | "utility"; // Tool classification for UI grouping
  title: string; // Display name in tool hub
  description: string; // Brief description for tooltip/help text
  route: string; // Next.js App Router path (e.g., "/tools/organizers/horizontal")
  difficulty: "basic" | "intermediate" | "advanced"; // Skill level indicator for users
  requiredLibs: string[]; // Dependency names for lazy-loading optimization
  permissions?: string[]; // Optional role-based access control (Phase 5)
}

/**
 * Manual/library entry for PDF viewer
 * Maps to public/manuals/ folder structure
 */
export interface ManualEntry {
  title: string; // Display name (e.g., "ERA Geometric Design Manual")
  type: "era" | "aashto" | "dmrb" | "irc" | "austroads"; // Standard organization
  url: string; // Path to PDF in public/manuals/ (e.g., "/manuals/era-geometric.pdf")
  year: string; // Publication year for version tracking
  icon: string; // lucide-react icon for visual identification
  sections?: { title: string; page: number }[]; // Optional table of contents for deep linking
}

/**
 * Survey point data structure for CSV processing
 * Matches ERA/AASHTO survey data export formats
 */
export interface SurveyPoint {
  pointNumber: number; // Unique point identifier (integer)
  easting: number; // X coordinate in meters (UTM projection)
  northing: number; // Y coordinate in meters (UTM projection)
  elevation: number; // Z coordinate in meters (orthometric height)
  description: string; // Feature code or narrative description
  code?: string; // Optional feature code (e.g., "CL" for centerline)
  timestamp?: string; // Optional ISO 8601 timestamp for survey session tracking
}

/**
 * Road marking configuration for generator tools
 * Used by road-mark-generator and road-mark-schedule
 */
export interface RoadMarking {
  id: string; // Unique identifier
  type: "centerline" | "edge" | "crosswalk" | "arrow" | "text"; // Marking classification
  color: "white" | "yellow" | "red" | "blue"; // Per MUTCD/ERA standards
  width: number; // Width in centimeters
  length?: number; // Length in meters (for dashed lines)
  spacing?: number; // Gap spacing in meters (for dashed lines)
  material?: "thermoplastic" | "paint" | "tape"; // Optional material specification
}

/**
 * Road sign configuration for generator tools
 * Used by road-sign-generator and road-sign-schedule
 */
export interface RoadSign {
  id: string; // Unique identifier
  type: "regulatory" | "warning" | "guide" | "temporary"; // Sign classification per MUTCD
  code: string; // Standard sign code (e.g., "R1-1", "W2-3")
  text?: string; // Optional custom text for variable message signs
  size: "small" | "medium" | "large" | "oversized"; // Physical size category
  mounting: "post" | "overhead" | "cantilever"; // Installation method
  location: { chainage: number; offset: number }; // Position along alignment
}

/**
 * Guardrail configuration for generator tools
 * Used by guardrail-generator and guardrail-schedule
 */
export interface Guardrail {
  id: string; // Unique identifier
  type: "w-beam" | "thrie-beam" | "cable" | "concrete"; // Barrier classification
  height: number; // Height in centimeters (per AASHTO M180)
  postSpacing: number; // Post spacing in meters
  startChainage: number; // Start position along alignment
  endChainage: number; // End position along alignment
  side: "left" | "right" | "both"; // Installation side relative to travel direction
}

/**
 * AdSense slot configuration for CLS-safe ad placement
 * Ensures fixed dimensions to prevent layout shift
 */
export interface AdSlot {
  id: string; // Matches ADSENSE_SLOT_IDS from lib/utils.ts
  minH: string; // Tailwind height class (e.g., "h-24")
  label: string; // Accessible label for screen readers
  formats: string[]; // Allowed AdSense format sizes (e.g., ["728x90", "300x250"])
}

/**
 * Global application state interface
 * For future Zustand/Jotai state management (Phase 3+)
 */
export interface AppState {
  theme: "light" | "dark" | "system";
  sidebarCollapsed: boolean;
  activeTool: string | null;
  lastProject: string | null;
}