import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://reactjs-mymoney.vercel.app/api',
});
