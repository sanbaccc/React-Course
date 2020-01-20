import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: { Authorization: "Client-ID 37be54008f931818111122248b30fa38f95632521d690c7305655d5307476b64" }
});
