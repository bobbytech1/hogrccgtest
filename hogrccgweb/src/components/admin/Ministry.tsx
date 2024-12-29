import { useState } from 'react';

const MinistryTab = () => {
  const [ministryData, setMinistryData] = useState({
    id: '', // Leave empty for creating a new ministry
    title: '',
    description: '',
    image: '',
    form_link: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMinistryData({
      ...ministryData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/ministries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ministryData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Ministry successfully saved!');
        setMinistryData({
          id: '',
          title: '',
          description: '',
          image: '',
          form_link: '',
        });
      } else {
        alert(result.message || 'Failed to save ministry.');
      }
    } catch (error) {
      alert('An error occurred while saving the ministry.');
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create or Update Ministry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Ministry ID (optional, for updates) */}
        <input
          type="text"
          name="id"
          value={ministryData.id}
          onChange={handleChange}
          placeholder="Ministry ID (leave empty for new ministry)"
          className="w-full p-2 border rounded-md"
        />

        {/* Title */}
        <input
          type="text"
          name="title"
          value={ministryData.title}
          onChange={handleChange}
          placeholder="Ministry Title"
          className="w-full p-2 border rounded-md"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          value={ministryData.description}
          onChange={handleChange}
          placeholder="Ministry Description"
          className="w-full p-2 border rounded-md"
          rows={6}
          required
        ></textarea>

        {/* Image */}
        <input
          type="url"
          name="image"
          value={ministryData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded-md"
        />

        {/* Form Link */}
        <input
          type="url"
          name="form_link"
          value={ministryData.form_link}
          onChange={handleChange}
          placeholder="Form Link"
          className="w-full p-2 border rounded-md"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
        >
          Save Ministry
        </button>
      </form>
    </div>
  );
};

export default MinistryTab;
