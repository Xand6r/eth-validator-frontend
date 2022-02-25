/**
 * Module containg all functions for API requests which are going to be made
 */
import axios from 'axios';

/**
 * dynamically select the url to use for the backend
 * depending on if were working locally or building for deployment
 */
const REMOTE_URL = 'https://valideth-backend.herokuapp.com';
const LOCAL_URL = 'localhost:3000';
export const BASE =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? LOCAL_URL : REMOTE_URL;

/**
 * Make a post request to the server using the stored token in the database
 * @param {String} path The path we wish to make a post request to
 * @param {Object} obj The payload of the post request in the form of an object
 * @returns {Promise}
 */
export const postReq = async (path, obj) => {
  const response = await axios.post(BASE + path, obj, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};

/**
 * Make a get request from the server using the token in the databasr
 * @param {*} path The path we wish to make a post request to
 * @returns {Promise}
 */
export const getReq = async (path) => {
  const response = await axios.get(BASE + path);
  return response;
};
