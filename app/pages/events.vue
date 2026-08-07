<template>
 <div>
 <h2 class="text-lg font-display font-semibold mb-6 text-skyBlue">Upcoming Events</h2>
 
 <div v-if="pending" class="text-gray-500">Loading events...</div>
 <div v-else-if="error" class="text-red-500">Error loading events. Please ensure the backend is running.</div>
 <div v-else-if="events && events.length === 0" class="text-gray-500">No events found. Add some from the admin dashboard!</div>
 
 <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 <div v-for="event in events" :key="event._id" class="bg-white p-6 rounded-lg border border-gray-100">
 <h3 class="text-lg font-display font-bold text-royalBlue mb-2">{{ event.title }}</h3>
 <p class="text-sm text-gray-500 mb-4">{{ new Date(event.date).toLocaleDateString() }} - {{ event.location }}</p>
 <p class="text-gray-700">{{ event.description }}</p>
 </div>
 </div>
 </div>
</template>

<script setup lang="ts">
const { data: events, pending, error } = await useFetch<any[]>('http://localhost:3001/api/events')
</script>
