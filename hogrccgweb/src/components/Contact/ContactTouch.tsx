const ContactTouch = () => {
    return (
        <>
            <div className="bg-gray-100 py-16">
  {/* Heading */}
  <div className="text-center mb-8 px-10">
    <h2 className="text-4xl font-bold text-gray-800 font-headingFont mb-2">
      Get in Touch with Us
    </h2>
    <p className="text-gray-600 text-lg font-paragraphFont">
      We'd love to hear from you. Feel free to reach out at any time!
    </p>
  </div>

  {/* Two Columns */}
  <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Column - Image */}
    <div>
      <img
        src="https://via.placeholder.com/600x400"
        alt="Placeholder Left"
        className="rounded-lg shadow-lg w-full"
      />
    </div>

    {/* Right Column - Image */}
    <div>
      <img
        src="https://via.placeholder.com/600x400"
        alt="Placeholder Right"
        className="rounded-lg shadow-lg w-full"
      />
    </div>
  </div>
</div>

        </>
    )
}

export default ContactTouch;