import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import axios from 'axios';  

const HomePage = (props) => {
    
    
    
    async function searchYouTube(searchTerm) {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCA_6OGhIBDkYUzdjQOPRD535rx3l8GyP8&type=video&q=${searchTerm}`);
        console.log(response.data)

    }
    
    return ( 

        <div>
            <SearchBar searchYouTube={searchYouTube} />
            <VideoPlayer />
        </div>
     );
}
 
export default HomePage;