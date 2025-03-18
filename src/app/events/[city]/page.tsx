
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventPageProps) {
  const response =await fetch("https://bytegrad.com/course-assets/projects/evento/api/events");
  const events: EventoEvent[]= await response.json();
  const city = params.city;
  return (
    <main className="flex items-center flex-col py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city == "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase()+city.slice(1)}`}
      </H1>
      {events.map((event)=>(
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
