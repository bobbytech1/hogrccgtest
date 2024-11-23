import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CustomButton from "../Button/CustomButton";
import { Eventdata } from "../../data";
import { Box } from "@mui/joy";

const UpcomingEvents = () => {
    return (
        <>
            <div className="my-14">
                {/* Events heading content  */}
                <div className="flex lgx:flex-row flex-col lgx:items-center items-start space-y-6 justify-between lgx:space-x-11">
                    <div className="lgx:w-[50%] xssm:w-[90%] w-[100%] space-y-2">
                        <h3 className="font-headingFont xssm:text-[18px] text-[16px] font-medium">EVENTS</h3>
                        <h2 className="font-paragraphFont xssm:text-[32px] text-[28px] font-bold">We are a church dedicated to walking with God.</h2>
                    </div>
                    <div className="space-y-2 lgx:w-[50%] xssm:w-[90%] w-[100%]">
                        <p className="font-paragraphFont xssm:text-[24px] text-[20px] font-semibold">We believe that what makes church special is not only the Sunday sermon, but also the spiritual connections we build with God and each other.</p>
                        <Link to="/events" className="flex items-center space-x-2 font-paragraphFont font-semibold xssm:text-[16px] text-[15px]">
                            View All
                            <FaChevronRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Upcoming events */}
                <div className="flex flex-col justify-center items-center">
                    <img src="https://www.dropbox.com/scl/fi/exlokypfq4ugef2k4tsbw/IMG-20241123-WA0000.jpg?rlkey=9mm5ec1mmpg5qsjutvfpnzeiw&st=udxbtncc&raw=1" alt="Upcoming Events" className="py-20 lgx:h-[100vh] h-auto w-auto" />
                    {/* Upcoming events cards */}
                    <Box sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: 2,
      }}>
        {Eventdata.map((event) => (
             <Card variant="outlined" sx={{}} key={event.id}>
             <AspectRatio>
                 <div>
                     <img
                         src={event.image}
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
                     {event.title}
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
                    {event.description}
                 </Typography>
                 <div className="flex items-center justify-between pt-3 ">
                     <div className="flex items-center space-x-1">
                     <p className="font-paragraphFont md:text-[14px] text-[10px]">{event.date}</p>
                     </div>
                 <CustomButton txt="view more" to="/events" btnStyle="md:py-[7px] py-[5px]" txtStyle="md:text-[13px] text-[10px] uppercase"/>
                 </div>
             </div>
         </Card>
        ))}
                   
                    </Box>
                </div>

            </div>
        </>
    );
}

export default UpcomingEvents;