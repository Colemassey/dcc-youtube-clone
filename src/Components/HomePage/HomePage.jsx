import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import axios from 'axios';
import SideBarRow from '../RelatedVideos/RelatedVideos';  

const HomePage = (props) => {
    
    const [searchVideoID, setSearchVideoID] = useState("")
    const [showSideBar, setShowSideBar] = useState("")


    async function searchYouTube(searchTerm) {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCA_6OGhIBDkYUzdjQOPRD535rx3l8GyP8&type=video&q=${searchTerm}`);
        console.log(response.data)
        setSearchVideoID(response.data.items[0].id.videoId)
    }
    async function showBar() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCA_6OGhIBDkYUzdjQOPRD535rx3l8GyP8&type=video&q`);
        console.log(response.data)
        setShowSideBar(response.map.data.items[0].id.videoId)
    }

        <div>
            <SearchBar searchVideoID={searchYouTube} />
            <SideBarRow showSideBar={showBar} />
            <VideoPlayer />
        </div>
     ;

}
export default HomePage;