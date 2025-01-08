import {images} from "../constants"


const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative">
        {/* Spinning Circle */}
        <div className="w-24 h-24 border-4 border-blue-500 border-dotted rounded-full animate-spin-slow"></div>
        
        {/* Logo at the center */}
        <img
          src={images.LoaderLogo}
          alt="Logo"
          className="absolute top-1/2 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Loader;
