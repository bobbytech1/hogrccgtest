import { useQuery } from '@tanstack/react-query';

// Define the shape of a sermon
interface Ministry {
  id: number;
  title: string;
  description: string;
  image: string;
  form_link: string;
  created_at: string; // Date string for when the event was created
  updated_at: string; // Date string for when the event was last updated
}

const fetchMinistries = async (): Promise<Ministry[]> => {
    const response = await fetch('http://localhost:3000/api/admin/ministries');
    if (!response.ok) throw new Error('Failed to fetch Ministries');
    const data = await response.json();
    return data.ministries; // Access the correct key
  };


// Hook to fetch and cache all sermons
export const useMinistries = () => {
  return useQuery<Ministry[]>({
    queryKey: ['ministries'],
    queryFn: fetchMinistries,
    staleTime: 300000, // 5 minutes
    refetchOnWindowFocus: false, // Prevent unnecessary refetching
  });
};

