import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";

type EventsListsProps = {
  city:string;
};
export default async function EventsList({ city }: EventsListsProps) {

  const events = await getEvents(city);
  

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event}/>
        
      ))}
    </section>
  );
}
