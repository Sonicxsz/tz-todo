import axios from 'axios';

export const NewsService = {
    async getAllNews(){
        return axios.get('https://newsapi.org/v2/everything?q=Apple&from=2023-01-19&sortBy=popularity&apiKey=5fa7ac605dea4e58b6f7ee36ba3ec223')
    }
}