import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function page() {
  
  return (
    <main className="flex flex-col items-center justifu-center  pt-36 px-3">
      <H1>
        Find events around you
      </H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75 text-center">
        Browse more than{" "}
        <span className="text-[#a4f839] font-bold italic text-center underline">
          10,000 events{" "}
        </span>{" "}
        around you
      </p>
      <SearchForm/>
      

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="events/austin">Austin</Link>
          <Link href="events/seattle">seattle</Link>
        </div>
      </section>
    </main>
  );
}
