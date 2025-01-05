import NavBar from "../components/Header/NavBar";
import { FaChevronRight } from "react-icons/fa";
import { useMinistries } from "../hooks/useMinistries";
import { usePageContent } from '../hooks/usePageContent';
import CustomButton from "../components/Button/CustomButton";
import Footer from "../components/Footer/Footer";

const Ministries = () => {
  const { data: ministries, isLoading, error } = useMinistries();
  const { data } = usePageContent('home-page');
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { section6 } = data?.content || {}; 
  if (error) {
    return (
      <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center">
        Network Error. Could not load resources.
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="bg-[#F7F7F7]">
        <div className="mt-6 md:px-10 px-6 pb-12 bg-[#FFFFFF] pt-6">
          {/* Introduction Section */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start space-y-6 justify-between lg:space-x-11">
            <div className="lg:w-[50%] sm:w-[90%] w-full space-y-2">
              <h3 className="font-headingFont sm:text-[18px] text-[16px] font-medium uppercase">
                MINISTRIES
              </h3>
              <h2 className="font-paragraphFont sm:text-[32px] text-[28px] font-bold">
              {section6?.heading}
              </h2>
            </div>
            <div className="space-y-2 lg:w-[50%] sm:w-[90%] w-full">
              <p className="font-paragraphFont sm:text-[24px] text-[20px] font-semibold">
              {section6?.paragraph}
              </p>
            </div>
          </div>

          {/* Ministries Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
            {ministries?.map((ministry) => (
              <div
                key={ministry.id}
                className="relative w-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
              >
                {/* Background Image */}
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full md:h-[80vh] h-[60vh] object-cover"
                />

                {/* Overlay at the bottom */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 flex items-start md:p-8 p-5">
                  <div className="text-white md:space-y-5 space-y-4">
                    <h3 className="font-headingFont md:text-[24px] text-[22px] font-semibold">
                      {ministry.title}
                    </h3>
                    <p className="font-paragraphFont md:text-[16px] text-[15px] font-normal">
                      {ministry.description}
                    </p>
                    <CustomButton
                      txt="More Details"
                      btnStyle="py-1"
                      txtStyle="text-[14px]"
                      to={`/ministries/${ministry.id}`}
                      icon={<FaChevronRight />}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ministries;
