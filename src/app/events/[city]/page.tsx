import EventsList from '@/components/events-lists';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalize } from '@/lib/utils';
import { z } from 'zod';


// Define interface with Promise types
interface PageProps {
  params: Promise<{ city: string }>;
  searchParams: Promise<{
    page?: string;
    [key: string]: string | string[] | undefined;
  }>;
}
const validCities = ['austin', 'seattle', 'all'];

// ✅ Schema for validating page query parameter
const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: PageProps) {
  // Await params and searchParams
  const { city } = await params;
  const resolvedSearchParams = await searchParams;

  // ✅ Safely extract page from searchParams
  const page =
    typeof resolvedSearchParams?.page === 'string'
      ? resolvedSearchParams.page
      : '1';

  const parsedPage = pageNumberSchema.safeParse(page);

  if (!parsedPage.success) {
    throw new Error('Invalid page number');
  }

  const normalizedCity=validCities.includes(city?.toLowerCase())?city:'all';

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {normalizedCity === 'all' ? 'All Events' : `Events in ${capitalize(normalizedCity)}`}
      </H1>

      <Suspense key={normalizedCity + parsedPage.data} fallback={<Loading />}>
        <EventsList city={normalizedCity} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
