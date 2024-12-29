import { useState } from 'react';

const EventTab = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    time: '',
    location: '',
    image: '',
    form_link: '',
    date: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setEventData({
          title: '',
          description: '',
          time: '',
          location: '',
          image: '',
          form_link: '',
          date: '',
        });
      } else {
        setMessage(result.message || 'An error occurred while saving the event.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Create or Update Event</h2>
      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          placeholder="Event Title"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
          placeholder="Event Description"
          className="w-full p-2 border rounded-md"
          rows={4}
          required
        />
        <input
          type="text"
          name="time"
          value={eventData.time}
          onChange={handleChange}
          placeholder="Event Time"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          placeholder="Event Location"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="image"
          value={eventData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="form_link"
          value={eventData.form_link}
          onChange={handleChange}
          placeholder="Form Link (optional)"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          placeholder="Event Date"
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className={`w-full p-2 text-white rounded-md ${
            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'
          }`}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Event'}
        </button>
      </form>
    </div>
  );
};

export default EventTab;
