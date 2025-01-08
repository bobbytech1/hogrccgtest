import { useQuery } from '@tanstack/react-query';

// Define the shape of an event
interface Event {
  id: number;
  title: string;
  description: string;
  time: string;
  location: string;
  image: string;
  form_link: string;
  date: string; // ISO date string
  created_at: string; // Date string for when the event was created
  updated_at: string; // Date string for when the event was last updated
}

// Fetch function to get events data
const fetchEvents = async (): Promise<Event[]> => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}api/admin/events`);
  if (!response.ok) throw new Error('Failed to fetch events');
  return response.json();
};

// Utility function to format date as 'Jan 12th, 2025'
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  // Add ordinal suffix to day (e.g., 1st, 2nd, 3rd, 4th, etc.)
  const day = date.getDate();
  const suffix = day % 10 === 1 && day !== 11
    ? 'st'
    : day % 10 === 2 && day !== 12
    ? 'nd'
    : day % 10 === 3 && day !== 13
    ? 'rd'
    : 'th';

  return formattedDate.replace(`${day}`, `${day}${suffix}`);
};

// Hook to fetch and cache all events
export const useEvents = () => {
  return useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 300000, // 5 minutes
    refetchOnWindowFocus: false, // Prevent unnecessary refetching
    select: events =>
      events.map(event => ({
        ...event,
        date: formatDate(event.date), // Format the date for readability
        created_at: formatDate(event.created_at),
        updated_at: formatDate(event.updated_at),
      })),
  });
};

// Utility function to get the 3 most recently created events
export const getClosestEvents = (events: Event[]): Event[] => {
  // Sort events by created_at (descending order)
  const sortedEvents = events.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA; // Newest first
  });

  // Return the 3 most recently created events
  return sortedEvents.slice(0, 3);
};
