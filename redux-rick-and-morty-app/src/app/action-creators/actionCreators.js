import axios from 'axios';
import { characterEndpoint } from '../../constants/constants';

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_SINGLE_CHARACTER = "FETCH_SINGLE_CHARACTER";

const handleCharacters = (characters) => {
    return {
        type: FETCH_CHARACTERS,
        characters
    }
}

export const fetchCharacters = () => {
    return dispatch => {
        return axios.get(characterEndpoint)
        .then(res => dispatch(handleCharacters(res.data.results)) )
        .catch(err => console.log("Something went wrong!", err))
    }
}

const handleSingleCharacter = (singleCharacter) => {
    return {
        type: FETCH_SINGLE_CHARACTER,
        singleCharacter
    }
}

export const fetchSingleCharacter = (id) => {
    return dispatch => {
        return axios.get(`${characterEndpoint}/${id}`)
        .then(res => dispatch(handleSingleCharacter(res.data)))
        .catch(err => console.log("Something went wrong!", err))
    }
}