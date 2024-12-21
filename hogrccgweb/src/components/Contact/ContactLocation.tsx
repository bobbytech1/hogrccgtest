const ContactLocation = () => {
    return (
        <>
            <div className="bg-white py-16">
  {/* Section Heading */}
  <div className="text-center mb-8 px-10">
    <h2 className="text-4xl font-bold text-gray-800 font-headingFont">
      Our Location
    </h2>
    <p className="text-gray-600 text-lg font-paragraphFont">
      Find us at the heart of the city. Visit us anytime!
    </p>
  </div>

  {/* Map Embed */}
  <div className="container mx-auto px-6 lg:px-20">
    <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7188484952744!2d3.2623898!3d6.557132499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ff9e20110f9%3A0x47eaca21c9a10eec!2s62%20Idowu%20Anishere%20St%2C%20off%20Governor&#39;s%20Road%2C%20Ikotun%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1734749974995!5m2!1sen!2sng"
        width="100%"
        height="450"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        title="Google Maps Location"
      ></iframe>
    </div>
  </div>
</div>

        </>
    )
}

export default ContactLocation;