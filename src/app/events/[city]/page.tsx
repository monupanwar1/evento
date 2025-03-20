import EventsList from "@/components/events-lists";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventPageProps) {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events"
  );
  const events: EventoEvent[] = await response.json();
  const city = params.city;

  return (
    <main className="flex text-center items-center flex-col py-24 px-[20px] min-h-[110vh]">
      <div className="mb-28">
        <H1 className="mb-28 text-center">
          {city === "all" ? "All Events" : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
        </H1>
        <EventsList events={events} />
      </div>
    </main>
  );
}
