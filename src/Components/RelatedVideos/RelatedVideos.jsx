import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RelatedVideos = (props) => {
    const [relatedVideo, setRelatedVideo] = useState([])
    console.log(relatedVideo)
      
    async function getRelatedVideos () {
        console.log(props.searchVideoID)
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.searchVideoID}&type=video&key=AIzaSyCA_6OGhIBDkYUzdjQOPRD535rx3l8GyP8`);
        console.log(response.data)
        setRelatedVideo(response.data.items)
    }
        
    useEffect(() => {
        getRelatedVideos()
    }, [])

        return (
            relatedVideo.map((video) => {
                return (
                    <div>
                    <li>{video.Id.videoId}</li>  
                    </div>
                )



            })
        )
}
export default RelatedVideos;
