import { publicApiKey, urlEndpoint, ts, apiHash } from "../shared/constants";
import axios from 'axios';
import { Serie } from '../entities/Serie';

class SeriesService {

    fetchSeries(value) {
        return axios.get(`${urlEndpoint}series?titleStartsWith=${value}&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => mapSeries(res));
    }

    fetchSingleSerie(id) {
        return axios.get(`${urlEndpoint}series/${id}?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => mapSeries(res));
    }

    fetchCharacterSeries(id) {
        return axios.get(`${urlEndpoint}characters/${id}/series?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => mapSeries(res));
    }
}

const mapSeries = (res) => {
    const {results} = res.data.data;
    return results.map((res) => {
        const characters = mapItems(res.characters.items);
        const creators = mapItems(res.creators.items);
        const description = res.description ;
        const endYear = res.endYear;
        const startYear = res.startYear ;
        const id = res.id;
        const image = `${res.thumbnail.path}.${res.thumbnail.extension}` ;
        const title = res.title;
        const type = res.type;

        const mySeries = new Serie (characters, creators, description, endYear, startYear, id, image, title, type);
        return mySeries;
    });
}

const mapItems = items => (items.map(i => i.name));

export const seriesService = new SeriesService();