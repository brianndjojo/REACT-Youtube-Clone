// Channel Card for Feeds...

import { Box, Card, CardMedia, CardMeida, Typography, CardContent} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoChannelTitle, demoProfilePicture } from '../utils/constants';
import { color } from '@mui/system';

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display:'flex',
      justifyCOntent: 'center',
      alignItems: 'center',
      width: {xs: '356px', md: '320px'},
      height: '326px',
      margin: 'auto',
      marginTop
    }}>
      
      {/* Link to Channel */}
      <Link to={`/channels/${channelDetail?.id.channelId}`}>
        <CardContent sx={{
          display:'flex',
          flexDirection: 'column',
          justifyCOntent: 'center',
          textAlign: 'center',
          color: '#fff'
        }}>
          
          {/* Channel Profile Picture */}
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt = {channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              margin: 'auto',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          
          {/* Channel Title */}
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {channelDetail?.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px'}}/>
          </Typography>
          
          {/* Channel Description */}
          <Typography variant="subtitle2" color="#FFF">
            {channelDetail?.snippet?.description || 'channel description'}
          </Typography>

          {/* Subscribers.. Only shows up if it comes with the payload.. 
            Code below checks whether the Statistics header is with the payload..
          */}
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{fontSize: '15px', fontWeight: 500, color: 'gray'}}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}

        </CardContent >      
      </Link>

    </Box>
  )
}

export default ChannelCard