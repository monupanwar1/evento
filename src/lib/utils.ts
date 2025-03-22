import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

export function cn(...classes: (string | undefined | false)[]) {
  return twMerge(clsx(classes)); 
}

export function capitalize(string:string){
  return string.charAt(0).toUpperCase()+string.slice(1);
}
export function sleep(ms:number){
  return new Promise((resolve)=>{
    setTimeout(resolve,ms)
  });

}


export async function getEvents(city:string){
  // const response =await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`)

  // const events:EventoEvent[]=await response.json();

  const events =await prisma.eventoEvent.findMany({
    where:{
      city:city==="all"? undefined:capitalize(city),
    }
  })
  return events;

}
export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return event;
}

