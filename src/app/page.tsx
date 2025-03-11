import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="font-bold text-3xl lg:text-6xl  tracking-tight">Find events around you</h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">Browse more than {" "} <span className="text-[#a4f839] font-bold italic  underline">10,000 events </span> around you</p>
      <form className="w-full sm:w-[580px]">
        <input
        className= "bg-white rounded-lg bg-white/[7%] w-full h-16 px-6 outline-none ring-[#a4f839]/50 transition focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..." spellCheck={false} />
      </form>

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="events/austin">Austin</Link>
          <Link href="events/seattle">Slug</Link>
        </div>
      </section>
    </main>
  );
}
