import { ref } from 'vue';
import { settingsApi } from '@/api_factory/modules/settings';
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useFetchSettings = () => {
    const { showToast } = useCustomToast();
    const loading = ref(false);
    const settings = ref<Record<string, any>>({});

    const fetchSettings = async () => {
        loading.value = true;
        try {
            const { data } = await settingsApi.getSettings();
            // Map array to object if necessary depending on backend response
            if (Array.isArray(data)) {
                data.forEach((item: any) => {
                    settings.value[item.key] = item.value;
                });
            } else {
                settings.value = data;
            }
            return settings.value;
        } catch (error: any) {
            console.error('Error fetching settings:', error);
            showToast({
                title: 'Error',
                message: error?.response?.data?.message || 'Failed to fetch settings',
                toastType: 'error'
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        settings,
        fetchSettings,
    };
};
