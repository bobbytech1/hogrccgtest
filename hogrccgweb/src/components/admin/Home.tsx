import React, { useState } from "react";
import Section from "./Sections";

type FormData = {
  hero: { heading: string; paragraph: string; bgVideo: string };
  welcome: { image: string; heading: string; subtitle: string; paragraph: string };
  carousel: string[];
  eventSection: { heading: string; paragraph: string; image: string };
  sermonSection: { heading: string; paragraph: string; youtubeLink: string };
  section6: { heading: string; paragraph: string };
  section7: { heading: string; paragraph: string };
  section8: { heading: string; paragraph: string; formLink: string };
};

const HomeTab: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    hero: { heading: "", paragraph: "", bgVideo: "" },
    welcome: { image: "", heading: "", subtitle: "", paragraph: "" },
    carousel: Array(6).fill(""), // Array for 6 image links
    eventSection: { heading: "", paragraph: "", image: "" },
    sermonSection: { heading: "", paragraph: "", youtubeLink: "" },
    section6: { heading: "", paragraph: "" },
    section7: { heading: "", paragraph: "" },
    section8: { heading: "", paragraph: "", formLink: "" },
  });

  const handleChange = (section: keyof FormData, key: string, value: string, index?: number) => {
    if (section === "carousel" && index !== undefined) {
      const updatedCarousel = [...formData.carousel];
      updatedCarousel[index] = value;
      setFormData({ ...formData, carousel: updatedCarousel });
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [key]: value },
      });
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Home data updated successfully!");
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-700">Manage Home Page</h1>

      {/* Hero Section */}
      <Section
        title="Hero Section"
        data={formData.hero}
        sectionKey="hero"
        onChange={(key, value) => handleChange("hero", key, value)}
      />

      {/* Welcome Section */}
      <Section
        title="Welcome Section"
        data={formData.welcome}
        sectionKey="welcome"
        onChange={(key, value) => handleChange("welcome", key, value)}
      />

      {/* Carousel Section */}
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold text-blue-700">Carousel Section</h2>
        {formData.carousel.map((image, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Image Link ${index + 1}`}
            value={image}
            onChange={(e) => handleChange("carousel", "", e.target.value, index)}
            className="w-full p-2 border rounded-md mt-2"
          />
        ))}
      </div>

      {/* Event Section */}
      <Section
        title="Event Section"
        data={formData.eventSection}
        sectionKey="eventSection"
        onChange={(key, value) => handleChange("eventSection", key, value)}
      />

      {/* Sermon Section */}
      <Section
        title="Sermon Section"
        data={formData.sermonSection}
        sectionKey="sermonSection"
        onChange={(key, value) => handleChange("sermonSection", key, value)}
      />

      {/* Sections 6, 7, and 8 */}
      <Section
        title="Section 6"
        data={formData.section6}
        sectionKey="section6"
        onChange={(key, value) => handleChange("section6", key, value)}
      />
      <Section
        title="Section 7"
        data={formData.section7}
        sectionKey="section7"
        onChange={(key, value) => handleChange("section7", key, value)}
      />
      <Section
        title="Section 8"
        data={formData.section8}
        sectionKey="section8"
        onChange={(key, value) => handleChange("section8", key, value)}
      />

      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
      >
        Save Changes
      </button>
    </div>
  );
};

export default HomeTab;
