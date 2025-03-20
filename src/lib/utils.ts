import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: (string | undefined | false)[]) {
  return twMerge(clsx(classes)); 
}
export function sleep(ms:number){
  return new Promise((resolve)=>{
    setTimeout(resolve,ms)
  })

}