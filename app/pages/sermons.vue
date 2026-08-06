<template>
  <div class="bg-ivory overflow-hidden">
    <section class="relative h-[55vh] min-h-[400px] flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="sermons">
        <template #fallback>
          <img src="~/assets/image/hero_sermons.png" alt="Sermons" class="absolute min-w-full min-h-full object-cover" />
        </template>
      </HeroSection>
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">Sermons & Resources</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-display font-medium leading-tight mb-4">Sermons & Resources</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Listen to life-transforming messages and teachings from our ministers.</p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div v-if="pending" class="py-32 flex justify-center"><div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin"></div></div>

      <div v-else-if="sermons.length === 0" class="text-center py-20 bg-white rounded-3xl border border-warmGray-100">
        <p class="text-warmGray-400">No sermons have been uploaded yet.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="sermon in sermons" :key="sermon._id" class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-warmGray-100 group">
          
          <div class="h-56 relative overflow-hidden shrink-0">
            <img 
              :src="sermon.thumbnailUrl || 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80'" 
              :alt="sermon.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <!-- Play Icon -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div class="w-16 h-16 bg-cfTeal/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform shadow-xl shadow-cfTeal/30">
                <svg class="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
              </div>
            </div>

            <!-- Badges -->
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm text-warmGray-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {{ sermon.type === 'video' ? 'Video' : 'Audio' }}
              </span>
            </div>
            
            <div class="absolute bottom-4 left-5">
              <p class="text-cfGold text-xs font-bold uppercase tracking-widest drop-shadow-md">
                {{ new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </p>
            </div>
          </div>
          
          <div class="p-7 flex-grow flex flex-col">
            <h3 class="text-xl font-display font-bold text-warmGray-900 mb-2 line-clamp-2 group-hover:text-cfTeal transition-colors">{{ sermon.title }}</h3>
            <p class="text-warmGray-500 text-sm mb-5 line-clamp-3 leading-relaxed flex-grow">{{ sermon.description }}</p>
            
            <div class="pt-5 border-t border-warmGray-100 flex items-center justify-between">
              <div>
                <p class="text-xs text-warmGray-400 uppercase tracking-wider font-bold mb-0.5">Minister</p>
                <p class="text-warmGray-900 font-semibold text-sm">{{ sermon.preacher }}</p>
              </div>
              <div class="text-right">
                <p class="text-xs text-warmGray-400 uppercase tracking-wider font-bold mb-0.5">Duration</p>
                <p class="text-warmGray-900 font-medium text-sm">{{ sermon.duration || '--:--' }}</p>
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

const { settings } = useSettings();

const pending = ref(true);
const sermons = ref<any[]>([]);

onMounted(async () => {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || 'http://localhost:3005/api';
    const res = await fetch(`${apiBase}/sermons`);
    const json = await res.json();
    sermons.value = json.data || json || [];
  } catch (err) {
    console.error('Failed to fetch sermons:', err);
  } finally {
    pending.value = false;
  }
});
</script>
