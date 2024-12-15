import { FaLocationDot } from "react-icons/fa6";

const HomeContact = () => {
  return (
    <>
      <div className="my-10 md:px-10 px-6 bg-white py-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-headingFont lgx:w-[80%] w-[100%] text-[#121926] font-[600] text-start lgx:text-center text-2xl xssm:text-3xl sm:text-4xl lgx:text-3xl lg:text-4xl xl:text-5xl">
            We would like to hear from you
          </h2>
          <p className="font-paragraphFont lgx:w-[80%] w-[100%] text-[#121926] font-[500] text-start lgx:text-center text-[17px] xssm:text-[18px] lgx:text-[16px] lg:text-[18px] py-2">
            You can reach out to us with the form below Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Quidem sunt fugit consectetur
            eveniet, eaque vero hic ducimus nihil, dolorum culpa cumque
            voluptates fuga quia, dolore recusandae quod quisquam sint.
            Dignissimos velit autem commodi tempore deserunt rem facilis?
            Maiores, distinctio suscipit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://via.placeholder.com/300x200"
            alt=""
            className="md:h-[80vh] h-[60vh] my-8"
          />
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
