import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventsListsProps = {
  events: EventoEvent[];
};
export default function EventsList({ events }: EventsListsProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event}/>
        
      ))}
    </section>
  );
}
