import { GATEWAY_ENDPOINT } from '../axios.config';

export const settingsApi = {
    getSettings() {
        return GATEWAY_ENDPOINT.get('/settings');
    }
};
