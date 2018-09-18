import { FETCH_CHARACTERS, FETCH_SINGLE_CHARACTER } from "../action-creators/actionCreators";

const initialState = {
    characters: [],
    locations: [],
    episodes: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return { ...state, characters: action.characters };
        case FETCH_SINGLE_CHARACTER:
            return { ...state, singleCharacter: action.singleCharacter}
        default:
            return state;
    }
}

export default rootReducer;