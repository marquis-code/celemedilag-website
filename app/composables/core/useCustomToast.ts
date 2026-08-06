import { ref } from 'vue';

export const useCustomToast = () => {
    // In a real implementation, this would interact with a global store 
    // or provide/inject to display the toast component.
    // For now, it provides the interface expected by the axios interceptor.
    
    const showToast = (options: { title: string, message: string, toastType: 'success' | 'error' | 'info' | 'warning' }) => {
        // Fallback to console until UI component is fully integrated
        if (options.toastType === 'error') {
            console.error(`[Toast] ${options.title}: ${options.message}`);
        } else {
            console.log(`[Toast] ${options.title}: ${options.message}`);
        }
        
        // You can dispatch a custom event that a Toast.vue component listens to
        if (typeof window !== 'undefined') {
            const event = new CustomEvent('show-toast', { detail: options });
            window.dispatchEvent(event);
        }
    };

    return {
        showToast
    };
};
