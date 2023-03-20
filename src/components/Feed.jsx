// Feed Component of Youtube Page...

import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { color } from '@mui/system';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  
  // useState Snippet
  
  // Categories for Vids...
  const [selectedCategory, setSelectedCategory] = useState('New');

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
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {setVideos(data.items)})
  }, [selectedCategory]); //selectedCategory Array basically checks if we change category.. If so, it recalls the function above..
  
  return (
    // Layout of feed can be drawn out with a Stack... 
    // sx (small devices) turns layout to column
    // md (medium devices) turns layout to row..
    <Stack sx={{flexDirection: { sx: 
    "column", md: "row" }}}>

      {/*This Box is used to represent the sidebar component and other elements on the left.. like Youtube */}
      <Box sx={{
        height: {sx: 'auto', md: '92vh'}, 
        borderRight: '1px solid #3d3d3d',
        px: {sx:0, md:2} 
      }}>

        {/* Sidebar of the Brojo Tube Feeds page..props passed into the JS Component..*/}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Typography is essentially the MUI equivalent of <h> tags..*/}
        {/* variant allows us to choose the different stylings of mui elements.. */}
        <Typography className='copyright' variant='body2' sx={{
          mt:1.5, color: "#fff"
        }}>
          Copyright 2023 Brojo Tube
        </Typography>
      </Box>
      
      {/*This Box is used to represent the main feed.. Videos and stuff..*/}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        {/* New Videos Logo on top of feed.. */}
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color: 'white'
        }}>
          {selectedCategory} <span style={{color: '#F31503'}}>videos</span>
        </Typography>
      
        {/* Videos Component for the feed.. videos prop within the tag allows us to access the videos.. */}
        <Videos videos={videos}/>

      </Box>
    </Stack>
  )
}

export default Feed