import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MinistriesData } from "../../data";
import CustomButton from "../Button/CustomButton";
const HomeMinistries = () => {
    return ( 
        <>
            <div className="mt-6">
            <div className="flex lgx:flex-row flex-col lgx:items-center items-start space-y-6 justify-between lgx:space-x-11">
          <div className="lgx:w-[50%] xssm:w-[90%] w-[100%] space-y-2">
            <h3 className="font-headingFont xssm:text-[18px] text-[16px] font-medium uppercase">
              MINISTRIES
            </h3>
            <h2 className="font-paragraphFont xssm:text-[32px] text-[28px] font-bold">
            We are a church dedicated to walking with God.
            </h2>
          </div>
          <div className="space-y-2 lgx:w-[50%] xssm:w-[90%] w-[100%]">
            <p className="font-paragraphFont xssm:text-[24px] text-[20px] font-semibold">
            We believe that what makes church special is not only the Sunday sermon, but also the spiritual connections we build with God and each other.
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

        {/* Ministries section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6 mt-5">
      {MinistriesData.map((ministry) => (
        <div
          key={ministry.id}
          className="relative w-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
        >
          {/* Background Image */}
          <img
            src={ministry.imageUrl}
            alt={ministry.title}
            className="w-full md:h-[100vh] h-[80vh] object-cover"
          />

          {/* Overlay */}
          {/* Overlay at the bottom */}
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 flex items-start md:p-8 p-5">
            <div className="text-white md:space-y-5 space-y-4">
              <h3 className="font-headingFont md:text-[24px] text-[22px] font-semibold">{ministry.title}</h3>
              <p className="font-paragraphFont md:text-[16px] text-[15px] font-normal">{ministry.description}</p>
             <CustomButton txt="More Details" btnStyle="py-1" txtStyle="text-[14px]" to="/ministries" icon={<FaChevronRight/>}/>
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