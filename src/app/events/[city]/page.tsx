import H1 from "@/components/h1";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default function EventsPage({ params }: EventPageProps) {
  const city = params.city;
  return (
    <main className="flex items-center flex-col py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city == "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase()+city.slice(1)}`}
      </H1>
    </main>
  );
}
