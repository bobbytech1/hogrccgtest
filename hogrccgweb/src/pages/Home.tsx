import NavBar from "../components/Header/NavBar";
import Hero from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import useNavbar from "../hooks/useNavbar";
import ImageCarousel from "../components/Home/ImageCarousel"; 
import UpcomingEvents from "../components/Home/UpcomingEvents";
import HomeSermons from "../components/Home/HomeSermons";
import HomeMinistries from "../components/Home/HomeMinistries";

const Home = () => {
    const {isFixed} = useNavbar()
    return ( 
        <>
           <div>
           <NavBar  headerStyle={`w-full z-20 ${isFixed ? 'fixed top-0 left-0 bg-[#000000] animate-slideDown' : 'absolute top-0 left-0 bg-transparent'}`}/>
            <Hero/>
            <div className="px-14">
                <Welcome />
                <ImageCarousel />
                <UpcomingEvents />
                <HomeSermons />
                <HomeMinistries />
            </div>
           </div>
        </>
     );
}
 
export default Home;