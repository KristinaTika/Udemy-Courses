import {publicApiKey, urlEndpoint } from "../shared/constants";
import md5 from 'md5';
import axios from 'axios';
import { Character } from '../entities/Character';
import { Serie } from '../entities/Serie';
import { Story } from '../entities/Story';
import { Comic } from '../entities/Comic';


let ts = Date.now();
let apiHash = md5(`${ts}${privateApiKey}${publicApiKey}`);

class DataService {

    fetchCharacters(value) {
        return axios.get(`${urlEndpoint}characters?nameStartsWith=${value}&limit=20&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
            .then((res) => {
                let { results } = res.data.data;
                return results.map((res) => {
                    const id = res.id;
                    const name = res.name;
                    const image = `${res.thumbnail.path}.${res.thumbnail.extension}`;
                    const myCharacter = {
                        id,
                        name,
                        image
                    };

                    return myCharacter;
                });
            });
    }

    fetchSingleCharacter(id) {
        return axios.get(`${urlEndpoint}characters/${id}?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => {
            const {results} = res.data.data;
            return results.map((res) => {
                const id = res.id;
                const name = res.name;
                const image = `${res.thumbnail.path}.${res.thumbnail.extension}`;
                const description = res.description;
                const myCharacter = new Character (id, name, image, description);
                return myCharacter;
            });
        });
    }

    fetchSeries(id) {
        return axios.get(`${urlEndpoint}characters/${id}/series?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => {
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
        });
    }

    fetchStories(id) {
        return axios.get(`${urlEndpoint}characters/${id}/stories?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => {
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
                const myStory = new Story (characters, comics, creators, id, originalIssue, series, title, type);
                return myStory;
            });
        });
    }

    fetchComics(id) {
        return axios.get(`${urlEndpoint}characters/${id}/comics?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
        .then(res => {
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
        });
    }
}

const mapItems = items => (items.map(i => i.name));
const mapPrice = price => (price.map(p => `${p.price}$`));


export const dataService = new DataService();


