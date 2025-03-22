"use client"
import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["0 1","1.5 1"],
  });
  const scaleProgress=useTransform(scrollYProgress,[0,1],[0.8,1])
  const opacityProgress=useTransform(scrollYProgress,[0,1],[0.3,1])
  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      style={{
        scale:scaleProgress,
        opacity:opacityProgress,

      }}
      initial={{
        opacity:0,
        scale:0.8
      }}
      className=" flex flex-col flex-1  basis-80 max-w-[500px]"
    >
      <section className=" items-center justify-center w-full h-full flex flex-col bg-white/[3%] relative  transition  hover:scale-105 active:scale-[1.02]">
        <Image
          src={event.imageUrl}
          alt={event.name}
          height={200}
          width={500}
          className="h-[60%] object-fit bg-white/[3%] rounded-xl overflow-hidden"
        />
        <div className="flex flex-col  flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm mt-4 text-white/50">{event.location}</p>
        </div>

        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
