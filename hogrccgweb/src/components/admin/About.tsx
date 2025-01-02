import React, { useState } from "react";
import usePostPageContent from "../../hooks/usePostPageContent";
import Section from "./Sections";

type FormData = {
  hero: { heading: string; paragraph: string; };
  masony: string[];
  picSection: { heading: string; paragraph: string; paragraph2: string; image: string };
  missionSection: { heading: string; paragraph: string; image: string; };
};

const AboutTab: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    hero: { heading: "", paragraph: "" },
    masony: Array(6).fill(""), // Array for 6 image links
    picSection: { heading: "", paragraph: "", paragraph2: "", image: "" },
    missionSection: { heading: "", paragraph: "", image: "" }
  });

  const { postPageContent, loading, error, success } = usePostPageContent();

  const handleChange = (section: keyof FormData, key: string, value: string, index?: number) => {
    if (section === "masony" && index !== undefined) {
      const updatedMasony = [...formData.masony];
      updatedMasony[index] = value;
      setFormData({ ...formData, masony: updatedMasony });
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [key]: value },
      });
    }
  };

  const handleSubmit = async () => {
    try {
        const slug = "about-page";
        const content = { ...formData };
    
        await postPageContent(slug, content);
    
        if (success) {
          alert("About page data updated successfully!");
        } else if (error) {
          console.error(error);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred.");
      }
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-700">Manage About Page</h1>

      {/* Hero Section */}
      <Section
        title="Hero Section"
        data={formData.hero}
        sectionKey="hero"
        onChange={(key, value) => handleChange("hero", key, value)}
      />


      {/* Masony Section */}
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold text-blue-700">Masony Section</h2>
        {formData.masony.map((image, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Image Link ${index + 1}`}
            value={image}
            onChange={(e) => handleChange("masony", "", e.target.value, index)}
            className="w-full p-2 border rounded-md mt-2"
          />
        ))}
      </div>

      {/* PIC Section */}
      <Section
        title="PIC Section"
        data={formData.picSection}
        sectionKey="picSection"
        onChange={(key, value) => handleChange("picSection", key, value)}
      />

      {/* Sermon Section */}
      <Section
        title="Mission and Vision Section"
        data={formData.missionSection}
        sectionKey="missionSection"
        onChange={(key, value) => handleChange("missionSection", key, value)}
      />


      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default AboutTab;
