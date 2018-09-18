import { FETCH_CHARACTERS, FETCH_SINGLE_CHARACTER, FETCH_LOCATION, FETCH_RESIDENTS, FETCH_EPISODES } from "../action-creators/actionCreators";

const initialState = {
    characters: [],
    location: [],
    episodes: [],
    residents: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return { ...state, characters: action.characters };
        case FETCH_SINGLE_CHARACTER:
            return { ...state, singleCharacter: action.singleCharacter };
        case FETCH_LOCATION:
            return { ...state, location: action.location };
        case FETCH_RESIDENTS:
            let residents = action.res.map(raw => raw.data.name);
            return { ...state, residents: residents };
        case FETCH_EPISODES:
            return { ...state, episodes: action.episodes.data };
        default:
            return state;
    }
}

export default rootReducer;