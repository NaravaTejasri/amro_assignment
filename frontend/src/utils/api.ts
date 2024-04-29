import axios from "axios";
import { apiUrl } from "../config/constants";

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch graph data");
  }
};

export { fetchData };
