import { useQuery } from '@tanstack/react-query';

interface Hero {
    heading: string;
    paragraph: string;
    bgVideo: string;
  }
  
  interface Welcome {
    image: string;
    heading: string;
    subtitle: string;
    paragraph: string;
  }
  
  interface EventSection {
    heading: string;
    paragraph: string;
    image: string;
  }
  
  interface SermonSection {
    heading: string;
    paragraph: string;
    youtubeLink: string;
  }
  
  interface Section {
    heading: string;
    paragraph: string;
  }
  
  interface PageContent {
    content: {
      hero: Hero;
      welcome: Welcome;
      carousel: string[];
      eventSection: EventSection;
      sermonSection: SermonSection;
      section6: Section;
      section7: Section;
      section8: Section & { formLink: string };
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
export const usePageContent = (slug: string) => {
    return useQuery<PageContent>({
      queryKey: ['pageContent', slug],
      queryFn: () => fetchPageContent(slug),
      staleTime: 300000, // 5 minutes
      refetchOnWindowFocus: false, // Prevent unnecessary refetching
    });
  };
