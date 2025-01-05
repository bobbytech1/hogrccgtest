import { useState } from "react";
import { apiFetch } from "../utils/api";

const usePostPageContent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const postPageContent = async (slug: string, content: object) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await apiFetch("https://hogrccgtest.onrender.com/api/admin/pages/post", {
        method: "POST",
        credentials: "include", // Send cookies with the request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug, content }),
      });

      console.log("Response:", response); // Log the full response for debugging

      // Check if the response contains a message property
      if (response && response.message) {
        setSuccess(response.message || "Page content created successfully.");
        // Reload the page on success
        window.location.reload();
      } else {
        throw new Error("Unexpected response format or missing message property.");
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "An error occurred while creating the page content.");
    } finally {
      setLoading(false);
    }
  };

  return { postPageContent, loading, error, success };
};

export default usePostPageContent;
