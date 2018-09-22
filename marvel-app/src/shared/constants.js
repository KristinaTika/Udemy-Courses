import md5 from 'md5';

export const urlEndpoint = "//gateway.marvel.com/v1/public/";
export const publicApiKey = "b77ac8629c323b6d3fe1c9ae13ff5a12";
export const privateApiKey = "4fc24eebf80602c2147363aa0d9fcfb71c975909";

export let ts = Date.now();
export let apiHash = md5(`${ts}${privateApiKey}${publicApiKey}`);


