import EventsList from "@/components/events-lists";
import H1 from "@/components/h1";
import Loading from "./loading";
import { Suspense } from "react";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";

type Props = {
  params: {
    city: string;
  };
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await Promise.resolve(params); // 
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default async function EventsPage({ params }: Props) {
  const { city } = await Promise.resolve(params);

  return (
    <main className="flex text-center items-center flex-col py-24 px-[20px] min-h-[110vh]">
      <div>
        <H1 className="mb-28">
          {city === "all"
            ? "All Events"
            : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
        </H1>
        <Suspense fallback={<Loading />}>
          <EventsList city={city} />
        </Suspense>
      </div>
    </main>
  );
}
