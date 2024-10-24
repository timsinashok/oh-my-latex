export const convertToLatex = async (text) => {
  // Use your CORS Anywhere instance to proxy the request
  const CORS_PROXY = 'http://localhost:8080/'; // Your CORS Anywhere instance URL
  const API_URL = 'https://www.text2latex.com/api'; // The actual API URL

  try {
    const response = await fetch(`${CORS_PROXY}${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: text }), // Send the input text in the request body
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data; // Access the correct property in the API response
  } catch (error) {
    throw new Error(`Failed to convert text to LaTeX: ${error.message}`);
  }
};
