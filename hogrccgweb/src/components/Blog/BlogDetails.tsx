import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface Blog {
  id: string;
  title: string;
  image: string;
  content: string;
  author: string;
  published_at: string;
}

// Function to fetch blog details by ID
const fetchBlogById = async (id: string): Promise<Blog> => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}api/admin/blog/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  const data = await response.json();
  return data.blog;
};

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blog, isLoading, error } = useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id!),
    staleTime: 300000, // Cache for 5 minutes
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching blog details.</p>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section: Texts */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-headingFont font-bold text-center mb-4">{blog.title}</h1>
            <div className="text-sm text-gray-600 text-center mb-4 font-linkFont">
              <p>Author: {blog.author}</p>
              <p>Date Published: {new Date(blog.published_at).toLocaleDateString()}</p>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="overflow-y-auto">
            <p className="text-justify font-paragraphFont leading-relaxed">{blog.content}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
