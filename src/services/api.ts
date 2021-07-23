import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.30.199.31:3000/api',
});
