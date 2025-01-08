import { useState } from 'react';
import { apiFetch } from '../../utils/api'; // Assuming you have the same utility function for API requests

const MinistryTab = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [ministryData, setMinistryData] = useState({
    id: '', // Leave empty for creating a new ministry
    title: '',
    description: '',
    image: '',
    form_link: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMinistryData({
      ...ministryData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiFetch(`${apiUrl}api/admin/ministry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ministryData),
      });

      // If the response is an object, skip checking for headers
      if (response && response.message) {
        alert(response.message || 'Ministry saved successfully!');
        window.location.reload();
        setMinistryData({
          id: '',
          title: '',
          description: '',
          image: '',
          form_link: '',
        });
      } else {
        alert('An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Network error. Please try again.', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create or Update Ministry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          value={ministryData.id}
          onChange={handleChange}
          placeholder="Ministry ID (leave empty for new ministry)"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="title"
          value={ministryData.title}
          onChange={handleChange}
          placeholder="Ministry Title"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          name="description"
          value={ministryData.description}
          onChange={handleChange}
          placeholder="Ministry Description"
          className="w-full p-2 border rounded-md"
          rows={6}
          required
        ></textarea>
        <input
          type="url"
          name="image"
          value={ministryData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="url"
          name="form_link"
          value={ministryData.form_link}
          onChange={handleChange}
          placeholder="Form Link"
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className={`w-full py-2 text-white rounded-md ${
            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'
          }`}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Ministry'}
        </button>
      </form>
    </div>
  );
};

export default MinistryTab;
