import { useQuery } from '@tanstack/react-query';

// Define the shape of a sermon
interface Sermon {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
  video: string;
  speaker: string;
  date: string; // ISO date string
  created_at: string; // Date string for when the event was created
  updated_at: string; // Date string for when the event was last updated
}

// Fetch function to get sermons data
const fetchSermons = async (): Promise<Sermon[]> => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}api/admin/sermon`);
  if (!response.ok) throw new Error('Failed to fetch sermons');
  const data = await response.json();
  return data.sermons; // Return the array of sermons
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

// Hook to fetch and cache all sermons
export const useSermons = () => {
  return useQuery<Sermon[]>({
    queryKey: ['sermons'],
    queryFn: fetchSermons,
    staleTime: 300000, // 5 minutes
    refetchOnWindowFocus: false, // Prevent unnecessary refetching
    select: sermons =>
      sermons.map(sermon => ({
        ...sermon,
        date: formatDate(sermon.date), // Format the date for readability
        created_at: formatDate(sermon.created_at),
        updated_at: formatDate(sermon.updated_at),
      })),
  });
};

export const getLatestSermon = (sermons: Sermon[]): Sermon | null => {
    if (sermons.length === 0) return null; // Handle empty array case
  
    // Sort sermons by created_at (descending order)
    const sortedSermons = sermons.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA; // Newest first
    });
  
    // Return the most recently created sermon
    return sortedSermons[0];
  };
  