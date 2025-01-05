import { FaChevronRight } from "react-icons/fa6";
import CustomButton from "../Button/CustomButton";
import { usePageContent } from '../../hooks/usePageContent';
import { useSermons, getLatestSermon } from "../../hooks/useSermon";
import { Link } from "react-router-dom";
const HomeSermons = () => {
  const { data, isLoading } = usePageContent('home-page');
  const { data: sermons } = useSermons();
  
  if (isLoading) return <div>Loading...</div>;

  const { sermonSection } = data?.content || {}; 
  const latestSermon = sermons ? getLatestSermon(sermons) : null;
  return (
    <>
      <div className="mt-6 mb-14 md:px-10 px-6">
        <div className="flex lgx:flex-row flex-col lgx:items-center items-start space-y-6 justify-between lgx:space-x-11">
          <div className="lgx:w-[50%] xssm:w-[90%] w-[100%] space-y-2">
            <h3 className="font-headingFont xssm:text-[18px] text-[16px] font-medium">
              SERMONS
            </h3>
            <h2 className="font-paragraphFont xssm:text-[32px] text-[28px] font-bold">
             {sermonSection?.heading}
            </h2>
          </div>
          <div className="space-y-2 lgx:w-[50%] xssm:w-[90%] w-[100%]">
            <p className="font-paragraphFont xssm:text-[24px] text-[20px] font-semibold">
            {sermonSection?.paragraph}
            </p>
            <Link
              to="/sermons"
              className="flex items-center space-x-2 font-paragraphFont font-semibold xssm:text-[16px] text-[15px]"
            >
              View All
              <FaChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* Sermons and past sermons */}
        <div className="">
          <div className="flex justify-center items-center my-10">
            <iframe
              width="560"
              height="315"
              src={latestSermon?.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* Previous sermon */}
          <div className="flex flex-col items-center justify-center">
            <CustomButton
              txt="View Past Sermons"
              to="/sermons"
              btnStyle=""
              txtStyle=""
              icon={<FaChevronRight />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSermons;
