import Link from "next/link";

export default function page() {
  return (
    <main>
      <h1>find events around you</h1>
      <p>Browse more than 10,000 events around you</p>
      <form action="">
        <input placeholder="Search events in any city..." spellCheck={false} />
      </form>

      <section>
        <p>Popular:</p>
        <div>
          <Link href="events/austin">Austin</Link>
          <Link href="events/seattle">Slug</Link>
        </div>
      </section>
    </main>
  );
}
