import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { usePageContent } from '../../hooks/usePageContent';
import FeaturedEvents from "../Events/FeaturedEvents";

const UpcomingEvents = () => {
    const { data, isLoading } = usePageContent('home-page');
    if (isLoading) return <div>Loading...</div>;
  
    const { eventSection } = data?.content || {}; // Get the carousel data from the API respons
    return (
        <>
            <div className="my-14 md:px-10 px-6 pb-12 bg-[#FFFFFF] pt-6">
                {/* Events heading content  */}
                <div className="flex lgx:flex-row flex-col lgx:items-center items-start space-y-6 justify-between lgx:space-x-11">
                    <div className="lgx:w-[50%] xssm:w-[90%] w-[100%] space-y-2">
                        <h3 className="font-headingFont xssm:text-[18px] text-[16px] font-medium">EVENTS</h3>
                        <h2 className="font-paragraphFont xssm:text-[32px] text-[28px] font-bold">{eventSection?.heading}</h2>
                    </div>
                    <div className="space-y-2 lgx:w-[50%] xssm:w-[90%] w-[100%]">
                        <p className="font-paragraphFont xssm:text-[24px] text-[20px] font-semibold">{eventSection?.paragraph}</p>
                        <Link to="/events" className="flex items-center space-x-2 font-paragraphFont font-semibold xssm:text-[16px] text-[15px]">
                            View All
                            <FaChevronRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Upcoming events */}
                <div className="mt-6">
                    <FeaturedEvents/>
                    {/* Upcoming events cards */}
                 
                </div>

            </div>
        </>
    );
}

export default UpcomingEvents;