import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RelatedVideos = (props) => {
    const [relatedVideo, setRelatedVideo] = useState([])
    console.log(relatedVideo)
      
    async function getRelatedVideos () {
        console.log(props.searchVideoID)
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.searchVideoID}&type=video&key=AIzaSyAfk3S2DKdW6G-hOoLYd0-uOi_PI_J0LTQ`);
        console.log(response.data)
        setRelatedVideo(response.data.items)
    }
        
    useEffect(() => {
        getRelatedVideos()
    }, [])

        return (
            relatedVideo.map((video) => {
                console.log(video.id.videoId)

                return (
                    <div>
                    <li>{video.id.videoId}</li>  
                    </div>
                )



            })
        )
}
export default RelatedVideos;
