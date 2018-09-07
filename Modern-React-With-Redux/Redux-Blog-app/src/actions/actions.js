import axios from "axios";
import { url, api_key } from "../constants/constants";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";

export const fetchPosts = () => {

    const request = axios.get(`${url}${api_key}`);

    return {
        type: FETCH_POSTS,
        payload: request,
    };
}

export const createPost = (values, callback) => { // values --> blog post object {title, categories, content}

    const request = axios.post(`${url}${api_key}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request

    }
}

export const fetchSinglePost = (id) => {
    const request = axios.get(`${url}${id}${api_key}`);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    }
}