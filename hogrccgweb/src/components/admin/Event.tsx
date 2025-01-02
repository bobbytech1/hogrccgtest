import { useState } from 'react';
import { apiFetch } from '../../utils/api'

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
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await apiFetch('http://localhost:3000/api/admin/events/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
  
      // If the response is an object, skip checking for headers
      if (response && response.message) {
        alert(response.message || 'Event saved successfully!');
        window.location.reload();
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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Create or Update Event</h2>

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
