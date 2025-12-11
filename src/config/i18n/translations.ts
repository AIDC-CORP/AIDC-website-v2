/**
 * Translation module - Hybrid approach
 * 
 * This file imports translation data from JSON files and exports
 * them in a type-safe manner for use throughout the application.
 * 
 * Benefits of this approach:
 * - Easy to edit translations (JSON format)
 * - Type-safe imports (TypeScript)
 * - Can be integrated with translation tools
 * - Supports dynamic loading in the future
 */

import en from "./locales/en.json";
import vi from "./locales/vi.json";
import type { Language } from "./languages";

export const translations: Record<Language, Record<string, string>> = {
  en,
  vn: vi,
};
