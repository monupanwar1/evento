import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import { ClassValue } from "clsx";




const prisma = new PrismaClient();


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}


export function capitalize(string:string){
  return string.charAt(0).toUpperCase()+string.slice(1);
}
export function sleep(ms:number){
  return new Promise((resolve)=>{
    setTimeout(resolve,ms)
  });

}


export async function getEvents(city:string,page=1){
  
 

  const events =await prisma.eventoEvent.findMany({
    where:{
      city:city==="all"? undefined:capitalize(city),
    },
    orderBy:{
      date:"asc"
    },
    take:6,
    skip:(page-1)*6
  });
   let totalCount;
   if (city === 'all') {
     totalCount = await prisma.eventoEvent.count();
   } else {
     totalCount = await prisma.eventoEvent.count({
       where: {
         city: capitalize(city),
       },
     });
   }
  return {
    events,
    totalCount,
  };

}
export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if(!event){
    return notFound();

  }
  return event;
}

