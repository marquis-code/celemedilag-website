import { GATEWAY_ENDPOINT } from '../axios.config';

export const newsApi = {
    getNews(params: any = {}) {
        return GATEWAY_ENDPOINT.get('/news', { params });
    },
    getNewsById(id: string) {
        return GATEWAY_ENDPOINT.get(`/news/${id}`);
    }
};
