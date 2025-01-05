import { usePageContentAbout } from '../../hooks/usePageContentAbout';

const PIC = () => {
  const { data, isLoading } = usePageContentAbout('about-page');
  
  if (isLoading) return <div>Loading...</div>;
  const {picSection} = data?.content || {};
  return (
    <>
      <div className="sm:px-10 px-5 py-8 mt-10 bg-white">
        <div className="flex flex-col md:flex-row items-start bg-gray-50 rounded-lg overflow-hidden shadow-md">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src={picSection?.image}
              alt="PIC"
              className="w-full h-[40rem] object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-2 px-4">
              <p className="text-sm font-semibold font-paragraphFont">Pastor In Charge of Area</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold text-hogblack mb-2 font-headingFont">
              {picSection?.heading}
            </h2>
            <h3 className="text-[14px] text-hogblack uppercase mb-4 font-paragraphFont">{picSection?.paragraph}</h3>
            <p className="text-hogblack font-paragraphFont">
             {picSection?.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PIC;
