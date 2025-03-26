import EventsList from '@/components/events-lists';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';
import { capitalize } from '@/lib/utils';
import { z } from 'zod';

type Props = {
  params: {
    city: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ✅ Correct way to use `params` in Next.js 15
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await Promise.resolve(params);
  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
}

// ✅ Schema for validating `page` query parameter
const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: Props) {
  const { city } = await Promise.resolve(params); // ✅ No need to await `params`
  const resolvedSearchParams = await Promise.resolve(searchParams); // ✅ Await searchParams

  // ✅ Safely access `searchParams.page`
  const page = resolvedSearchParams.page ?? '1';
  const parsedPage = pageNumberSchema.safeParse(page);

  if (!parsedPage.success) {
    throw new Error('Invalid page number');
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
