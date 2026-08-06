import { ref } from 'vue';
import { leadershipApi } from '@/api_factory/modules/leadership';
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useFetchLeadership = () => {
    const { showToast } = useCustomToast();
    const loading = ref(false);
    const leaders = ref<any[]>([]);

    const fetchLeaders = async (params: any = {}) => {
        loading.value = true;
        try {
            const { data } = await leadershipApi.getLeaders(params);
            leaders.value = data;
            return data;
        } catch (error: any) {
            console.error('Error fetching leaders:', error);
            showToast({
                title: 'Error',
                message: error?.response?.data?.message || 'Failed to fetch leadership',
                toastType: 'error'
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        leaders,
        fetchLeaders,
    };
};
