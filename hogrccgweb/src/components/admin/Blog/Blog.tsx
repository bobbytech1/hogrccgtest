import { useState } from 'react';
import { apiFetch } from '../../../utils/api';

const BlogTab = () => {
  const [blogData, setBlogData] = useState({
    id: '', // Leave empty for creating a new blog
    title: '',
    content: '',
    image: '',
    author: '',
    published_at: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiFetch('http://localhost:3000/api/admin/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response && response.message) {
        alert(response.message || 'Blog successfully saved!');
        window.location.reload();
        setBlogData({
          id: '',
          title: '',
          content: '',
          image: '',
          author: '',
          published_at: '',
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
      <h2 className="text-2xl font-bold mb-4">Create or Update Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          value={blogData.id}
          onChange={handleChange}
          placeholder="Blog ID (leave empty for new blog)"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          name="content"
          value={blogData.content}
          onChange={handleChange}
          placeholder="Blog Content"
          className="w-full p-2 border rounded-md"
          rows={8}
          required
        ></textarea>
        <input
          type="url"
          name="image"
          value={blogData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="author"
          value={blogData.author}
          onChange={handleChange}
          placeholder="Author Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="datetime-local"
          name="published_at"
          value={blogData.published_at}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className={`w-full py-2 text-white rounded-md ${
            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'
          }`}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Blog'}
        </button>
      </form>
    </div>
  );
};

export default BlogTab;
