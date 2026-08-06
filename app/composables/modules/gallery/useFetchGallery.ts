import { ref } from 'vue';
import { galleryApi } from '@/api_factory/modules/gallery';
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useFetchGallery = () => {
    const { showToast } = useCustomToast();
    const loading = ref(false);
    const albums = ref<any[]>([]);

    const fetchAlbums = async (params: any = {}) => {
        loading.value = true;
        try {
            const { data } = await galleryApi.getAlbums(params);
            albums.value = data;
            return data;
        } catch (error: any) {
            console.error('Error fetching gallery albums:', error);
            showToast({
                title: 'Error',
                message: error?.response?.data?.message || 'Failed to fetch gallery albums',
                toastType: 'error'
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        albums,
        fetchAlbums,
    };
};
