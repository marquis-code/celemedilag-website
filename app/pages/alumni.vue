<template>
  <div class="bg-ivory overflow-hidden">
    <section class="relative w-full h-screen flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="alumni">
        <template #fallback>
          <img src="~/assets/image/hero_alumni.png" alt="Alumni" class="absolute inset-0 w-full h-full object-cover" />
        </template>
      </HeroSection>
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">Alumni Network</span>
        </div>
        <h1 class="text-xl md:text-lg font-display font-medium leading-tight mb-4">Alumni Network</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Connect with past members, read their stories, and see the legacy.</p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div v-if="pending" class="py-32 flex justify-center"><div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin"></div></div>

      <div v-else-if="alumni.length === 0" class="text-center py-20 bg-white rounded-3xl border border-warmGray-100">
        <p class="text-warmGray-400">No alumni profiles available yet.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="alumnus in alumni" :key="alumnus._id" class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-warmGray-100 group relative">
          
          <!-- Decorative corner -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-cfGold/5 rounded-bl-[3rem] transition-transform group-hover:scale-125 duration-500"></div>

          <div class="p-8 pb-0">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-16 rounded-2xl border-2 border-cfTeal/20 p-0.5 shrink-0 overflow-hidden bg-white shadow-sm">
                <img 
                  :src="alumnus.photoUrl || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'" 
                  :alt="alumnus.name" 
                  class="w-full h-full object-cover rounded-[0.65rem]"
                />
              </div>
              <div>
                <h3 class="text-lg font-display font-bold text-warmGray-900">{{ alumnus.name }}</h3>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-cfTeal text-xs font-bold bg-cfTeal/10 px-2 py-0.5 rounded-full">{{ alumnus.graduationYear }}</span>
                  <span class="text-warmGray-400 text-xs">{{ alumnus.profession || 'Alumnus' }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="px-8 pb-8 flex-grow flex flex-col justify-between">
            <div class="mb-6 relative">
              <svg class="absolute -top-3 -left-1 w-6 h-6 text-warmGray-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
              <p class="text-warmGray-600 leading-relaxed italic text-sm pl-6">{{ alumnus.bio }}</p>
            </div>
            
            <div class="border-t border-warmGray-100 pt-4 mt-auto">
              <p class="text-xs text-warmGray-400 font-bold uppercase tracking-widest mb-1">Roles Held</p>
              <p class="text-warmGray-900 font-medium text-sm">{{ alumnus.excoRole || 'Member' }}</p>
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
const alumni = ref<any[]>([]);

onMounted(async () => {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || 'http://localhost:3005/api';
    const res = await fetch(`${apiBase}/alumni`);
    const json = await res.json();
    alumni.value = json.data || json || [];
  } catch (err) {
    console.error('Failed to fetch alumni:', err);
  } finally {
    pending.value = false;
  }
});
</script>
