import { publicApiKey, urlEndpoint, ts, apiHash } from "../shared/constants";
import axios from 'axios';
import { Comic } from '../entities/Comic';

class ComicsService {

    fetchComics(value) {
        return axios.get(`${urlEndpoint}comics?titleStartsWith=${value}&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => mapComics(res));
    }

    fetchSingleComic(id) {
        return axios.get(`${urlEndpoint}comics/${id}?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => mapComics(res));
    }

    fetchCharacterComics(id) {
        return axios.get(`${urlEndpoint}characters/${id}/comics?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => mapComics(res));
    }
}

const mapComics = (res) => {
    const { results } = res.data.data;
    return results.map((res) => {
        const characters = mapItems(res.characters.items);
        const creators = mapItems(res.creators.items);
        const description = res.description;
        const format = res.format;
        const isbn = res.isbn;
        const issueNumber = res.issueNumber;
        const pages = res.pageCount;
        const price = mapPrice(res.prices);
        const series = res.series.name;
        const stories = mapItems(res.stories.items);
        const title = res.title;
        const image = `${res.thumbnail.path}.${res.thumbnail.extension}` ;
        const id = res.id;

        const myComic = new Comic (characters, creators, description, format, isbn, issueNumber, pages, price, series, stories, title, image, id);
        return myComic;
    });
}

const mapItems = items => (items.map(i => i.name));
const mapPrice = price => (price.map(p => `${p.price}$`));


export const comicsService = new ComicsService();

