import { useState } from 'react';

const BlogTab = () => {
  const [blogData, setBlogData] = useState({
    id: '', // Leave empty for creating a new blog
    title: '',
    content: '',
    image: '',
    author: '',
    published_at: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Blog successfully saved!');
        setBlogData({
          id: '',
          title: '',
          content: '',
          image: '',
          author: '',
          published_at: '',
        });
      } else {
        alert(result.message || 'Failed to save blog.');
      }
    } catch (error) {
      alert('An error occurred while saving the blog.');
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create or Update Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Blog ID (optional, for updates) */}
        <input
          type="text"
          name="id"
          value={blogData.id}
          onChange={handleChange}
          placeholder="Blog ID (leave empty for new blog)"
          className="w-full p-2 border rounded-md"
        />

        {/* Title */}
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-2 border rounded-md"
          required
        />

        {/* Content */}
        <textarea
          name="content"
          value={blogData.content}
          onChange={handleChange}
          placeholder="Blog Content"
          className="w-full p-2 border rounded-md"
          rows={8}
          required
        ></textarea>

        {/* Image URL */}
        <input
          type="url"
          name="image"
          value={blogData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded-md"
        />

        {/* Author */}
        <input
          type="text"
          name="author"
          value={blogData.author}
          onChange={handleChange}
          placeholder="Author Name"
          className="w-full p-2 border rounded-md"
          required
        />

        {/* Published Date */}
        <input
          type="datetime-local"
          name="published_at"
          value={blogData.published_at}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
        >
          Save Blog
        </button>
      </form>
    </div>
  );
};

export default BlogTab;
