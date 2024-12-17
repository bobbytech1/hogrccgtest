const PIC = () => {
  return (
    <>
      <div className="sm:px-10 px-5 py-8 mt-10 bg-white">
        <div className="flex flex-col md:flex-row items-start bg-gray-50 rounded-lg overflow-hidden shadow-md">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/300x200"
              alt="PIC"
              className="w-full h-80 object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-2 px-4">
              <p className="text-sm font-semibold font-paragraphFont">Pastor In Charge of Area</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold text-hogblack mb-2 font-headingFont">
              Engr Olayinka
            </h2>
            <h3 className="text-[14px] text-hogblack mb-4 font-paragraphFont">PICA HOPE OF GLORY</h3>
            <p className="text-hogblack font-paragraphFont">
              "Celebrate the joy of Christmas by giving back to the community. A
              special gathering for our young believers to learn and discuss
              God’s word together. Join us for a heartfelt worship service as we
              come together to praise and grow in faith.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PIC;
