import CustomButton from "../Button/CustomButton";
import { FaChevronRight } from "react-icons/fa6";

const Welcome = () => {
  return (
    <>
    <div className="bg-[#ffffff] flex lgx:flex-row flex-col lgx:items-center justify-center lgx:justify-between mt-14 space-y-16 md:px-10 px-6 pt-6 pb-10">
        <div className="flex lgx:items-start lgx:justify-start justify-center items-center">
          <img
            src="https://www.dropbox.com/scl/fi/jqiuixvre0vmwgmunswnf/033A1041.jpg?rlkey=rkrnagrv1twdnno3qf0v2oe5c&st=p0pgww93&raw=1"
            alt="Welcome Image"
            className="xl:h-[110vh] lg:h-[90vh] lgx:h-[80vh] md:h-[110vh] xssm:h-[90vh] h-[60vh] w-auto rounded-tl-[350px] rounded-bl-[350px] rounded-br-[350px]"
          />
        </div>
        <div className="lgx:w-[40%] w-[100%]">
          <h1 className="font-headingFont text-[#121926] font-[600] text-start text-2xl xssm:text-3xl sm:text-4xl lgx:text-3xl lg:text-4xl xl:text-5xl">Welcome to RCCG (HOG)</h1>
          <h2 className="font-headingFont text-hogblue font-[500 text-xl xssm:text-2xl text-start  lgx:text-xl lg:text-2xl xl:text-3xl pt-4"> We’re glad you’re here</h2>
          <p className="font-paragraphFont text-[#121926] font-[500] text-start text-[17px] xssm:text-[18px] lgx:text-[16px] lg:text-[18px] py-8">
            <span>
            Jesus was a simple man with a simple plan to make God known.
            Together, we constantly look at Jesus through God’s Word, inspired
            to become whatever destiny requires so tha+t we can give hope to the
            many still unfamiliar with God’s amazing love. 
            We do this by
            building a community rooted in the Bible, fostering deep spiritual
            friendships, and doing good in our community.  
            </span>
            <br/>
            <br/>
            <span>
             We meet on <span className="underline">Sunday</span> for
            celebration service, and on <span className="underline">Wednesday</span> for treasure mine where we
            study the word of God. We hope you will join us on of these days to
            fellowship with us.
            </span>
          </p>
          <div className="flex items-start justify-start ">
          <CustomButton btnStyle="" txtStyle="" txt="Who we are" to="/about" icon={<FaChevronRight/>}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
