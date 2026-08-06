import { GATEWAY_ENDPOINT } from '../axios.config';

export const sermonsApi = {
    getSermons(params: any = {}) {
        return GATEWAY_ENDPOINT.get('/sermons', { params });
    },
    getSermonById(id: string) {
        return GATEWAY_ENDPOINT.get(`/sermons/${id}`);
    }
};
