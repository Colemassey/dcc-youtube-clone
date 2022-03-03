import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap'

const RelatedVideos = (props) => {
    const [relatedVideo, setRelatedVideo] = useState([])
    // console.log(relatedVideo)
      
    async function getRelatedVideos () {
        // console.log(props.searchVideoID)
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.searchVideoID}&type=video&key=AIzaSyBCRySw2tlAyp3EpNrPOayVSq1RH5zvtqw`);
        // console.log(response.data)
        setRelatedVideo(response.data.items)
    }
        
    useEffect(() => {
        getRelatedVideos()
    }, [props.searchVideoID])
    
    const handleClick = (video) =>{
        props.setSearchVideoID(video.id.videoId)
        props.setVideoTitle(video.snippet.title)
        props.setVideoDescription(video.snippet.description)
    }

        return (
            relatedVideo.map((video) => {
            //    console.log(video)
                if(video.snippet !== undefined){
                return (
                    <div>
                        <Card>
                            <Card.Body>
                            <a onClick={() => handleClick(video)}  ><img src={video.snippet.thumbnails.default.url} alt="Logo" /></a>
                                <Card.Title>
                                    <a>{video.snippet.title}</a> 
                                </Card.Title> 
                            </Card.Body>
                        </Card>
                    </div>
                )
                }
            })
        )
}
export default RelatedVideos;
