import { useState } from 'react';
import { apiFetch } from '../../../utils/api';

const SermonTab = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [sermonData, setSermonData] = useState({
    id: '', // Leave empty for creating a new sermon
    title: '',
    category: '',
    content: '',
    image: '',
    video: '',
    speaker: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSermonData({
      ...sermonData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiFetch(`${apiUrl}api/admin/sermon`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sermonData),
      });

      // If the response is an object, skip checking for headers
      if (response && response.message) {
        alert(response.message || 'Sermon saved successfully!');
        window.location.reload();
        setSermonData({
          id: '',
          title: '',
          category: '',
          content: '',
          image: '',
          video: '',
          speaker: '',
          date: '',
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
      <h2 className="text-2xl font-bold mb-4">Create or Update Sermon</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          value={sermonData.id}
          onChange={handleChange}
          placeholder="Sermon ID (leave empty for new sermon)"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="title"
          value={sermonData.title}
          onChange={handleChange}
          placeholder="Sermon Title"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="category"
          value={sermonData.category}
          onChange={handleChange}
          placeholder="Sermon Category"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          name="content"
          value={sermonData.content}
          onChange={handleChange}
          placeholder="Sermon Content"
          className="w-full p-2 border rounded-md"
          rows={6}
          required
        ></textarea>
        <input
          type="url"
          name="image"
          value={sermonData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="url"
          name="video"
          value={sermonData.video}
          onChange={handleChange}
          placeholder="Video URL"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="speaker"
          value={sermonData.speaker}
          onChange={handleChange}
          placeholder="Speaker Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="date"
          name="date"
          value={sermonData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className={`w-full py-2 text-white rounded-md ${
            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'
          }`}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Sermon'}
        </button>
      </form>
    </div>
  );
};

export default SermonTab;
