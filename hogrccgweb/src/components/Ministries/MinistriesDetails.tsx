import NavBar from "../Header/NavBar";
import Loader from "../Loader";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface Ministry {
  id: number;
  title: string;
  description: string;
  image: string;
  form_link: string;
  created_at: string;
  updated_at: string;
}

// Function to fetch ministry details by ID
const fetchMinistryById = async (id: string): Promise<Ministry> => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}api/admin/ministry/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch ministry");
  }
  const data = await response.json();
  return data.ministry;
};

const MinistryDetails = () => {
  const { id } = useParams();

  const { data: ministry, isLoading, error } = useQuery<Ministry>({
    queryKey: ["ministry", id],
    queryFn: () => fetchMinistryById(id!),
    staleTime: 300000, // Cache for 5 minutes
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div><Loader /></div>;
  if (error) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center h-screen font-headingFont">Error loading blog details.</div>;
  if (!ministry) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center h-screen font-headingFont">No blog found.</div>;

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={ministry.image}
              alt={ministry.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section: Ministry Details */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-center mb-4 font-headingFont">{ministry.title}</h1>
            <div className="text-sm text-gray-600 text-center mb-4 font-linkFont">
              <p>Created At: {new Date(ministry.created_at).toLocaleDateString()}</p>
              <p>Updated At: {new Date(ministry.updated_at).toLocaleDateString()}</p>
            </div>
            <hr className="my-4 border-gray-300" />
            <p className="text-justify leading-relaxed mb-4 font-paragraphFont">{ministry.description}</p>

            {/* Embed the Microsoft Form using iframe if available */}
            {ministry.form_link && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 font-headingFont">Join the Ministry</h2>
                <iframe
                  src={ministry.form_link}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="border-0"
                  title="Ministry Registration Form"
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

export default MinistryDetails;
