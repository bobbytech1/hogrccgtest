import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CustomButton from "../Button/CustomButton";
import { Box } from "@mui/joy";

const EventsCal = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null | [Date, Date]>(
    null
  );

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

  const filteredEvents = events.filter((event) => {
    if (!selectedDate) return true; // Show all events if no date is selected

    const eventDate = new Date(event.date).toDateString();

    if (selectedDate instanceof Date) {
      return eventDate === selectedDate.toDateString();
    } else if (Array.isArray(selectedDate)) {
      return eventDate === selectedDate[0].toDateString();
    }

    return false;
  });

  return (
    <div className="bg-white mt-10 sm:px-10 px-5 py-8">
      {/* Calendar Section */}
      <div className="container mx-auto px-4 mb-8 flex justify-center">
        <Calendar
          onChange={(value) => {
            if (value instanceof Date) {
              setSelectedDate(value);
            } else if (Array.isArray(value)) {
              setSelectedDate(value[0]); // Use the start date if it's a range
            } else {
              setSelectedDate(null);
            }
          }}
          value={selectedDate}
          className="border-none shadow-lg rounded-lg font-headingFont sm:w-[60%] w-auto"
          tileClassName="p-2 hover:bg-green-500 transition-all duration-200"
        />
      </div>

      {/* Event Cards Section */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
          gap: 2,
        }}
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
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
          ))
        ) : (
          // Fallback Message if No Events Found
          <Typography
            level="h4"
            sx={{
              textAlign: "center",
              marginTop: "20px",
              color: "gray",
              fontWeight: "500",
            }}
          >
            No events found for the selected date.
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default EventsCal;
