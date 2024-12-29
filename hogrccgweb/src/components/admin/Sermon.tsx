import { useState } from 'react';

const SermonTab = () => {
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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSermonData({
      ...sermonData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sermons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sermonData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Sermon successfully saved!');
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
        alert(result.message || 'Failed to save sermon.');
      }
    } catch (error) {
      alert('An error occurred while saving the sermon.');
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create or Update Sermon</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Sermon ID (optional, for updates) */}
        <input
          type="text"
          name="id"
          value={sermonData.id}
          onChange={handleChange}
          placeholder="Sermon ID (leave empty for new sermon)"
          className="w-full p-2 border rounded-md"
        />

        {/* Title */}
        <input
          type="text"
          name="title"
          value={sermonData.title}
          onChange={handleChange}
          placeholder="Sermon Title"
          className="w-full p-2 border rounded-md"
          required
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          value={sermonData.category}
          onChange={handleChange}
          placeholder="Sermon Category"
          className="w-full p-2 border rounded-md"
          required
        />

        {/* Content */}
        <textarea
          name="content"
          value={sermonData.content}
          onChange={handleChange}
          placeholder="Sermon Content"
          className="w-full p-2 border rounded-md"
          rows={6}
          required
        ></textarea>

        {/* Image */}
        <input
          type="url"
          name="image"
          value={sermonData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded-md"
        />

        {/* Video */}
        <input
          type="url"
          name="video"
          value={sermonData.video}
          onChange={handleChange}
          placeholder="Video URL"
          className="w-full p-2 border rounded-md"
        />

        {/* Speaker */}
        <input
          type="text"
          name="speaker"
          value={sermonData.speaker}
          onChange={handleChange}
          placeholder="Speaker Name"
          className="w-full p-2 border rounded-md"
          required
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={sermonData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
        >
          Save Sermon
        </button>
      </form>
    </div>
  );
};

export default SermonTab;
