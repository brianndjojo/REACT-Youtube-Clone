// Feed Component of Youtube Page...

import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Videos from './Videos';
import { color, margin } from '@mui/system';

import { fetchFromAPI } from '../utils/fetchFromAPI';

import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  
  // useParams to retrieve path/route from URL..
  // {searchTerm} below is defined in the routes within App.js..
  const { searchTerm } = useParams();

  // Videos for Feed based on Category..
  const [videos, setVideos] = useState([]);

  // Call fetchFromAPI as soon as the page loads...
  // useEffect is a lifecycle hook which gets called when the component initially loads..
 
  useEffect(() => {
    // ? is similar to if..
    // basically it checks whether the current endpoint is the same as selectedCategory..
    // q basically means query..

    // to extract data from our async function below we attach a .then function as shown below..
    // .then will return the result of the promise from our async function, fetchfromAPI..
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {setVideos(data.items)})
  }, [searchTerm]); //selectedCategory Array basically checks if we change category.. If so, it recalls the function above..
  
  return (
    

    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2,  margin: 'auto'}}>
      {/* New Videos Logo on top of feed.. */}
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{
        color: 'white'
      }}>
        Search Results for <span style={{color: '#F31503'}}> {searchTerm} </span> video
      </Typography>
    
      {/* Videos Component for the feed.. videos prop within the tag allows us to access the videos.. */}
      <Videos videos={videos}/>
    </Box>
    
  )
}

export default SearchFeed