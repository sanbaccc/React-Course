import axios from "axios";

const KEY = "AIzaSyDY4KsNqHQnGgGkRR2Y5gZRUUWhVsH42lE";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});