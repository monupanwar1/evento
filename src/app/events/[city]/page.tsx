import EventsList from "@/components/events-lists";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import { sleep } from "@/lib/utils";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventPageProps) {
  const city = params.city;
  await sleep(2000)
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex text-center items-center flex-col py-24 px-[20px] min-h-[110vh]">
      <div >
        <H1 className="mb-28">
          {city === "all" ? "All Events" : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
        </H1>
        <EventsList events={events} />
      </div>
    </main>
  );
}
