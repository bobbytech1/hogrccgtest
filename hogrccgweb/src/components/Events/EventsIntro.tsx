import { usePageContentEvent } from '../../hooks/usePageContentEvent';
const EventIntro = () => {
      const { data, isLoading } = usePageContentEvent('event-page');
    
      if (isLoading) return <div>Loading...</div>;
      const {hero} = data?.content || {};
    return (
        <>
      <div className="md:pt-14 pt-10 sm:px-10 px-5 bg-white flex justify-center items-center flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-hogblack font-headingFont">{hero?.heading}</h1>
        <p className="text-lg text-gray-600 mt-2 font-paragraphFont">
          {hero?.paragraph}
        </p>
      </div>
      </div>
        </>
    )
}

export default EventIntro;