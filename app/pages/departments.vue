<template>
  <div class="bg-ivory overflow-hidden">
    <!-- Hero -->
    <section class="relative h-[55vh] min-h-[400px] flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="departments">
        <template #fallback>
          <img src="~/assets/image/hero_departments.png" alt="Departments" class="absolute min-w-full min-h-full object-cover" />
        </template>
      </HeroSection>
      
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">Our Departments</span>
        </div>
        <h1 class="text-xl md:text-lg font-display font-medium leading-tight mb-4">Find Your Unit</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">
          Discover a place to serve God and grow with other students in the fellowship.
        </p>
      </div>
    </section>

    <!-- Main Content -->
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
      <div v-if="pending" class="py-32 flex justify-center items-center">
        <div class="flex flex-col items-center">
          <div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin mb-4"></div>
          <div class="text-warmGray-400 font-medium">Loading units...</div>
        </div>
      </div>
      
      <div v-else>
        <div v-if="filteredDepartments.length === 0" class="text-center py-20 bg-white rounded-3xl border border-warmGray-100">
          <p class="text-warmGray-400">No departments found in this category.</p>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="dept in filteredDepartments" :key="dept._id" class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group border border-warmGray-100 flex flex-col h-full hover:-translate-y-1">
            <div class="h-56 relative overflow-hidden shrink-0">
              <img 
                :src="dept.coverImageUrl || 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80'" 
                :alt="dept.name" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div class="absolute bottom-6 left-6 right-6">
                <h3 class="text-lg font-display font-bold text-white leading-tight">{{ dept.name }}</h3>
              </div>
            </div>
            
            <div class="p-8 flex-grow flex flex-col justify-between bg-white relative">
              <!-- Decorative element connecting image to content -->
              <div class="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>

              <div>
                <p class="text-warmGray-500 leading-relaxed text-sm mb-6">{{ dept.description }}</p>
              </div>
              
              <div class="pt-5 border-t border-warmGray-100 mt-auto flex items-center justify-between">
                <div>
                  <p class="text-[10px] text-warmGray-400 uppercase tracking-widest font-bold mb-1">Led By</p>
                  <p class="text-warmGray-900 font-semibold text-sm">{{ dept.hodName || dept.leaderName || 'To Be Announced' }}</p>
                </div>
                <NuxtLink to="/contact" class="w-10 h-10 rounded-xl bg-warmGray-50 text-warmGray-600 flex items-center justify-center hover:bg-cfTeal hover:text-white transition-colors group/btn">
                  <svg class="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </NuxtLink>
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
const departments = ref<any[]>([]);

const tabs = ['All', 'Spiritual', 'Service', 'Administrative'];
const selectedTab = ref('All');

const spiritualNames = ["Prophets and Prophetesses", "Choir Ministry", "Prayer Warriors"];
const serviceNames = ["Ushers & Security", "Welfare & Charity"];
const adminNames = ["Sunday School", "Media & IT"];

const filteredDepartments = computed(() => {
  if (selectedTab.value === 'All') return departments.value;
  
  return departments.value.filter(dept => {
    if (selectedTab.value === 'Spiritual') return spiritualNames.includes(dept.name);
    if (selectedTab.value === 'Service') return serviceNames.includes(dept.name);
    if (selectedTab.value === 'Administrative') return adminNames.includes(dept.name);
    return false;
  });
});

onMounted(async () => {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || 'http://localhost:3005/api';
    
    const res = await fetch(`${apiBase}/departments`);
    const json = await res.json();
    departments.value = json.data || json || [];
  } catch (err) {
    console.error('Failed to fetch departments:', err);
  } finally {
    pending.value = false;
  }
});
</script>
