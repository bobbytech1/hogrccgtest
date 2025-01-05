import { useQuery } from '@tanstack/react-query';

interface Hero {
    heading: string;
    paragraph: string;
  }
  

  
  
  interface PageContent {
    content: {
      hero: Hero;
      
    };
  }

// Function to fetch page content
const fetchPageContent = async (slug: string): Promise<PageContent> => {
    const response = await fetch(`https://hogrccgtest.onrender.com/api/admin/pages/${slug}`);
    if (!response.ok) throw new Error('Failed to fetch content');
    return response.json();
  };

// Hook to fetch and cache page content
// Hook to fetch and cache page content
export const usePageContentEvent = (slug: string) => {
    return useQuery<PageContent>({
      queryKey: ['pageContent', slug],
      queryFn: () => fetchPageContent(slug),
      staleTime: 300000, // 5 minutes
      refetchOnWindowFocus: false, // Prevent unnecessary refetching
    });
  };
