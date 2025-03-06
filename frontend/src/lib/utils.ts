/* eslint-disable @typescript-eslint/no-unused-vars */

// imports
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// included cn function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * funtion to validate if a string is a valid url
 * @param urlString
 * @returns {boolean}
 */
export const isValidUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    if (url) return true;
  } catch (err) {
    return false;
  }
  return false;
};
