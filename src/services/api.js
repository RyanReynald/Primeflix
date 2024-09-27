import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//Url da API: /movie/now_playing?api_key=f67734288dfd3addfe09b975e6a63ba2&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;