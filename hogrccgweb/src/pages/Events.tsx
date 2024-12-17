import EventIntro from "../components/Events/EventsIntro"
import EventsCal from "../components/Events/EventsCal"
import FeaturedEvents from "../components/Events/FeaturedEvents"
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";

const Events = () => {
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