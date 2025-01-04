import { useEvents } from "../hooks/useEvents";
import EventIntro from "../components/Events/EventsIntro"
import EventsCal from "../components/Events/EventsCal"
import FeaturedEvents from "../components/Events/FeaturedEvents"
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";

const Events = () => {
    const {  isLoading, error } = useEvents();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center">Network Error Could not Load Resources</div>;
    return ( 
        <>
            <NavBar />
            <div className="bg-[#F7F7F7]">
                <EventIntro />
                <FeaturedEvents />
                <EventsCal />
            </div>
            <Footer />
        </>
     );
}
 
export default Events;