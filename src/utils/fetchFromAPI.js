import axios from "axios";

// Base URL for all the requests being queried from Youtube Endpoint..
// Snippets will be added within other components to allow for Dynamic Querying of Endpoints..
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  //method: 'GET',
  // url: BASE_URL,

    params: {
        maxResults: '50',
    },

    headers: 
    {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
    }
};

// This function allows us to call RapidAPI for Youtube, and allows us to call
// data from Dynamic Endpoints..
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}