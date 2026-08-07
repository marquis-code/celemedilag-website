<template>
  <div class="bg-ivory min-h-screen">
    <div v-if="pending" class="py-32 flex justify-center"><div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin"></div></div>
    <div v-else-if="!article" class="text-center py-32">
      <h1 class="text-lg font-display font-bold text-warmGray-900 mb-4">Article Not Found</h1>
      <NuxtLink to="/blog" class="text-cfTeal hover:underline">Back to News & Blog</NuxtLink>
    </div>
    <article v-else class="pb-20">
      <!-- Hero Section -->
      <header class="relative h-[70vh] min-h-[500px] flex items-center pt-20 pb-32 text-white">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            :src="article.coverImageUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80'" 
            :alt="article.title"
            class="w-full h-full object-cover scale-105"
          />
          <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        </div>
        
        <div class="relative z-10 container mx-auto px-6 max-w-5xl animate-fade-in-up">
          <div class="flex items-center gap-4 mb-8">
            <NuxtLink to="/blog" class="text-base font-bold text-white hover:text-cfGold transition-colors flex items-center group">
              <svg class="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to Blog
            </NuxtLink>
            <span class="text-white/40">•</span>
            <span class="bg-cfTeal/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">{{ article.category || 'News' }}</span>
          </div>
          
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-8 tracking-tight">{{ article.title }}</h1>
          
          <div class="flex items-center text-white/90">
            <div class="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-lg font-bold uppercase mr-4 shadow-xl">
              {{ article.author ? article.author.substring(0,2) : 'CM' }}
            </div>
            <div>
              <p class="text-base font-bold text-white">{{ article.author || 'CMUL Media' }}</p>
              <p class="text-white/70 text-sm font-medium tracking-wide mt-1">
                {{ new Date(article.publishedAt || article.createdAt || new Date()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
              </p>
            </div>
          </div>
        </div>
      </header>

      <!-- Content Section (Overlapping Hero) -->
      <div class="container mx-auto px-4 sm:px-6 max-w-4xl relative -mt-24 z-20">
        <div class="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-2xl shadow-black/10 border border-warmGray-100/50">
          
          <!-- Summary/Intro -->
          <div v-if="article.summary" class="mb-12 pb-10 border-b border-warmGray-100">
            <p class="text-lg sm:text-xl md:text-lg leading-relaxed font-medium text-warmGray-900">{{ article.summary }}</p>
          </div>
          
          <!-- Main Content -->
          <div class="prose prose-lg md:prose-xl prose-headings:font-display prose-headings:font-bold prose-headings:text-warmGray-900 prose-p:text-warmGray-700 prose-p:leading-relaxed prose-a:text-cfTeal prose-a:font-semibold prose-a:no-underline hover:prose-a:underline max-w-none" v-html="formattedContent"></div>
          
          <!-- Tags -->
          <div v-if="article.tags && article.tags.length > 0" class="mt-16 pt-8 border-t border-warmGray-100">
            <h4 class="text-sm font-extrabold uppercase tracking-widest text-warmGray-400 mb-6">Tags</h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="tag in article.tags" :key="tag" class="bg-warmGray-100/80 hover:bg-warmGray-200 text-warmGray-600 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer">#{{ tag }}</span>
            </div>
          </div>
          
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRuntimeConfig } from '#imports';

const route = useRoute();
const id = route.params.id;

const pending = ref(true);
const article = ref<any>(null);

const formattedContent = computed(() => {
  if (!article.value?.content) return '';
  // Basic conversion of line breaks to paragraphs if it's plain text
  return article.value.content.split('\n\n').map((p: string) => `<p>${p}</p>`).join('');
});

onMounted(async () => {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || 'http://localhost:3005/api';
    const res = await fetch(`${apiBase}/news/${id}`);
    const json = await res.json();
    article.value = json.data || json || null;
  } catch (err) {
    console.error('Failed to fetch article:', err);
  } finally {
    pending.value = false;
  }
});
</script>
