import { useQuery } from '@tanstack/react-query';

// Define the shape of a sermon
interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
    published_at: string; // Date string when the blog was published
    created_at: string;
    updated_at: string;
  }

// Fetch function to get Blog data
const fetchBlogs = async (): Promise<Blog[]> => {
    const response = await fetch('http://localhost:3000/api/admin/blog');
    if (!response.ok) throw new Error('Failed to fetch blogs');
    const data = await response.json();
    return data.blogs; // Return the array of blogs
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
export const useBlogs = () => {
    return useQuery<Blog[]>({
      queryKey: ['blogs'],
      queryFn: fetchBlogs,
      staleTime: 300000, // 5 minutes
      refetchOnWindowFocus: false,
      select: blogs =>
        blogs.map(blog => ({
          ...blog,
          published_at: formatDate(blog.published_at),
          created_at: formatDate(blog.created_at),
          updated_at: formatDate(blog.updated_at),
        })),
    });
  };

  export const getLatestBlogs = (blogs: Blog[]): Blog[] => {
    if (blogs.length === 0) return []; // Handle empty array case
  
    // Sort blogs by created_at (descending order)
    const sortedBlogs = blogs.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA; // Newest first
    });
  
    // Return the top 3 latest blogs
    return sortedBlogs.slice(0, 3); // This will return the latest 3 blogs
  };
  


  