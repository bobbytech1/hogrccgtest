import { usePageContentAbout } from '../../hooks/usePageContentAbout';

const MissionandVision = () => {
  const { data, isLoading } = usePageContentAbout('about-page');
  
  if (isLoading) return <div>Loading...</div>;
  const {missionSection} = data?.content || {};
  return (
    <>
        <div className="bg-[#ffffff] flex lgx:flex-row flex-col lgx:items-center justify-center lgx:justify-between mt-14 space-y-16 md:px-10 px-6 pt-6 pb-10">
        <div className="lgx:w-[40%] w-[100%]">
          <h1 className="font-headingFont uppercase text-[#121926] font-[600] text-start text-2xl xssm:text-3xl sm:text-4xl lgx:text-3xl lg:text-4xl xl:text-5xl">
            {missionSection?.heading}
          </h1>
          <p className="font-paragraphFont text-[#121926] font-[500] text-start text-[17px] xssm:text-[18px] lgx:text-[16px] lg:text-[18px] py-8">
            {missionSection?.paragraph
              ?.split('\n') // Split the paragraph into lines
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </div>
        <div className="lgx:w-[50%] w-[100%] flex lgx:items-start lgx:justify-start justify-center items-center">
          <img
            src={missionSection?.image}
            alt="Mission Section Image"
            className="xl:h-[80vh] lg:h-[60vh] lgx:h-[50vh] md:h-[80vh] xssm:h-[60vh] h-[50vh] w-auto "
          />
        </div>
      </div>
    </>
  );
};

export default MissionandVision;
