import { useState, useRuntimeConfig, useNuxtApp } from '#imports';
import { onMounted, watch } from 'vue';

export const useSettings = () => {
  // Use Nuxt's useState to share the reactive state globally across the app
  const settings = useState<Record<string, any>>('global-settings', () => ({}));
  const pending = useState<boolean>('global-settings-pending', () => true);
  
  const fetchSettings = async () => {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || 'http://localhost:3005/api';

    try {
      pending.value = true;
      const res = await fetch(`${apiBase}/settings`);
      const json = await res.json();
      const records = json.data || json || [];
      
      const newSettings: Record<string, any> = {};
      records.forEach((item: any) => {
        newSettings[item.key] = item.value;
      });
      
      settings.value = { ...settings.value, ...newSettings };
    } catch (err) {
      console.error('Failed to fetch settings:', err);
    } finally {
      pending.value = false;
    }
  };

  // Only setup WebSocket watcher once
  const setupWatcher = () => {
    const { $latestUpdate } = useNuxtApp();
    if ($latestUpdate) {
      watch(() => $latestUpdate.value, (update: any) => {
        if (update && update.type === 'setting') {
          settings.value[update.key] = update.data.value;
        }
      }, { deep: true });
    }
  };

  return {
    settings,
    pending,
    fetchSettings,
    setupWatcher
  };
};
