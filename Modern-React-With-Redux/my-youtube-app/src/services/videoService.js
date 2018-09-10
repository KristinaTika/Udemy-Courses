import { API_KEY } from "../constants/constants";
import YTSearch from "youtube-api-search";

class VideoService {

    fetchSearchedVideos(input) {
        return new Promise(resolve => {
            YTSearch(
                { key: API_KEY, term: input },
                response => resolve(response)
            );
        });
    }
}

export const videoService = new VideoService();