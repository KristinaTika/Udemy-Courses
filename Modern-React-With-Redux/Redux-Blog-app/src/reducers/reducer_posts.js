import _ from "lodash";
import { FETCH_POSTS, FETCH_SINGLE_POST, DELETE_POST } from "../actions/actions.js";

export const PostsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id"); // kao map funkcija, samo za objekte
        case FETCH_SINGLE_POST:
            // Moze i ovako da se pise:

            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            return _.omit(state, action.payload); 
        default:
            return state;
    }
}