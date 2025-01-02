import { FaLocationDot } from "react-icons/fa6";
import { usePageContent } from "../../hooks/usePageContent";

const HomeContact = () => {
  const { data, isLoading } = usePageContent("home-page");
  if (isLoading) return <div>Loading...</div>;

  const { section8 } = data?.content || {};
  return (
    <>
      <div className="my-10 md:px-10 px-6 bg-white py-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-headingFont lgx:w-[80%] w-[100%] text-[#121926] font-[600] text-start lgx:text-center text-2xl xssm:text-3xl sm:text-4xl lgx:text-3xl lg:text-4xl xl:text-5xl">
            {section8?.heading}
          </h2>
          <p className="font-paragraphFont lgx:w-[80%] w-[100%] text-[#121926] font-[500] text-start lgx:text-center text-[17px] xssm:text-[18px] lgx:text-[16px] lg:text-[18px] py-2">
            {section8?.paragraph}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <iframe
            width="640px"
            height="480px"
            src={section8?.formLink}
            frameBorder="0"
            className="border-none max-w-[100%] max-h-[100vh] my-10"
            allowFullScreen
          >
            {" "}
          </iframe>
          <a
            href="https://maps.app.goo.gl/3s8wUfJ4FEBvtizR6"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center border-[2px]  border-hogblue hover:text-white hover:bg-hogblue hover:transition-all hover:duration-500 cursor-pointer px-4 py-3 rounded-[8px] w-fit font-linkFont"
          >
            View Location
            <FaLocationDot />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
