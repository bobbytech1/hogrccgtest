import { FaChevronRight } from "react-icons/fa6";
import { usePageContent } from '../../hooks/usePageContent';

const Hero = () => {
  const { data, isLoading } = usePageContent('home-page');

  if (isLoading) return <div>Loading...</div>;
  const {hero} = data?.content || {};
    return ( 
        <>
             <div className="relative w-full h-screen" id="hero">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={hero?.bgVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Dark Gray Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60"></div>

{/* Content Overlay */}
<div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-8">
  <h1 className="xssm:text-5xl xxm:text-5xl xxim:text-4xl text-3xl md:text-7xl lg:text-8xl font-bold mb-4 capitalize font-headingFont xl:max-w-[80%] xssm:w-[85%] w-[100%]">
   {hero?.heading}
  </h1>
  <p className="xxm:text-[20px] xxim:text-[18px] text-[16px] xssm:text-2xl md:text-3xl md:w-[60%] w-[90%] font-paragraphFont mb-4">
  {hero?.paragraph}
  </p>
  <a href="https://maps.app.goo.gl/3s8wUfJ4FEBvtizR6" target="_blank" rel="noopener noreferrer" className="font-linkFont flex items-center underline">
  Get Directions
  <FaChevronRight />
</a>
</div>

    </div>
        </>
     );
}
 
export default Hero;