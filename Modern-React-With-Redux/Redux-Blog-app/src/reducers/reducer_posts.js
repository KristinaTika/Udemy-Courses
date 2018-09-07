import _ from "lodash";
import { FETCH_POSTS, FETCH_SINGLE_POST } from "../actions/actions.js";

export const PostsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        case FETCH_SINGLE_POST:
            // Moze i ovako da se pise:
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}