import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RelatedVideos = (props) => {
    const [relatedVideo, setRelatedVideo] = useState([])
    // console.log(relatedVideo)
      
    async function getRelatedVideos () {
        // console.log(props.searchVideoID)
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.searchVideoID}&type=video&key=AIzaSyDeLrZDg_tPMfEHwTc8fmDu6msxgdXpV2o`);
        console.log(response.data)
        setRelatedVideo(response.data.items)
    }
        
    useEffect(() => {
        getRelatedVideos()
    }, [props.searchVideoID])
    
    // const handleClick = (video) =>{
    //     props.setSearchVideoID(video.id.videoId)
    //     props.setSearchTitle(video.snippet.title)
    //     props.setSearchDescription(video.snippet.description)
    // }

        return (
            relatedVideo.map((video) => {
               console.log(video)
                if(video.snippet !== undefined){
                return (
                    <div>
                    <a onClick={() => props.setSearchTitle(video.snippet.title)}  ><img src={video.snippet.thumbnails.default.url} alt="Logo" /></a>  
                    </div>
                )
                }
            })
        )
}
export default RelatedVideos;
