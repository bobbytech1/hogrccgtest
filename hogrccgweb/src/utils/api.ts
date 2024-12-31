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
        return null;
      }
    }

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'An error occurred');
    }

    return await response.json();
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
