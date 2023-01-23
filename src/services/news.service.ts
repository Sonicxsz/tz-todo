import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/naming-convention
const API_KEY = '5fa7ac605dea4e58b6f7ee36ba3ec223';
export const newsService = {

	async getAllNews() {
		return axios
			.get(`https://newsapi.org/v2/everything?q=Apple&from=2023-01-19&sortBy=popularity&apiKey=${API_KEY}`);
	},
};
