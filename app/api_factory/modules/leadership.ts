import { GATEWAY_ENDPOINT } from '../axios.config';

export const leadershipApi = {
    getLeaders(params: any = {}) {
        return GATEWAY_ENDPOINT.get('/leadership', { params });
    },
    getLeaderById(id: string) {
        return GATEWAY_ENDPOINT.get(`/leadership/${id}`);
    }
};
