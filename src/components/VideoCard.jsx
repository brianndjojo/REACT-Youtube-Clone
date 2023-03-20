import { Link } from 'react-router-dom';

// MUI Components
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

// Utilities/Constants... If the video is not loaded from the server, then use this instead...
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

// The parameters that are passed to VideoCard, in this case 'video' is destructured as shown below...
// The destructuring basically allows us to retrieve specific Information fromt the snippet beign returned..

const VideoCard = ( {video: { id: {videoId}, snippet } } ) => {
  //console.log(video)
  return (
    <Card sx={{width: {xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0}}>
      
        {/* The prop 'to' below checks if the videoId deconstructed from the received video exists.. 
            If not, then the to prop loads in the demoVideoUrl which basically comes from the COnstants in Utils..
        */}
        <Link to= {videoId ? `/videos/${videoId}` : demoVideoUrl}>

          {/* The content within the image prop below has ?.. this prevents any errors and if empty returns undefined... */}
          <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt = {snippet?.title}
            sx={{width: {xs: '100%', sm: '358px', md:'320px'}, height: 180}}
          />
        </Link>

        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
          {/*Inner Content of Video Card...*/}
          <Link to= {videoId ? `/videos/${videoId}` : demoVideoUrl}>

            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">

              {/* Show content from the received snippet within the Video Card 
                In this case, video title... The title is slcied because the title migh
                be a bit too long... If the title does not exist, use demovideotitle..
              */}
              {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            
            </Typography>
          </Link>
          
          {/* Channel Title */}
          <Link to= {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>

            <Typography variant="subtitle2" fontWeight="bold" color="gray">

              {/* Show content from the received snippet within the Video Card 
                In this case, video title... The title is slcied because the title migh
                be a bit too long... If the title does not exist, use demovideotitle..
              */}
              {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
              <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>

            </Typography>
          </Link>

          

        </CardContent>
    </Card>
  )
}

export default VideoCard