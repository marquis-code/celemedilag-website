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
        <h1 class="text-xl md:text-lg font-display font-medium leading-tight mb-4">Sermons & Resources</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Listen to life-transforming messages and teachings from our ministers.</p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-12 md:py-20">
      
      <!-- Tab Navigation -->
      <div class="flex flex-nowrap overflow-x-auto gap-3 mb-10 pb-4 scrollbar-hide">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          @click="selectedTab = tab"
          :class="[
            'px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap border',
            selectedTab === tab 
              ? 'bg-cfTeal text-white border-cfTeal shadow-md' 
              : 'bg-white text-warmGray-600 border-warmGray-200 hover:border-cfTeal hover:text-cfTeal'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="pending" class="py-32 flex justify-center"><div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin"></div></div>

      <div v-else-if="filteredSermons.length === 0" class="text-center py-20 bg-white rounded-3xl border border-warmGray-100">
        <p class="text-warmGray-400">No resources found in this category.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="sermon in filteredSermons" 
          :key="sermon._id" 
          class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-warmGray-100 group cursor-pointer"
          @click="playSermon(sermon)"
        >
          
          <div class="h-56 relative overflow-hidden shrink-0">
            <img 
              :src="sermon.coverImageUrl || sermon.thumbnailUrl || 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80'" 
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
              <span class="bg-white/90 backdrop-blur-sm text-warmGray-900 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                {{ sermon.type }}
              </span>
            </div>
            
            <div class="absolute bottom-4 left-5">
              <p class="text-cfGold text-xs font-bold uppercase tracking-widest drop-shadow-md">
                {{ new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </p>
            </div>
          </div>
          
          <div class="p-7 flex-grow flex flex-col">
            <h3 class="text-lg font-display font-bold text-warmGray-900 mb-2 line-clamp-2 group-hover:text-cfTeal transition-colors">{{ sermon.title }}</h3>
            <p class="text-warmGray-500 text-sm mb-5 line-clamp-3 leading-relaxed flex-grow">{{ sermon.summary || sermon.description }}</p>
            
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

    <!-- Media Player Modal -->
    <div v-if="showModal && activeSermon" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div class="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in-up">
        
        <!-- Modal Header -->
        <div class="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-start z-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
          <div class="text-white drop-shadow-md pointer-events-auto max-w-xs sm:max-w-md">
            <h3 class="text-xl sm:text-lg font-bold line-clamp-1">{{ activeSermon.title }}</h3>
            <p class="text-sm text-white/70">{{ activeSermon.preacher }}</p>
          </div>
          <button @click.stop="closeModal" class="pointer-events-auto bg-black/50 hover:bg-white/20 backdrop-blur-md text-white p-2.5 rounded-full transition-colors flex-shrink-0 border border-white/10">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <!-- Video Player -->
        <div v-if="activeSermon.type === 'Video'" class="w-full aspect-video pt-16 pb-4 px-4 sm:px-6">
          <iframe 
            v-if="activeSermon.videoUrl"
            :src="activeSermon.videoUrl" 
            class="w-full h-full rounded-2xl shadow-lg border border-white/5 bg-black" 
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div v-else class="w-full h-full flex items-center justify-center text-white/50 bg-white/5 rounded-2xl">
            No video URL provided
          </div>
        </div>
        
        <!-- Audio Player -->
        <div v-else-if="activeSermon.type === 'Audio'" class="w-full pt-20 sm:pt-24 pb-12 px-6 sm:px-12 flex flex-col items-center">
          <img :src="activeSermon.coverImageUrl || activeSermon.thumbnailUrl || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80'" class="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full shadow-2xl border-4 border-white/10 mb-10 shadow-cfTeal/20 animate-pulse-slow" />
          <audio v-if="activeSermon.fileUrl" controls class="w-full max-w-md custom-audio-player" autoplay>
            <source :src="activeSermon.fileUrl" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
          <div v-else class="text-white/50 text-center mt-4">
            No audio file provided
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRuntimeConfig } from '#imports';
import { useSettings } from '~/composables/useSettings';

const { settings } = useSettings();

const pending = ref(true);
const sermons = ref<any[]>([]);

const tabs = ['All', 'Video', 'Audio', 'PDF'];
const selectedTab = ref('All');

const filteredSermons = computed(() => {
  if (selectedTab.value === 'All') return sermons.value;
  return sermons.value.filter(s => s.type === selectedTab.value);
});

const showModal = ref(false);
const activeSermon = ref<any>(null);

const playSermon = (sermon: any) => {
  if (sermon.type === 'PDF') {
    if (sermon.fileUrl) {
      window.open(sermon.fileUrl, '_blank');
    }
    return;
  }
  activeSermon.value = sermon;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  // Delay clearing activeSermon to allow transition (if we add transition later)
  setTimeout(() => {
    activeSermon.value = null;
  }, 100);
};

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
