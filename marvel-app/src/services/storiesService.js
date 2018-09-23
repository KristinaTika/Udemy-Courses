import { publicApiKey, urlEndpoint, ts, apiHash } from "../shared/constants";
import axios from 'axios';
import { Story } from '../entities/Story';

class StoriesService {

    fetchCharacterStories(id) {
        return axios.get(`${urlEndpoint}characters/${id}/stories?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => mapStories(res));
    }

    fetchSingleStory(id) {
        return axios.get(`${urlEndpoint}stories/${id}?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => mapStories(res));
    }
}

const mapStories = (res) => {
    const {results} = res.data.data;
        return results.map((res) => {
            const characters = mapItems(res.characters.items);
            const comics = mapItems(res.comics.items);
            const creators = mapItems(res.creators.items);
            const id = res.id;
            const originalIssue = res.originalIssue.name;
            const series = mapItems(res.series.items);
            const title = res.title;
            const type = res.type;
            const myStory = new Story (characters, comics, creators, id, originalIssue, series, title, type);            return myStory;
        });
}

const mapItems = items => (items.map(i => i.name));

export const storiesService = new StoriesService();