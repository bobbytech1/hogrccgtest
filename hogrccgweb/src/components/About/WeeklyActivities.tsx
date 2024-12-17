import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CustomButton from "../Button/CustomButton";
import { Eventdata } from "../../data";
import { Box } from "@mui/joy";

const WeeklyActivities = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 bg-white mb-8">
        <h1 className="font-headingFont mb-4 text-[#121926] font-[600] uppercase text-start text-2xl xssm:text-3xl sm:text-4xl lgx:text-3xl lg:text-4xl xl:text-5xl">
          Weekly Activites
        </h1>

        <Box sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
        gap: 2,
      }}>
        {Eventdata.map((event) => (
             <Card variant="outlined" sx={{backgroundColor: "#ffffff"}} key={event.id}>
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
                 <div className="flex items-center justify-end pt-3 ">
                 <CustomButton txt="view more" to="/events" btnStyle="md:py-[7px] py-[5px]" txtStyle="md:text-[13px] text-[10px] uppercase"/>
                 </div>
             </div>
         </Card>
        ))}
                   
                    </Box>
      </div>
    </>
  );
};

export default WeeklyActivities;
