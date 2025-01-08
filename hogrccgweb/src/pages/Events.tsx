import { usePageContentEvent } from '../hooks/usePageContentEvent';
import Loader from "../components/Loader";
import EventIntro from "../components/Events/EventsIntro"
import EventsCal from "../components/Events/EventsCal"
import FeaturedEvents from "../components/Events/FeaturedEvents"
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";

const Events = () => {
  const { isLoading, isError } = usePageContentEvent('event-page');
         if (isLoading) return <div><Loader /></div>;
         if (isError) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center h-screen font-headingFont">Network Error Could not Load Resources</div>;
    return ( 
        <>
            <NavBar />
            <div className="bg-[#F7F7F7]">
                <EventIntro />
                <div className="sm:px-10 px-5 py-8">
                <FeaturedEvents /> 
                </div>
                <EventsCal />
            </div>
            <Footer />
        </>
     );
}
 
export default Events;