import H1 from "@/components/h1";
import Image from "next/image";
import { Metadata } from "next";
import { capitalize, getEvent } from "@/lib/utils";

type Props = {
  params: {
    slug: string;
  };
};


export async  function generateMetadata({params}:Props):Promise<Metadata>{

  const {slug}= await params;
  const event=await getEvent(slug);
  return{
   title:event.name,
    

  }
}


export default async function EventPage({ params }: Props) {
  const slug = params.slug; // ✅ Removed await
  const event=await getEvent(slug);

  return (
    <main>
      <section className="relative h-[361px] overflow-hidden flex justify-center items-center">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width:1280px) 100vw, 1280px" // ✅ 
          priority
        />
        <div className="z-1 flex flex-col gap-6 lg:gap-16 relative lg:flex-row">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16 min-h-[75vh]">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

// ✅ Fixed SectionHeading: Changed <section> to <h2>
function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto text-lg leading-8 text-white/75 max-w-4xl">
      {children}
    </section>
  );
}
