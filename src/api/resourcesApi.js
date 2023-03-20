import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/api/";

export const getResources = async () => {
  const data = await axios("/resources");
  return data;
};
