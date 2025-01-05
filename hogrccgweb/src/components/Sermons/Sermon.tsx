import { usePageContentSermon } from '../../hooks/usePageContentSermon';

const Sermon = () => {
      const { data, isLoading } = usePageContentSermon('sermon-page');
    
      if (isLoading) return <div>Loading...</div>;
      const {hero} = data?.content || {};
  return (
    <>
      <div className="md:pt-20 pt-10 bg-white flex justify-center items-center flex-col">
        <div className="xssm:px-12 px-6 lgx:w-[80%] xmd:w-[90%] w-[100%]">
          <h2 className="font-paragraphFont text-[15px] text-[#4b5565] uppercase font-[600] pb-1">
            sermons
          </h2>
          <h2 className="font-headingFont text-hogblack xmd:text-[64px] xssm:text-[50px] text-[32px] font-[600] pb-1">
         {hero?.heading}
          </h2>
          <p className="font-paragraphFont xmd:text-[22px] xssm:text-[20px] text-[18px] text-hogblack font-[500]">
            {hero?.paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default Sermon;
