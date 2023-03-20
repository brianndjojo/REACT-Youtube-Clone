import { useState, useEffect } from 'react';

//The useParams hook returns an object of key/value pairs of the dynamic params from 
//the current URL that were matched by the <Route path> . Child routes inherit all params from their parent routes.

// useParams Hook is used to get the channel ID from the URL..
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import zIndex from '@mui/material/styles/zIndex';
import { minHeight } from '@mui/system';

const ChannelDetail = () => {

  // Retrieve ID from URL... Since, we want the specific Channel ID..
  const { id } = useParams();

  // Set UseState for ChannelDetail since it is subject to change from specific ID in the URL..
  const [channelDetail, setChannelDetail] = useState(null);

  // Videos for Feed based on Category..
  const [videos, setVideos] = useState([]);

  //console.log(channelDetail);
  console.log(videos)

  // useEffect is used here to listen if there are any changes from the requests being
  // retrieved from RapidAPI... The URL of the channel is sent to the fetchFromAPI function we defined..
  // we use the .then function to get the returned results from fetchFromAPI...
  // if there are any changes from the returned results, then we call teh setChannelDetail function..
  
  // Retrieve Data from RapidAPI
  useEffect(() => {

    // URL Format below for Fetching From API is based on the URL Format provided by RapidAPI..

    // Retrieve Channel Detail Information..
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    
    // Retrieve Videos by querying the specific Channel ID... We order the incoming Videos based on date..
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {setVideos(data.items)})
  }, [id]) // the id array here basically checks if there are any changes to the current ID with the usestate, if so it recalls the Async Function..

   // Check to see if the snippet is loaded with any data... 
  // This is to prevent any loading erros when the page is loaded...
  if(!channelDetail?.snippet){
    return 'Loading..'
  }

  return (
    /* Main Content for Channel Detail.. Vids and stuff */
    <Box minHeight="95vh">

      {/* Top Gradient.. */}
      <Box sx={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(93,56,223,1) 35%, rgba(5,90,175,1) 66%, rgba(35,79,98,1) 83%, rgba(0,212,255,1) 100%);',
        zIndex: 10,
        height: '380px'
      }}/>

      {/* Channel Card */}
      <ChannelCard channelDetail={channelDetail} marginTop = "-110px"/>
    
      {/* Video Feed */}
      <Box display="flex" p="2" >
        <Box sx={{
          mr: { sm : '100px' }
        }}/>
        <Videos videos={videos}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail