import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
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

            </div>
        </>
     );
}
 
export default HomeMinistries;