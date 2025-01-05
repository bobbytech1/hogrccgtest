import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMinistries } from "../../hooks/useMinistries";
import { usePageContent } from '../../hooks/usePageContent';
import CustomButton from "../Button/CustomButton";
const HomeMinistries = () => {
  const { data, isLoading } = usePageContent('home-page');
  const { data: ministries} =  useMinistries()
  if (isLoading) return <div>Loading...</div>;

  const { section6 } = data?.content || {}; 
    return ( 
        <>
            <div className="mt-6 md:px-10 px-6 pb-12 bg-[#FFFFFF] pt-6">
            <div className="flex lgx:flex-row flex-col lgx:items-center items-start space-y-6 justify-between lgx:space-x-11">
          <div className="lgx:w-[50%] xssm:w-[90%] w-[100%] space-y-2">
            <h3 className="font-headingFont xssm:text-[18px] text-[16px] font-medium uppercase">
              MINISTRIES
            </h3>
            <h2 className="font-paragraphFont xssm:text-[32px] text-[28px] font-bold">
            {section6?.heading}
            </h2>
          </div>
          <div className="space-y-2 lgx:w-[50%] xssm:w-[90%] w-[100%]">
            <p className="font-paragraphFont xssm:text-[24px] text-[20px] font-semibold">
            {section6?.paragraph}
            </p>
            <Link
              to="/ministries"
              className="flex items-center space-x-2 font-paragraphFont font-semibold xssm:text-[16px] text-[15px]"
            >
              View All
              <FaChevronRight size={14} />
            </Link>
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
        </>
     );
}
 
export default HomeMinistries;