import { io } from 'socket.io-client';
import { ref } from 'vue';

export default defineNuxtPlugin(() => {
  const socket = io('http://127.0.0.1:3001');
  
  // Create a reactive reference for the latest update
  const latestUpdate = ref<{ type: string, action: string, data: any, id?: string } | null>(null);

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('contentUpdated', (payload) => {
    console.log('Received real-time update:', payload);
    latestUpdate.value = payload;
  });

  return {
    provide: {
      socket,
      latestUpdate
    }
  };
});
