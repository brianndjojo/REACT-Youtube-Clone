// Where the App is run..
import React from "react";
// For Navigation within the page..
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// MUI Componet
import { Box } from "@mui/material";

// Components..
/*import Navbar  from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";*/

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components";

// Allows for immediate return.. I assume this is a JSX functionality, no need a return statement and can just put brackets..
const App = () => (
  // Box Component serves as a Wrapper Component from MUI for most CSS utility needs..
  // sx prop below allows us to specify CSS rules within the MUI Element..
  <Box sx={{ backgroundColor: '#000' }}>
    {/*Navbar Component will always be within the app...*/}
    <Navbar />
    
    {/* All available routes/endpoints within our Single Page Application.. */}
    <Routes>
      <Route path="/" element={<Feed/>}></Route>
      <Route path="/videos/:id" element={<VideoDetail/>}></Route>
      <Route path="/channels/:id" element={<ChannelDetail/>}></Route>
      <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
    </Routes>
  </Box>
 
);

export default App