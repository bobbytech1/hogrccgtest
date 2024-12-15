import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ImageData } from '../../data';


function SampleNextArrow(props:any) {
    const {onClick} = props
    return (
        <button className="absolute top-1/2 flex justify-center items-center right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none z-10" onClick={onClick}>
          <FaChevronRight size={25} />
        </button>
      )
  }
  
  function SamplePrevArrow(props:any) {
    const {onClick} = props
    return (
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none z-10" onClick={onClick}>
        <FaChevronLeft size={25} />
      </button>
    );
  }




const ImageCarousel:  React.FC =() => {


  const settings = {
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto scroll
    autoplaySpeed: 5000, // Scroll speed in milliseconds
    dots: false, // Show dots for navigation
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,
    
  };

  return (
    <div className="md:px-10 px-6">
      <div className="relative w-full max-w-4xl mx-auto pt-40">
      {/* React Slick Carousel */}
      <Slider {...settings}>
        {ImageData.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 w-full">
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>

  );
};

export default ImageCarousel;
