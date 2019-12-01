import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const apiReceitaFederal = axios.create({
    baseURL: process.env.REACT_APP_API_RECEITA_FEDERAL,
});
