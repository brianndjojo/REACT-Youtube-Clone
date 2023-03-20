// Component that allows us to actually watch the video..

import React, { useState ,useEffect } from "react"; // allows us to track State of Object..
import { Link, useParams } from "react-router-dom"; // allows us to keep track of route links, etc
import ReactPlayer from "react-player"; // REACT Video player..
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import VideoCard from "./VideoCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Videos } from ".";

const VideoDetail = () => {

  const { id } = useParams(); // for retrieving the Video ID from the URL..

  const [videos, setVideos] = useState(null); // Listens to the state of recommended Videos or Videos similar to the searched vid..

  const [videoDetail, setVideoDetail] = useState(null); // Listen to the state of current Video loaded..

  // useEffect Hook is called so that the page can be loaded as soon as the data is loaded..
  // When setting the video once the data payload is received, setVideoDetail with only the first item/video for VideoDetail..
  useEffect(() => {

    {/* Code below fetches information about the sepcific video being queried.. */}
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    {/* Code below fetches information about all related videos from Youtube.. 
        - Query below checks if the Search Term returns any results..
        - finds videos that are related to the specific video from videoid.. and only finds data of video type..
      */}
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

  }, [id]);

  // Check to see if the snippet is loaded with any data... 
  // This is to prevent any loading erros when the page is loaded...
  if(!videoDetail?.snippet){
    return 'Loading..'
  }

  // Deconstructing the snippet received from the payload from RapidAPI..
  // By Deconstructing wew can retrieve all the information needed, and now only need to call videoDetail..
  const { snippet: { title, channelId, channelTitle}, statistics: {viewCount, likeCount} } = videoDetail;

  return (
    // Gives the Black Background..
    <Box minHeight= "95vh">
      
      {/* Main Video and Title, along with Views & Likes.. */}

      {/* Stack gives the layout to be used... 
      Main Vid Page, Vid List on the right..
      xs devices, layout becomes column, and medium
      devices the layout becomes row... */}
      <Stack direction={{xs: 'column', md:'row'}}>

        {/* Main Video & Content */}
        <Box flex={1}>

          {/* Box below wraps the left side of page.. 
          Main Video, Comments, Likes, etc*/}
          <Box sx={{
            width: '100%', position: 'sticky', top: '86px'
          }}>
            {/* React Player is basically media equivalent of Youtube Video Player.. 
              className: "react-player" sets some CSS settings we defined within our index.css
              controls allows us to see the control functions for a regular Youtube Video..
            */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className = "react-player" controls/>
          
            {/* Video Title */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>

            {/* Other Information... */}
            <Stack direction="row" justifyContent="space-between" sx={{
              color: "#fff"
            }} py = {1} px = {2}>
              
              {/* Channel name */}
              <Link to={`/channels/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px'}} />
                </Typography>
              </Link>
              
              {/* Other Information */}
              <Stack direction="row" gap="20px" alignItems="center">
                 {/* View Count 
                  - The parseInt function allows it to format really big numbers for ease of reading..
                */}
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                
                 {/* Like Count
                  - The parseInt function allows it to format really big numbers for ease of reading..
                */}
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>

          </Box>
        </Box>
        
        {/* Suggested Videos Section */}
        <Box px={2} py={{md:1, xs:5}} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column"/>
        </Box>

      </Stack>
      
    </Box>
     
)
}

export default VideoDetail