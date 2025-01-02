import { NavigateFunction } from "react-router-dom"; // Import NavigateFunction for correct typing

export const apiFetch = async (
  url: string,
  options: RequestInit = {},
  navigate?: NavigateFunction // Correct typing of navigate
): Promise<any> => {
  try {
    const response = await fetch(url, {
      ...options,
      credentials: 'include', // Include cookies in the request
    });

    // Debugging: Log the response object
    console.log('Response:', response);

    if (response.status === 401) {
      // Attempt to refresh the token if unauthorized
      const refreshSuccess = await refreshAccessToken();

      if (refreshSuccess) {
        // Retry the original request
        return apiFetch(url, options, navigate);
      } else {
        // Logout if refresh fails
        await logoutUser();

        // Clear 'loggedIn' from localStorage when refresh fails
        localStorage.removeItem('loggedIn');

        if (navigate) {
          navigate('/admin'); // Redirect to admin login page
        }
        return null; // Return null if unauthorized and refresh fails
      }
    }

    // Handle non-200 responses gracefully
    if (!response.ok) {
      let errorMessage = 'An error occurred';
      const contentType = response.headers?.get('Content-Type'); // Use optional chaining

      // Only try to parse JSON if it's a JSON response
      if (contentType && contentType.includes('application/json')) {
        try {
          const error = await response.json();
          errorMessage = error.message || 'An error occurred';
        } catch (err) {
          console.error('Error parsing JSON:', err);
        }
      }

      throw new Error(errorMessage);
    }

    // Ensure that we return JSON if the response is JSON
    const contentType = response.headers?.get('Content-Type'); // Use optional chaining
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }

    // If the response is not JSON, return the text content or other format
    return await response.text();

  } catch (error: any) {
    console.error('API error:', error);
    throw error;
  }
};

// Refresh access token
const refreshAccessToken = async (): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:3000/api/auth/refresh-token', {
      method: 'POST',
      credentials: 'include', // Include cookies
    });

    if (response.ok) {
      return true; // Token refreshed successfully
    }

    return false; // Token refresh failed
  } catch (error) {
    console.error('Token refresh error:', error);
    return false;
  }
};

// Logout user
export const logoutUser = async (): Promise<void> => {
  try {
    await fetch('http://localhost:3000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    localStorage.removeItem('loggedIn');

    // Additional cleanup as needed
  } catch (error) {
    console.error('Logout error:', error);
  }
};
