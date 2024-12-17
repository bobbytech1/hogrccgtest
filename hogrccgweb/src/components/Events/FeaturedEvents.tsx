import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CustomButton from "../Button/CustomButton";
import { Box } from "@mui/joy";

const FeaturedEvents = () => {
    const events = [
        {
          id: 1,
          title: "Sunday Worship Service",
          date: "2024-12-24", // Format: YYYY-MM-DD
          time: "10:00 AM - 12:00 PM",
          location: "Main Church Auditorium",
          description:
            "Join us for a heartfelt worship service as we come together to praise and grow in faith.",
          image: "/images/sunday-worship.jpg", // Replace with your image path
        },
        {
          id: 2,
          title: "Youth Bible Study",
          date: "2024-12-29",
          time: "6:00 PM - 8:00 PM",
          location: "Youth Hall",
          description:
            "A special gathering for our young believers to learn and discuss God’s word together.",
          image: "/images/youth-bible-study.jpg", // Replace with your image path
        },
        {
          id: 3,
          title: "Christmas Outreach",
          date: "2024-12-25",
          time: "3:00 PM - 6:00 PM",
          location: "Community Center",
          description:
            "Celebrate the joy of Christmas by giving back to the community.",
          image: "/images/christmas-outreach.jpg",
        },
      ];
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
        {events.map((event) => (
          <Card
            key={event.id}
            variant="outlined"
            sx={{ backgroundColor: "#ffffff" }}
          >
            {/* Event Image */}
            <AspectRatio>
              <div>
                <img
                  src={event.image}
                  className="h-[50vh]"
                  alt={event.title}
                />
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
        ))}
      </Box>
            </div>
        </>
    )
}

export default FeaturedEvents;