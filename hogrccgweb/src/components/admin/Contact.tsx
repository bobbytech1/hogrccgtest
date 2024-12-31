import React, { useState } from "react";
import Section from "./Sections";

type FormData = {
  hero: { heading: string; paragraph: string; bgimage: string; };
  conSection: { heading: string; paragraph: string; image: string; image2: string };
};

const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    hero: { heading: "", paragraph: "", bgimage: "" },
    conSection: { heading: "", paragraph: "", image: "", image2: "" },
  });

  const handleChange = (section: keyof FormData, key: string, value: string, index?: number) => {
    if (index !== undefined) {
      setFormData({ ...formData});
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [key]: value },
      });
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("About data updated successfully!");
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


      {/* PIC Section */}
      <Section
        title="Contact Section"
        data={formData.conSection}
        sectionKey="conSection"
        onChange={(key, value) => handleChange("conSection", key, value)}
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

export default ContactTab;
