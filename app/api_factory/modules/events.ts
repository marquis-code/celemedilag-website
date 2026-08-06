import { GATEWAY_ENDPOINT } from '../axios.config';

export const eventsApi = {
    getEvents(params: any = {}) {
        return GATEWAY_ENDPOINT.get('/events', { params });
    },
    getEventById(id: string) {
        return GATEWAY_ENDPOINT.get(`/events/${id}`);
    }
};
