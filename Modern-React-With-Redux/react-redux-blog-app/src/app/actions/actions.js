import axios from 'axios';
import { url, apiKey } from '../../constants/constants';

//type
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";
export const DELETE_POST = "DELETE_POST";

export const fetchPosts = () => {
    const request = axios.get(`${url}${apiKey}`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export const createPost = (values, callback) => {
    const request = axios.post(`${url}${apiKey}`, values)
        .then(() => callback());
        
    return {
        type: CREATE_POST,
        payload: request,
    }   
}

export const fetchSinglePost = (id) => {
    const request = axios.get(`${url}/${id}${apiKey}`);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    }
}

export const deletePost = (id, callback) => {
    const request = axios.delete(`${url}/${id}${apiKey}`)
        .then( () => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}