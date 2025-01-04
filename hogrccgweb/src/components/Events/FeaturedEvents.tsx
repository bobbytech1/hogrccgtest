import { useEvents, getClosestEvents } from "../../hooks/useEvents";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CustomButton from "../Button/CustomButton";
import { Box } from "@mui/joy";

const FeaturedEvents = () => {
  const { data: events, isLoading, isError } = useEvents();

  if (isLoading) return <p>Loading closest events...</p>;
  if (isError) return <p>Failed to load events. Please try again later.</p>;

  const closestEvents = events ? getClosestEvents(events) : [];

  return (
    <>
      <div className="sm:px-10 px-5 py-8">
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
            gap: 2,
          }}
        >
          {closestEvents.length > 0 ? (
            closestEvents.map((event) => (
              <Card key={event.id} variant="outlined" sx={{ backgroundColor: "#ffffff" }}>
                {/* Event Image */}
                <AspectRatio>
                  <div>
                    <img src={event.image} className="h-[50vh]" alt={event.title} />
                  </div>
                </AspectRatio>

                {/* Event Details */}
                <div>
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

                  <Typography
                    level="body-sm"
                    sx={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 4, // Limit to 4 lines
                      WebkitBoxOrient: "vertical",
                      marginTop: "4px",
                      fontSize: "14px",
                    }}
                  >
                    {event.description}
                  </Typography>

                  <Typography level="body-sm" sx={{ marginTop: "8px" }}>
                    <strong>Date:</strong> {event.date}
                  </Typography>

                  <Typography level="body-sm">
                    <strong>Time:</strong> {event.time}
                  </Typography>

                  <Typography level="body-sm">
                    <strong>Location:</strong> {event.location}
                  </Typography>

                  <div className="flex items-center justify-end pt-3">
                    <CustomButton
                      txt="view more"
                      to="/events"
                      btnStyle="md:py-[7px] py-[5px]"
                      txtStyle="md:text-[13px] text-[10px] uppercase"
                    />
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Typography>No upcoming events available.</Typography>
          )}
        </Box>
      </div>
    </>
  );
};

export default FeaturedEvents;
