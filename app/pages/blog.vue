<template>
  <div class="bg-ivory overflow-hidden">
    <section class="relative w-full h-screen flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="blog">
        <template #fallback>
          <img src="~/assets/image/hero_blog.png" alt="Blog" class="absolute inset-0 w-full h-full object-cover" />
        </template>
      </HeroSection>
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">News & Blog</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-display font-medium leading-tight mb-4">News & Blog</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Stay updated with the latest news, announcements, and articles from the fellowship.</p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div v-if="pending" class="py-32 flex justify-center"><div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin"></div></div>

      <div v-else-if="news.length === 0" class="text-center py-20 bg-white rounded-3xl border border-warmGray-100">
        <p class="text-warmGray-400">No news articles published yet.</p>
      </div>

      <div v-else class="space-y-16">
        <!-- Featured Article -->
        <NuxtLink :to="`/news/${news[0]._id}`" class="block group relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-warmGray-200/40 border border-warmGray-100/50">
          <div class="flex flex-col lg:flex-row h-full">
            <div class="lg:w-3/5 h-[400px] lg:h-[500px] relative overflow-hidden">
              <img 
                :src="news[0].coverImageUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80'" 
                :alt="news[0].title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-6 left-6">
                <span class="bg-cfTeal/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">{{ news[0].category || 'Featured' }}</span>
              </div>
            </div>
            
            <div class="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center bg-white relative">
              <!-- Decorative element -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-cfGold/5 rounded-bl-[4rem] transition-transform group-hover:scale-110 duration-500"></div>
              
              <div class="relative z-10">
                <p class="text-cfTeal text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {{ new Date(news[0].publishedAt || news[0].createdAt || new Date()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
                </p>
                <h3 class="text-2xl lg:text-3xl font-display font-bold text-warmGray-900 mb-6 group-hover:text-cfTeal transition-colors leading-tight">{{ news[0].title }}</h3>
                <p class="text-warmGray-500 text-base mb-8 line-clamp-3 leading-relaxed">{{ news[0].summary || news[0].content }}</p>
                
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-cfTeal/10 flex items-center justify-center text-cfTeal text-sm font-bold uppercase mr-4 border border-cfTeal/20 shadow-sm">
                    {{ news[0].author ? news[0].author.substring(0,2) : 'CM' }}
                  </div>
                  <div>
                    <p class="text-base font-bold text-warmGray-900">{{ news[0].author || 'CMUL Media' }}</p>
                    <p class="text-xs text-warmGray-400 font-medium tracking-wide uppercase mt-0.5">Author</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Grid Articles -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink :to="`/news/${article._id}`" v-for="article in news.slice(1)" :key="article._id" class="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-warmGray-200/30 hover:shadow-2xl hover:shadow-cfTeal/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-warmGray-100/50 group">
            
            <div class="h-64 relative overflow-hidden shrink-0">
              <img 
                :src="article.coverImageUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80'" 
                :alt="article.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div class="absolute top-5 left-5">
                <span class="bg-white/90 backdrop-blur-sm text-warmGray-900 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">{{ article.category || 'News' }}</span>
              </div>
            </div>
            
            <div class="p-8 flex-grow flex flex-col relative bg-white">
              <div class="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-warmGray-50">
                 <svg class="w-5 h-5 text-cfTeal transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>

              <p class="text-warmGray-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {{ new Date(article.publishedAt || article.createdAt || new Date()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </p>
              <h3 class="text-xl font-display font-bold text-warmGray-900 mb-4 group-hover:text-cfTeal transition-colors line-clamp-2 leading-snug">{{ article.title }}</h3>
              <p class="text-warmGray-500 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">{{ article.summary || article.content }}</p>
              
              <div class="pt-6 border-t border-warmGray-100 flex items-center mt-auto">
                <div class="w-10 h-10 rounded-full bg-warmGray-100 flex items-center justify-center text-warmGray-600 text-xs font-bold uppercase mr-3 group-hover:bg-cfTeal group-hover:text-white transition-colors duration-300">
                  {{ article.author ? article.author.substring(0,2) : 'CM' }}
                </div>
                <p class="text-sm font-semibold text-warmGray-900 group-hover:text-cfTeal transition-colors">{{ article.author || 'CMUL Media' }}</p>
              </div>
            </div>
          </NuxtLink>
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
