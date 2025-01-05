import { usePageContentBlog } from '../hooks/usePageContentBlog';
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import MainBlog from "../components/Blog/MainBlog";

const Blog = () => {
const { isLoading, isError } = usePageContentBlog('blog-page');
        if (isLoading) return <div>Loading...</div>;
        if (isError) return <div className="flex justify-center h-screen items-center md:text-[30px] text-[20px] font-bold text-center">Network Error Could not Load Resources</div>;
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