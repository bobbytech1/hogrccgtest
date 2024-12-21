const Sermon = () => {
  return (
    <>
      <div className="md:pt-20 pt-10 bg-white flex justify-center items-center flex-col">
        <div className="xssm:px-12 px-6 lgx:w-[80%] xmd:w-[90%] w-[100%]">
          <h2 className="font-paragraphFont text-[15px] text-[#4b5565] uppercase font-[600] pb-1">
            sermons
          </h2>
          <h2 className="font-headingFont text-hogblack xmd:text-[64px] xssm:text-[50px] text-[32px] font-[600] pb-1">
          Discover powerful messages and teachings to inspire your{" "}
            <span className="text-hogblue">faith journey </span>well.
          </h2>
          <p className="font-paragraphFont xmd:text-[22px] xssm:text-[20px] text-[18px] text-hogblack font-[500]">
            At the Redeemed Christian Church of God Hope of Glory, we are
            passionate about making God known and shining a bright light in the
            world around us as we follow Jesus’s example of doing good.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sermon;
