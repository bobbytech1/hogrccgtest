import { usePageContentAbout } from '../../hooks/usePageContentAbout';

const Whoweare = () => {
    const { data, isLoading } = usePageContentAbout('about-page');
  
    if (isLoading) return <div>Loading...</div>;
    const {hero, masony} = data?.content || {};


  return (
    <>
      <div className="md:pt-20 pt-10 bg-white flex justify-center items-center flex-col">
        <div className="xssm:px-12 px-6 lgx:w-[80%] xmd:w-[90%] w-[100%]">
          <h2 className="font-paragraphFont text-[15px] text-[#4b5565] uppercase font-[600] pb-1">who we are</h2>
          <h2 className="font-headingFont text-hogblack xmd:text-[64px] xssm:text-[50px] text-[40px] font-[600] pb-1">
           {hero?.heading}
          </h2>
          <p className="font-paragraphFont xmd:text-[22px] xssm:text-[20px] text-[18px] text-hogblack font-[500]">
            {hero?.paragraph}
          </p>
        </div>
        <div className="container mx-auto p-4 my-10">
      <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-6">
        {masony?.map((image, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <img
              src={image}
              alt={`Masony Image ${index + 1}`}
              className="w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </>
  );
};

export default Whoweare;
