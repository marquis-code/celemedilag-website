<template>
  <div class="bg-ivory overflow-hidden">
    <section class="relative w-full h-screen flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="leadership">
        <template #fallback>
          <img src="~/assets/image/hero_leadership.png" alt="Leadership" class="absolute inset-0 w-full h-full object-cover" />
        </template>
      </HeroSection>
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">Our Leadership</span>
        </div>
        <h1 class="text-xl md:text-lg font-display font-medium leading-tight mb-4">Leadership</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Understanding the spiritual ranks, robes, and leadership structure.</p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div v-if="pending" class="py-32 flex justify-center"><div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin"></div></div>
      
      <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div class="lg:col-span-4 hidden lg:block">
          <div class="sticky top-28 bg-white rounded-3xl shadow-sm border border-warmGray-100 p-8">
            <h3 class="font-display font-bold text-lg mb-6 text-warmGray-900">Categories</h3>
            <ul class="space-y-2">
              <li v-if="settings.leadership_male?.length"><a href="#male" class="text-warmGray-500 hover:text-cfTeal hover:bg-cfTeal/5 transition-all px-4 py-2.5 rounded-xl flex items-center text-sm font-medium">Male Line</a></li>
              <li v-if="settings.leadership_female?.length"><a href="#female" class="text-warmGray-500 hover:text-cfTeal hover:bg-cfTeal/5 transition-all px-4 py-2.5 rounded-xl flex items-center text-sm font-medium">Female Line</a></li>
              <li v-if="settings.leadership_prophets?.length"><a href="#prophets" class="text-warmGray-500 hover:text-cfTeal hover:bg-cfTeal/5 transition-all px-4 py-2.5 rounded-xl flex items-center text-sm font-medium">Prophets & Prophetesses</a></li>
              <li v-if="settings.leadership_functions?.length"><a href="#functions" class="text-warmGray-500 hover:text-cfTeal hover:bg-cfTeal/5 transition-all px-4 py-2.5 rounded-xl flex items-center text-sm font-medium">Functions of Ranks</a></li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-20">
          <!-- Student Exco -->
          <div v-if="leaders.length > 0" class="mb-8">
            <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4">
              <span class="text-cfTeal text-sm font-semibold">Student Executive</span>
            </div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Student Executive Council</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div v-for="leader in leaders" :key="leader._id" class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group border border-warmGray-100">
                <div class="h-64 overflow-hidden relative">
                  <img :src="leader.avatar || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-t from-warmGray-900/80 via-transparent to-transparent"></div>
                  <div class="absolute bottom-4 left-5 right-5">
                    <div class="inline-flex bg-cfGold text-warmGray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">{{ leader.position }}</div>
                    <h3 class="text-lg font-display font-bold text-white">{{ leader.name }}</h3>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-cfTeal text-sm font-medium mb-2">{{ leader.department }} · {{ leader.tenure }}</p>
                  <p class="text-warmGray-500 text-sm line-clamp-3 mb-4">{{ leader.bio }}</p>
                  <a :href="`mailto:${leader.email}`" class="text-warmGray-900 text-sm font-semibold hover:text-cfTeal transition-colors flex items-center group/link">
                    Contact
                    <svg class="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Male Line -->
          <div v-if="settings.leadership_male?.length" id="male" class="scroll-mt-32">
            <div class="inline-flex items-center bg-cfGold/10 rounded-full px-4 py-1.5 mb-4"><span class="text-cfGold text-sm font-semibold">Hierarchy</span></div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Male Leadership Line</h2>
            <div class="space-y-3">
              <div v-for="(item, index) in settings.leadership_male" :key="index" class="bg-white p-6 rounded-2xl border border-warmGray-100 flex flex-col md:flex-row md:items-center gap-4 hover:border-cfGold/30 hover:shadow-md transition-all duration-300">
                <div class="font-display font-bold text-lg text-cfTeal w-48 shrink-0">{{ item.rank }}</div>
                <div class="text-warmGray-600 leading-relaxed text-sm">{{ item.description }}</div>
              </div>
            </div>
          </div>

          <!-- Female Line -->
          <div v-if="settings.leadership_female?.length" id="female" class="scroll-mt-32">
            <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4"><span class="text-cfTeal text-sm font-semibold">Hierarchy</span></div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Female Leadership Line</h2>
            <div class="space-y-3">
              <div v-for="(item, index) in settings.leadership_female" :key="index" class="bg-white p-6 rounded-2xl border border-warmGray-100 flex flex-col md:flex-row md:items-center gap-4 hover:border-cfTeal/30 hover:shadow-md transition-all duration-300">
                <div class="font-display font-bold text-lg text-cfGold w-48 shrink-0">{{ item.rank }}</div>
                <div class="text-warmGray-600 leading-relaxed text-sm">{{ item.description }}</div>
              </div>
            </div>
          </div>

          <!-- Prophets -->
          <div v-if="settings.leadership_prophets?.length" id="prophets" class="scroll-mt-32">
            <div class="inline-flex items-center bg-cfGold/10 rounded-full px-4 py-1.5 mb-4"><span class="text-cfGold text-sm font-semibold">Spiritual Ranks</span></div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Prophets & Prophetesses</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-warmGray-900 p-8 rounded-3xl text-white">
                <h3 class="font-display font-bold text-xl text-cfTeal mb-6 pb-4 border-b border-warmGray-700">Prophets</h3>
                <ul class="space-y-5">
                  <li v-for="(item, index) in settings.leadership_prophets.filter((p: any) => p.category === 'Prophet')" :key="index">
                    <div class="font-bold text-base text-white mb-1">{{ item.rank }}</div>
                    <div class="text-warmGray-400 text-sm">{{ item.description }}</div>
                  </li>
                </ul>
              </div>
              <div class="bg-white border border-warmGray-100 p-8 rounded-3xl shadow-sm">
                <h3 class="font-display font-bold text-xl text-cfGold mb-6 pb-4 border-b border-warmGray-100">Prophetesses</h3>
                <ul class="space-y-5">
                  <li v-for="(item, index) in settings.leadership_prophets.filter((p: any) => p.category === 'Prophetess')" :key="index">
                    <div class="font-bold text-base text-warmGray-900 mb-1">{{ item.rank }}</div>
                    <div class="text-warmGray-500 text-sm">{{ item.description }}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Functions -->
          <div v-if="settings.leadership_functions?.length" id="functions" class="scroll-mt-32">
            <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4"><span class="text-cfTeal text-sm font-semibold">Roles</span></div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Functions of Ranks</h2>
            <div class="bg-white p-8 rounded-3xl border border-warmGray-100 shadow-sm">
              <ul class="space-y-4">
                <li v-for="(func, index) in settings.leadership_functions" :key="index" class="flex items-start space-x-4 text-warmGray-700">
                  <div class="w-7 h-7 rounded-full bg-cfTeal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <span class="text-sm leading-relaxed">{{ func }}</span>
                </li>
              </ul>
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

const leaders = ref<any[]>([]);

onMounted(async () => {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || 'http://localhost:3005/api';
    
    // Fetch Leaders
    const resLeaders = await fetch(`${apiBase}/leadership`);
    const jsonLeaders = await resLeaders.json();
    leaders.value = jsonLeaders.data || jsonLeaders || [];
    
  } catch (err) {
    console.error('Failed to fetch leadership data:', err);
  }
});
</script>
