<template>
  <div class="bg-ivory overflow-hidden">
    <!-- Hero Section -->
    <section class="relative w-full h-screen flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="gallery">
        <!-- <template #fallback>
          <img src="~/assets/image/hero_gallery.png" alt="Gallery" class="absolute inset-0 w-full h-full object-cover" />
        </template> -->
      </HeroSection>
      
      <div class="relative z-10 text-center px-6 animate-fade-in-up max-w-4xl">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">Photo Gallery</span>
        </div>
        <h1 class="text-xl md:text-lg font-display font-medium mb-4 text-white">Moments & Memories</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">
          Capturing the beautiful moments of worship, fellowship, and community.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-6 py-20">
      <div v-if="pending" class="flex justify-center py-20">
        <div class="flex flex-col items-center">
          <div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin mb-4"></div>
          <div class="text-warmGray-400 font-medium">Loading gallery...</div>
        </div>
      </div>
      
      <div v-else-if="photos.length === 0" class="text-center bg-white rounded-3xl border border-warmGray-100 py-20 text-warmGray-500 text-lg font-medium shadow-sm">
        No photos available at this time.
      </div>
      
      <div v-else>
        <!-- Masonry Grid Approach -->
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          <div 
            v-for="(photo, index) in photos" 
            :key="index"
            class="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-500 bg-warmGray-100 border border-warmGray-200 cursor-pointer"
          >
            <img 
              :src="photo.url" 
              :alt="photo.caption || 'Gallery Image'" 
              class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <!-- Glassmorphic overlay -->
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <div class="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div class="flex items-center justify-between">
                <p v-if="photo.caption" class="text-white text-sm font-medium pr-4 leading-snug">{{ photo.caption }}</p>
                <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRuntimeConfig } from '#imports';
import { useSettings } from '~/composables/useSettings';

const { settings } = useSettings();

const pending = ref(true);
const albums = ref<any[]>([]);

const photos = computed(() => {
  // Aggregate photos from all albums
  let allPhotos: any[] = [];
  albums.value.forEach(album => {
    if (album.photos && Array.isArray(album.photos)) {
      allPhotos = [...allPhotos, ...album.photos];
    }
  });
  return allPhotos;
});

onMounted(async () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase || 'http://localhost:3005/api';

  try {
    const res = await fetch(`${apiBase}/gallery`);
    const json = await res.json();
    albums.value = json.data || json || [];
  } catch (error) {
    console.error('Failed to fetch gallery:', error);
  } finally {
    pending.value = false;
  }
});
</script>
