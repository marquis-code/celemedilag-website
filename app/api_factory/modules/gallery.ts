import { GATEWAY_ENDPOINT } from '../axios.config';

export const galleryApi = {
    getAlbums(params: any = {}) {
        return GATEWAY_ENDPOINT.get('/gallery', { params });
    },
    getAlbumById(id: string) {
        return GATEWAY_ENDPOINT.get(`/gallery/${id}`);
    }
};
