<template>
  <div class="bg-ivory overflow-hidden">
    <section class="relative h-[55vh] min-h-[400px] flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="blog">
        <template #fallback>
          <img src="~/assets/image/hero_blog.png" alt="Blog" class="absolute min-w-full min-h-full object-cover" />
        </template>
      </HeroSection>
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">News & Blog</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-display font-medium leading-tight mb-4">News & Blog</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Stay updated with the latest news, announcements, and articles from the fellowship.</p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div v-if="pending" class="py-32 flex justify-center"><div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin"></div></div>

      <div v-else-if="news.length === 0" class="text-center py-20 bg-white rounded-3xl border border-warmGray-100">
        <p class="text-warmGray-400">No news articles published yet.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="article in news" :key="article._id" class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-warmGray-100 group">
          
          <div class="h-56 relative overflow-hidden shrink-0">
            <img 
              :src="article.imageUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80'" 
              :alt="article.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div class="absolute top-4 left-4">
              <span class="bg-cfTeal text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{{ article.category || 'News' }}</span>
            </div>
          </div>
          
          <div class="p-7 flex-grow flex flex-col">
            <p class="text-cfGold text-xs font-bold uppercase tracking-widest mb-3">
              {{ new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
            </p>
            <h3 class="text-xl font-display font-bold text-warmGray-900 mb-3 group-hover:text-cfTeal transition-colors line-clamp-2">{{ article.title }}</h3>
            <p class="text-warmGray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{{ article.content }}</p>
            
            <div class="pt-5 border-t border-warmGray-100 flex items-center">
              <div class="w-9 h-9 rounded-full bg-warmGray-100 flex items-center justify-center text-warmGray-500 text-xs font-bold uppercase mr-3">
                {{ article.author ? article.author.substring(0,2) : 'CM' }}
              </div>
              <p class="text-sm font-semibold text-warmGray-900">{{ article.author || 'CMUL Media' }}</p>
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
const news = ref<any[]>([]);

onMounted(async () => {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || 'http://localhost:3005/api';
    const res = await fetch(`${apiBase}/news`);
    const json = await res.json();
    news.value = json.data || json || [];
  } catch (err) {
    console.error('Failed to fetch news:', err);
  } finally {
    pending.value = false;
  }
});
</script>
