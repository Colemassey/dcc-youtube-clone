import axios from 'axios'

const KEY = 'AIzaSyCA_6OGhIBDkYUzdjQOPRD535rx3l8GyP8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
})

