import React, { useState } from "react";
import { Box, Card, Typography, AspectRatio } from "@mui/joy";
import CustomButton from "../Button/CustomButton";
import { BlogData as BlogDataSource } from "../../data"; // Renamed imported BlogData

interface Blog {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

interface MainBlogProps {
  BlogData?: Blog[]; // Optional if you want to allow overriding the default data
}

const MainBlog: React.FC<MainBlogProps> = ({ BlogData = BlogDataSource }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Filtered blog posts based on search term
  const filteredBlogs = BlogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Load More functionality
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8); // Load 8 more posts
  };

  return (
    <div className="bg-[#FFFFFF] pb-12 pt-6">
      {/* Hero Section */}
      <div className="px-6 md:px-10 text-center space-y-4">
        <h1 className="font-headingFont text-[32px] font-bold">Welcome to Our Blog</h1>
        <p className="font-paragraphFont text-[18px] text-gray-600">
          Discover stories, insights, and updates from our church community.
        </p>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="w-full md:w-[50%] p-2 border border-gray-300 rounded-lg mt-4"
        />
      </div>

      {/* Blog Grid */}
      <div className="mt-10 px-6 md:px-10">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 4,
          }}
        >
          {filteredBlogs.slice(0, visibleCount).map((blog) => (
            <Card key={blog.id} variant="outlined" sx={{ backgroundColor: "#ffffff" }}>
              <AspectRatio>
                <img src={blog.imageUrl} alt={blog.title} className="h-[50vh] object-cover" />
              </AspectRatio>
              <div className="p-4">
                <Typography
                  level="title-md"
                  sx={{
                    fontSize: "17px",
                    fontWeight: 600,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  level="body-sm"
                  sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    marginTop: "4px",
                    fontSize: "14px",
                  }}
                >
                  {blog.description}
                </Typography>
                <div className="flex items-center justify-between pt-3">
                  <p className="text-gray-500 text-[14px]">{blog.date}</p>
                  <CustomButton txt="Read more" to={`/blog/${blog.id}`} btnStyle="" txtStyle="" />
                </div>
              </div>
            </Card>
          ))}
        </Box>
      </div>

      {/* Load More Button */}
      {filteredBlogs.length > visibleCount && (
        <div className="text-center mt-8">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}

      {/* No Results Found */}
      {filteredBlogs.length === 0 && (
        <div className="text-center mt-8">
          <p className="text-gray-500">No blog posts found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
};

export default MainBlog;
