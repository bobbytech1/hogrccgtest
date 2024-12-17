const Whoweare = () => {

  const images = [
   'https://www.dropbox.com/scl/fi/fcfbc1m5frl3w2cvgmkjk/033A4539.jpg?rlkey=mb963h0bhp5zxt4embkcumv70&st=qhqjxhmo&raw=1',
   'https://www.dropbox.com/scl/fi/d92z9gcubp0m3xy5g9rdr/033A4478.jpg?rlkey=eqvqcqbq8js0epe7sqf7t7nc8&st=afitksws&raw=1',
   'https://www.dropbox.com/scl/fi/4k2uafh483qsvf0x6wcwf/033A4809.jpg?rlkey=jooz4cwhcjjtoevn52cfn7m6w&st=64k1egk9&raw=1',
   'https://www.dropbox.com/scl/fi/ez6i3dy3ekqlnywkip29k/033A4786.jpg?rlkey=t1jnjv1mjyrbszc2w17jbjwhn&st=5p8dl5wh&raw=1',
   'https://www.dropbox.com/scl/fi/lsy7dwr00g9hakqyf553z/033A4643.jpg?rlkey=0qsyzwdvhotl31it4g7yhvfqi&st=p9q4g4dc&raw=1',
  ];

  return (
    <>
      <div className="md:pt-20 pt-10 bg-white flex justify-center items-center flex-col">
        <div className="xssm:px-12 px-6 lgx:w-[80%] xmd:w-[90%] w-[100%]">
          <h2 className="font-paragraphFont text-[15px] text-[#4b5565] uppercase font-[600] pb-1">who we are</h2>
          <h2 className="font-headingFont text-hogblack xmd:text-[64px] xssm:text-[50px] text-[40px] font-[600] pb-1">
            Discovering friends, family, and purpose as we <span className="text-hogblue">pursue God </span>together.
          </h2>
          <p className="font-paragraphFont xmd:text-[22px] xssm:text-[20px] text-[18px] text-hogblack font-[500]">
            At the Redeemed Christian Church of God Hope of Glory, we are passionate about making God
            known and shining a bright light in the world around us as we follow
            Jesus’s example of doing good.
          </p>
        </div>
        <div className="container mx-auto p-4 my-10">
      <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <img
              src={image}
              alt={`Masonry Image ${index + 1}`}
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
