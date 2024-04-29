import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:8000/");
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch graph data");
  }
};

export { fetchData };
