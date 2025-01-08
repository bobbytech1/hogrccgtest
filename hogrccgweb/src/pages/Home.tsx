import NavBar from "../components/Header/NavBar";
import Hero from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import useNavbar from "../hooks/useNavbar";
import Loader from "../components/Loader";
import { usePageContent } from '../hooks/usePageContent';
import ImageCarousel from "../components/Home/ImageCarousel"; 
import UpcomingEvents from "../components/Home/UpcomingEvents";
import HomeSermons from "../components/Home/HomeSermons";
import HomeMinistries from "../components/Home/HomeMinistries";
import HomeBlog from "../components/Home/HomeBlog";
import HomeContact from "../components/Home/HomeContact";
import Footer from "../components/Footer/Footer";

const Home = () => {
    const {isFixed} = useNavbar()
    const { isLoading, isError } = usePageContent('home-page');
    if (isLoading) return <div><Loader /></div>;
    if (isError) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center h-screen font-headingFont">Network Error Could not Load Resources</div>;
    return ( 
        <>
           <div>
           <NavBar  headerStyle={`w-full z-20 ${isFixed ? 'fixed top-0 left-0 bg-[#000000] animate-slideDown' : 'absolute top-0 left-0 bg-transparent'}`}/>
            <Hero/>
            <div className="bg-[#F7F7F7]">
                <Welcome />
                <ImageCarousel />
                <UpcomingEvents />
                <HomeSermons />
                <HomeMinistries />
                <HomeBlog />
                <HomeContact />
            </div>
            <Footer/>
           </div>
        </>
     );
}
 
export default Home;