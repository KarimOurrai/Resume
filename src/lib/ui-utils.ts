import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add other utility functions that were in component files
export const badgeVariants = {/* ...badge variants... */}
export const buttonVariants = {/* ...button variants... */}
export const toggleVariants = {/* ...toggle variants... */}
export const navigationMenuTriggerStyle = {/* ...style object... */}
