import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import MainBlog from "../components/Blog/MainBlog";

const Blog = () => {
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