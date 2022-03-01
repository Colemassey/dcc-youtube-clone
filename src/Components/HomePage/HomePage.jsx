import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import axios from 'axios';  
import RelatedVideos from '../RelatedVideos/RelatedVideos';

const HomePage = (props) => {
    
    const [searchVideoID, setSearchVideoID] = useState("dQw4w9WgXcQ")
    const [relatedVideo, setRelatedVideo] = useState([])
    

    async function searchYouTube(searchTerm) {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCA_6OGhIBDkYUzdjQOPRD535rx3l8GyP8&type=video&q=${searchTerm}`);
        console.log(response.data)
        setSearchVideoID(response.data.items[0].id.videoId)
    }
    

    async function getRelatedVideos (searchVideoID) {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchVideoID}&type=video&key=AIzaSyCA_6OGhIBDkYUzdjQOPRD535rx3l8GyP8`);
        console.log(response.data)
        let relatedVideos = response.data.items.filter(video => video.snippet)
        setRelatedVideo(relatedVideos)
    }
        
   
   
   
        return ( 

        <div>
            <SearchBar searchYouTube={searchYouTube}  />
            <VideoPlayer searchVideoID={searchVideoID} />
            {/* <RelatedVideos relatedVideos={relatedVideo} getRelatedVideos={getRelatedVideos} /> */}
        </div>
        )

}
export default HomePage;