import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    // q: selectedCatogory,
    // part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
//   "a39e5b77cdmsh1bfdc612b0b2662p1d4e24jsnd86535107d3b"
// process.env.REACT_APP_RAPID_API_KEY
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi=async(selectedCategory)=>{
    // /${url}
    // baseUrl/getVideos
    // baseUrl/getChannel
   const {data} = await axios.get(`${BASE_URL}${selectedCategory}`,options)
   return data
}