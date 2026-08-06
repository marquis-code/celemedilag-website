import { ref } from 'vue';
import { newsApi } from '@/api_factory/modules/news';
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useFetchNews = () => {
    const { showToast } = useCustomToast();
    const loading = ref(false);
    const newsList = ref<any[]>([]);

    const fetchNews = async (params: any = {}) => {
        loading.value = true;
        try {
            const { data } = await newsApi.getNews(params);
            newsList.value = data;
            return data;
        } catch (error: any) {
            console.error('Error fetching news:', error);
            showToast({
                title: 'Error',
                message: error?.response?.data?.message || 'Failed to fetch news',
                toastType: 'error'
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        newsList,
        fetchNews,
    };
};
