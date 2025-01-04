import { usePageContentContact } from '../../hooks/usePageContentContact';
const ContactTouch = () => {
  const { data, isLoading } = usePageContentContact('contact-page');
    
  if (isLoading) return <div>Loading...</div>;
  const {conSection} = data?.content || {};
    return (
        <>
            <div className="bg-gray-100 py-16">
  {/* Heading */}
  <div className="text-center mb-8 px-10">
    <h2 className="text-4xl font-bold text-gray-800 font-headingFont mb-2">
     {conSection?.heading}
    </h2>
    <p className="text-gray-600 text-lg font-paragraphFont">
    {conSection?.paragraph}
    </p>
  </div>

  {/* Two Columns */}
  <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Column - Image */}
    <div>
      <img
        src={conSection?.image}
        alt="Placeholder Left"
        className="rounded-lg shadow-lg w-full"
      />
    </div>

    {/* Right Column - Image */}
    <div>
    <iframe
            width="640px"
            height="480px"
            src={conSection?.image2}
            frameBorder="0"
            className="border-none max-w-[100%] max-h-[100vh] my-10"
            allowFullScreen
          >
            {" "}
    </iframe>
    </div>
  </div>
</div>

        </>
    )
}

export default ContactTouch;