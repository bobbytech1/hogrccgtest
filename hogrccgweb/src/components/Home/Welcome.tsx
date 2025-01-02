import CustomButton from "../Button/CustomButton";
import { FaChevronRight } from "react-icons/fa6";
import { usePageContent } from '../../hooks/usePageContent';

const Welcome = () => {
  const { data, isLoading } = usePageContent('home-page');

  if (isLoading) return <div>Loading...</div>;
  const {welcome} = data?.content || {};
  return (
    <>
    <div className="bg-[#ffffff] flex lgx:flex-row flex-col lgx:items-center justify-center lgx:justify-between mt-14 space-y-16 md:px-10 px-6 pt-6 pb-10">
        <div className="flex lgx:items-start lgx:justify-start justify-center items-center">
          <img
            src={welcome?.image}
            alt="Welcome Image"
            className="xl:h-[80vh] lg:h-[70vh] lgx:h-[60vh] md:h-[80vh] xssm:h-[70vh] h-[60vh] w-auto rounded-tl-[350px] rounded-bl-[350px] rounded-br-[350px]"
          />
        </div>
        <div className="lgx:w-[40%] w-[100%]">
          <h1 className="font-headingFont text-[#121926] font-[600] text-start text-2xl xssm:text-3xl sm:text-4xl capitalize lgx:text-3xl lg:text-4xl xl:text-5xl">{welcome?.heading}</h1>
          <h2 className="font-headingFont text-hogblue font-[500 capitalize text-xl xssm:text-2xl text-start  lgx:text-xl lg:text-2xl xl:text-3xl pt-4">{welcome?.subtitle}</h2>
          <p className="font-paragraphFont text-[#121926] font-[500] text-start text-[17px] xssm:text-[18px] lgx:text-[16px] lg:text-[18px] py-8">
            <span>
            {welcome?.paragraph}
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
