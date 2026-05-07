// lib/utils.ts
// Centralized utility functions for Infradigital engineering workflows
// Strictly typed, tree-shakeable, and WCAG-compliant

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with clsx + tailwind-merge
 * Prevents class conflicts when composing shadcn/ui components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format chainage value for civil engineering display
 * Converts meters to standard "KM+M" format (e.g., 1250.5 → "1+250.50")
 * @param chainage - Distance in meters from project start
 * @returns Formatted string per ERA/AASHTO standards
 */
export function formatChainage(chainage: number): string {
  const km = Math.floor(chainage / 1000);
  const meters = (chainage % 1000).toFixed(2);
  return `${km}+${meters.padStart(5, "0")}`;
}

/**
 * Format coordinates for survey point display
 * Rounds to 3 decimal places (mm precision) per engineering standards
 * @param easting - X coordinate in meters
 * @param northing - Y coordinate in meters
 * @returns Formatted string "E: {easting}, N: {northing}"
 */
export function formatCoordinate(easting: number, northing: number): string {
  const e = easting.toFixed(3);
  const n = northing.toFixed(3);
  return `E: ${e}, N: ${n}`;
}

/**
 * Sanitize filename for ZIP export and CSV download
 * Removes special characters, preserves engineering notation (+, -, _)
 * @param name - Original filename from user input or API
 * @returns Safe filename for filesystem/HTTP headers
 */
export function sanitizeFilename(name: string): string {
  return name
    .replace(/[<>:"/\\|?*]/g, "_") // Remove invalid filesystem chars
    .replace(/\s+/g, "_") // Convert spaces to underscores
    .replace(/_{2,}/g, "_") // Collapse multiple underscores
    .replace(/^_+|_+$/g, "") // Trim leading/trailing underscores
    .toLowerCase();
}

/**
 * AdSense slot IDs for CLS-safe ad placement
 * Fixed identifiers for dynamic ad injection in Phase 4
 * DO NOT modify without updating AdSense policy compliance
 */
export const ADSENSE_SLOT_IDS = [
  "adsense-top-banner", // 728x90 header slot
  "adsense-sidebar-rect", // 300x250 sidebar slot
  "adsense-infeed", // Responsive in-content slot
] as const;

/**
 * Validate chainage value per engineering constraints
 * @param value - Input chainage in meters
 * @returns true if value is positive and < 10,000 km (reasonable highway limit)
 */
export function isValidChainage(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value < 10_000_000;
}

/**
 * Convert decimal degrees to DMS (Degrees-Minutes-Seconds)
 * Used for geodetic coordinate display in survey tools
 * @param decimal - Decimal degree value
 * @returns Object with degrees, minutes, seconds, direction (N/S/E/W)
 */
export function toDMS(decimal: number, isLatitude: boolean): {
  degrees: number;
  minutes: number;
  seconds: number;
  direction: "N" | "S" | "E" | "W";
} {
  const absolute = Math.abs(decimal);
  const degrees = Math.floor(absolute);
  const minutesFloat = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesFloat);
  const seconds = parseFloat(((minutesFloat - minutes) * 60).toFixed(2));
  const direction = isLatitude
    ? decimal >= 0 ? "N" : "S"
    : decimal >= 0 ? "E" : "W";
  
  return { degrees, minutes, seconds, direction };
}