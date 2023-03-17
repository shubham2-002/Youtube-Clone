import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// export const usefetchFromAPI = (url) => {
//   const { data, refetch } = useQuery(["videos"], async () => {
//     await axios.get(`${BASE_URL}/${url}`, options)
//   });
//   return {data,refetch}
// };
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
