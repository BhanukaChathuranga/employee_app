import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.SERVER,
});

export default instance;
