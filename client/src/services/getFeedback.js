import axios from "axios";

export async function getFeedbackData() {
  try {
    // Make a GET request to the API endpoint
    const response = await axios.get("http://localhost:5000/api/get_data");

    // Check if the response status code is OK (status code 200)
    if (response.status === 200) {
      // Access the response data
      const data = response.data;
      return data;
    } else {
      // Handle non-OK status codes (e.g., 404, 500)
      console.error("Received a non-OK status code:", response.status);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error:", error.message);
  }
}
