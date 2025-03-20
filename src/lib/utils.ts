import clsx from "clsx";
import { ClassValue } from "clsx";
import { ClassValidator, twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]){
   twMerge(clsx(inputs));

}