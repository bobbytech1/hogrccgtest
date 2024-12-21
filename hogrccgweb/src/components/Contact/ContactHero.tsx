const ContactHero = () => {
    return (
        <>
            <div className="relative w-full h-screen" id="hero">
  {/* Photo Background */}
  <img
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://www.dropbox.com/scl/fi/fcfbc1m5frl3w2cvgmkjk/033A4539.jpg?rlkey=mb963h0bhp5zxt4embkcumv70&st=qhqjxhmo&raw=1" // Replace with your desired photo URL
    alt="Background"
  />

  {/* Dark Gray Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60"></div>

  {/* Content Overlay */}
  <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-8">
    <h1 className="xssm:text-5xl xxm:text-5xl text-3xl md:text-7xl lg:text-8xl font-bold mb-4 capitalize font-headingFont xl:w-[80%] xssm:w-[90%] w-[100%]">
      Spreading awareness of God
    </h1>
    <p className="xxm:text-[20px] text-[18px] xssm:text-2xl md:text-3xl md:w-[80%] w-[90%] font-paragraphFont mb-4">
      Come together with us at the Redeemed Christian Church of God (Hope of Glory) to encourage each other in loving God and spreading goodness.
    </p>
  </div>
</div>

        </>
    )
}

export default ContactHero;