import { useQuery } from '@tanstack/react-query';

interface Hero {
    heading: string;
    paragraph: string;
    bgimage: string;
  }
  
  interface conSection {
    heading: string;
    paragraph: string;
    image: string;
    image2: string;
  }
  
  
  interface PageContent {
    content: {
      hero: Hero;
      conSection: conSection;
      
    };
  }

// Function to fetch page content
const fetchPageContent = async (slug: string): Promise<PageContent> => {
  const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}api/admin/pages/${slug}`);
    if (!response.ok) throw new Error('Failed to fetch content');
    return response.json();
  };

// Hook to fetch and cache page content
// Hook to fetch and cache page content
export const usePageContentContact = (slug: string) => {
    return useQuery<PageContent>({
      queryKey: ['pageContent', slug],
      queryFn: () => fetchPageContent(slug),
      staleTime: 300000, // 5 minutes
      refetchOnWindowFocus: false, // Prevent unnecessary refetching
    });
  };
