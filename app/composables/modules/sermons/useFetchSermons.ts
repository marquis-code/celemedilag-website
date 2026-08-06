import { ref } from 'vue';
import { sermonsApi } from '@/api_factory/modules/sermons';
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useFetchSermons = () => {
    const { showToast } = useCustomToast();
    const loading = ref(false);
    const sermons = ref<any[]>([]);

    const fetchSermons = async (params: any = {}) => {
        loading.value = true;
        try {
            const { data } = await sermonsApi.getSermons(params);
            sermons.value = data;
            return data;
        } catch (error: any) {
            console.error('Error fetching sermons:', error);
            showToast({
                title: 'Error',
                message: error?.response?.data?.message || 'Failed to fetch sermons',
                toastType: 'error'
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        sermons,
        fetchSermons,
    };
};
