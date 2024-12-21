import React from "react"
interface ComingSoonProps {
    backgroundImageUrl: string;
  }

const ComingSoon: React.FC<ComingSoonProps> = ({backgroundImageUrl}) => {
    return (
        <>
 <div className="relative flex items-center justify-center min-h-screen">
      {/* Container for the image */}
      <div
        className="w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Overlay on top of the image */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60"></div>
      </div>

      {/* Text content */}
      <div className="absolute text-center z-10 px-10">
        <h1 className="text-4xl font-headingFont font-bold text-white mb-2">Coming Soon</h1>
        <p className="text-lg text-white font-paragraphFont">Stay tuned! We're working hard to launch something new.</p>
      </div>
    </div>
        </>
    )
}

export default ComingSoon;