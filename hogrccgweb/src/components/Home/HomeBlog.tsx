import { FaChevronRight } from "react-icons/fa6";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CustomButton from "../Button/CustomButton";
import { usePageContent } from '../../hooks/usePageContent';
import { getLatestBlogs, useBlogs } from "../../hooks/useBlogs";
import { Box } from "@mui/joy";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  const { data, isLoading } = usePageContent('home-page');
  const { data: blogs } = useBlogs();
  if (isLoading) return <div>Loading...</div>;

  const { section7 } = data?.content || {}; 
  const latestBlogs = getLatestBlogs(blogs ?? []);
    return ( 
        <>
            <div className="mt-6 md:px-10 px-6">
            <div className="flex lgx:flex-row flex-col lgx:items-center items-start space-y-6 justify-between lgx:space-x-11 mb-10">
          <div className="lgx:w-[50%] xssm:w-[90%] w-[100%] space-y-2">
            <h3 className="font-headingFont xssm:text-[18px] text-[16px] font-medium uppercase">
              BLOG
            </h3>
            <h2 className="font-paragraphFont xssm:text-[32px] text-[28px] font-bold">
            {section7?.heading}
            </h2>
          </div>
          <div className="space-y-2 lgx:w-[50%] xssm:w-[90%] w-[100%]">
            <p className="font-paragraphFont xssm:text-[24px] text-[20px] font-semibold">
           {section7?.paragraph}
            </p>
            <Link
              to="/blog"
              className="flex items-center space-x-2 font-paragraphFont font-semibold xssm:text-[16px] text-[15px]"
            >
              View All
              <FaChevronRight size={14} />
            </Link>
          </div>
        </div>

        <Box sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
        gap: 2,
      }}>
        {latestBlogs.map((blog) => (
             <Card variant="outlined" sx={{backgroundColor: "#ffffff"}} key={blog.id}>
             <AspectRatio>
                 <div>
                     <img
                         src={blog.image}
                         className="h-[50vh]"
                         alt="Event Image"
                     />
                 </div>
             </AspectRatio>
             <div>
                 {/* Truncated Title */}
                 <Typography
                     level="title-md"
                     sx={{
                         fontSize: "17px",
                         fontWeight: 600,
                         overflow: "hidden",
                         display: "-webkit-box",
                         WebkitLineClamp: 1, // Limit to 1 line
                         WebkitBoxOrient: "vertical",
                     }}
                 >
                     {blog.title}
                 </Typography>

                 {/* Truncated Paragraph */}
                 <Typography
                     level="body-sm"
                     sx={{
                         overflow: "hidden",
                         display: "-webkit-box",
                         WebkitLineClamp: 4, // Limit to 2 lines
                         WebkitBoxOrient: "vertical",
                         marginTop: "4px",
                         fontSize: "14px",
                     }}
                 >
                    {blog.content}
                 </Typography>
                 <div className="flex items-center justify-between pt-3 ">
                     <div className="flex items-center space-x-1">
                     <p className="font-paragraphFont md:text-[14px] text-[10px]">{blog.published_at}</p>
                     </div>
                 <CustomButton txt="Read more" to={`/blog/${blog.id}`} btnStyle="md:py-[7px] py-[5px]" txtStyle="md:text-[13px] text-[10px] uppercase"/>
                 </div>
             </div>
         </Card>
        ))}
                   
                    </Box>

            </div>
        </>
     );
}
 
export default HomeBlog;