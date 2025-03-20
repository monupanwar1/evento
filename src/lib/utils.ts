import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: (string | undefined | false)[]) {
  return twMerge(clsx(classes)); 
}
