import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RelatedVideos = (props) => {
    const [relatedVideo, setRelatedVideo] = useState([])
    // console.log(relatedVideo)
      
    async function getRelatedVideos () {
        // console.log(props.searchVideoID)
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.searchVideoID}&type=video&key=AIzaSyDV6dRIL0aN2Prtp4E0bWbGmsCYuyrvgD0`);
        // console.log(response.data)
        setRelatedVideo(response.data.items)
    }
        
    useEffect(() => {
        getRelatedVideos()
    }, [props.searchVideoID])

        return (
            relatedVideo.map((video) => {
                // console.log(video)
                if(video.snippet !== undefined){
                return (
                    <div>
                    <li>{video.id.videoId}</li>  
                    </div>
                )
                }
            })
        )
}
export default RelatedVideos;
