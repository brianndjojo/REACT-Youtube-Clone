// Vidoes Component shows all the Videos within the feed...

import { Stack, Box } from '@mui/material';

import {VideoCard, ChannelCard} from './';

const Videos = ({videos, direction}) => {

    if(!videos?.length) return 'loading'; // Loader is loaded when the data is loaded from the Async API..
    //console.log(videos);
    return (
        // The Vidoes component returns a Stack of Video Cards/ Channel cards within the feed..

        <Stack direction= {direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    
                    {/* Checks if the current iteration from the mapping is a video.. */}
                    {item.id.videoId && <VideoCard video = {item} />}

                    {/* Checks if the current iteration from the mapping is a video.. */}
                    {item.id.channelId && <ChannelCard channelDetail = {item} />} 
                </Box>
            ))}
        </Stack>
    )
}

export default Videos