import NavBar from "../Header/NavBar";
import Loader from "../Loader";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface Event {
  id: number;
  title: string;
  description: string;
  time: string;
  location: string;
  image: string;
  form_link: string;
  date: string;
  created_at: string;
  updated_at: string;
}

const EventDetails = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const fetchEventById = async (id: string): Promise<Event> => {
    const response = await fetch(`${apiUrl}api/admin/events/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch event");
    }
    return response.json();
  };

  const { data: event, isLoading, error } = useQuery<Event>({
    queryKey: ["event", id],
    queryFn: () => fetchEventById(id!),
    staleTime: 300000, // Cache for 5 minutes
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div><Loader /></div>;
  if (error) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center h-screen font-headingFont">Error loading blog details.</div>;
  if (!event) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center h-screen font-headingFont">No blog found.</div>;

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section: Event Details */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-center mb-4 font-headingFont">{event.title}</h1>
            <div className="text-sm text-gray-600 text-center mb-4 font-linkFont">
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>Time: {event.time}</p>
              <p>Location: {event.location}</p>
            </div>
            <hr className="my-4 border-gray-300" />
            <p className="text-justify leading-relaxed mb-4 font-paragraphFont">{event.description}</p>

            {/* Embed the Microsoft Form using iframe */}
            {event.form_link && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4">Register for the Event</h2>
                <iframe
                  src={event.form_link}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="border-0"
                  title="Event Registration Form"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
