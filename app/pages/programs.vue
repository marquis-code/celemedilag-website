<template>
  <div class="bg-ivory overflow-hidden">
    <!-- Hero -->
    <section class="relative w-full h-screen flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="programs">
        <template #fallback>
          <img src="~/assets/image/hero_programs.png" alt="Programs" class="absolute inset-0 w-full h-full object-cover" />
        </template>
      </HeroSection>
      
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">Programs & Events</span>
        </div>
        <h1 class="text-xl md:text-lg font-display font-medium leading-tight mb-4">Programs & Events</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Join us in our daily prayers, weekly services, and special events.</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="container mx-auto px-6 py-20 space-y-28">
      
      <!-- Upcoming Events from DB -->
      <div v-if="eventsPending" class="py-12 flex justify-center items-center">
        <div class="flex flex-col items-center">
          <div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin mb-4"></div>
          <div class="text-warmGray-400 font-medium">Loading upcoming events...</div>
        </div>
      </div>
      
      <div v-else-if="events.length > 0">
        <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4">
          <span class="text-cfTeal text-sm font-semibold">Coming Up</span>
        </div>
        <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-10">Upcoming Events</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="event in events" :key="event._id" class="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group border border-warmGray-100">
            <div class="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
              <img :src="event.bannerImageUrl || 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div class="w-full md:w-3/5 p-7 flex flex-col justify-center">
              <div class="inline-flex items-center bg-cfGold/10 rounded-full px-3 py-1 w-fit mb-3">
                <span class="text-cfGold font-semibold text-xs uppercase tracking-wider">{{ new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }} · {{ event.time }}</span>
              </div>
              <h3 class="text-lg font-display font-bold text-warmGray-900 mb-2">{{ event.title }}</h3>
              <p class="text-warmGray-500 text-sm line-clamp-2 mb-4">{{ event.description }}</p>
              <div class="flex items-center text-warmGray-400 text-sm">
                <svg class="w-4 h-4 mr-1.5 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {{ event.location }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Regular Schedule -->
      <div v-if="settings.programs_regular?.length">
        <div class="inline-flex items-center bg-cfGold/10 rounded-full px-4 py-1.5 mb-4">
          <span class="text-cfGold text-sm font-semibold">Weekly Schedule</span>
        </div>
        <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-10">Regular Prayer Days</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(prog, index) in settings.programs_regular" :key="index" class="bg-white rounded-3xl p-8 border border-warmGray-100 hover:border-cfGold/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-2xl bg-cfTeal/10 flex items-center justify-center mb-5 group-hover:bg-cfTeal/20 transition-colors">
              <svg class="w-6 h-6 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-lg font-display font-bold text-warmGray-900 mb-1">{{ prog.day }}</h3>
            <p class="text-cfTeal font-semibold text-sm mb-4">{{ prog.time }}</p>
            <p class="text-warmGray-500 text-sm leading-relaxed whitespace-pre-wrap">{{ prog.description }}</p>
          </div>
        </div>
      </div>

      <!-- Annual Feasts -->
      <div v-if="settings.programs_annual?.length">
        <div class="bg-warmGray-900 rounded-[2rem] p-10 md:p-16">
          <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4">
            <span class="text-cfTeal text-sm font-semibold">Calendar</span>
          </div>
          <h2 class="text-xl md:text-lg font-display font-medium text-white mb-10">Annual Feasts & Services</h2>
          <div class="space-y-4">
            <div v-for="(feast, index) in settings.programs_annual" :key="index" class="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-colors duration-300">
              <div class="shrink-0 bg-cfGold text-warmGray-900 font-bold text-sm uppercase tracking-wider py-2 px-5 rounded-full text-center min-w-[8rem]">
                {{ feast.month }}
              </div>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">{{ feast.title }}</h3>
                <p class="text-warmGray-400 text-sm whitespace-pre-wrap leading-relaxed">{{ feast.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';
import { useSettings } from '~/composables/useSettings';

const { settings, pending } = useSettings();

const eventsPending = ref(true);
const events = ref<any[]>([]);

onMounted(async () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase || 'http://localhost:3005/api';

  try {
    const res = await fetch(`${apiBase}/events`);
    const json = await res.json();
    events.value = json.data || json || [];
  } catch (err) {
    console.error('Failed to fetch events:', err);
  } finally {
    eventsPending.value = false;
  }
});
</script>
