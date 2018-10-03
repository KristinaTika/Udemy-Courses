import { publicApiKey, urlEndpoint, ts, apiHash } from "../shared/constants";
import axios from 'axios';
import { Character } from '../entities/Character';

class CharacterService {

    fetchCharacters(value) {
        return axios.get(`${urlEndpoint}characters?nameStartsWith=${value}&limit=20&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
            .then(res => mapCharacters(res));
    }

    fetchSingleCharacter(id) {
        return axios.get(`${urlEndpoint}characters/${id}?&ts=${ts}&apikey=${publicApiKey}&hash=${apiHash}`)
            .then(res => mapCharacters(res));
    }
}

const mapCharacters = (res) => {
    const { results } = res.data.data;
    return results.map((res) => {
        const id = res.id;
        const name = res.name;
        const image = `${res.thumbnail.path}.${res.thumbnail.extension}`;
        const description = res.description;
        const myCharacter = new Character(id, name, image, description);
        return myCharacter;
    });
}

export const characterService = new CharacterService();