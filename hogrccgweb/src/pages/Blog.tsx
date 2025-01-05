import { useBlogs } from "../hooks/useBlogs";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import MainBlog from "../components/Blog/MainBlog";

const Blog = () => {
    const {isLoading, error} = useBlogs()
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return (
          <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center">
            Network Error. Could not load resources.
          </div>
        );
      }
    return ( 
        <>
            <NavBar />
            <div className="bg-[#F7F7F7]">
                <MainBlog />
            </div>
            <Footer />
        </>
     );
}
 
export default Blog;