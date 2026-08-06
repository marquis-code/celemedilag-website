import { ref } from 'vue';
import { eventsApi } from '@/api_factory/modules/events';
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useFetchEvents = () => {
    const { showToast } = useCustomToast();
    const loading = ref(false);
    const events = ref<any[]>([]);

    const fetchEvents = async (params: any = {}) => {
        loading.value = true;
        try {
            const { data } = await eventsApi.getEvents(params);
            events.value = data;
            return data;
        } catch (error: any) {
            console.error('Error fetching events:', error);
            showToast({
                title: 'Error',
                message: error?.response?.data?.message || 'Failed to fetch events',
                toastType: 'error'
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        events,
        fetchEvents,
    };
};
