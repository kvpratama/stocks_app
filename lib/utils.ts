import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine multiple class values into a single class string and resolve Tailwind utility conflicts.
 *
 * @param inputs - One or more class values accepted by `clsx` (strings, arrays, objects, etc.)
 * @returns A single string of merged, de-duplicated class names with Tailwind-specific classes resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
