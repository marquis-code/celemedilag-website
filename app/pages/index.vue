<template>
  <div class="bg-ivory overflow-hidden">

    <section class="relative h-[90vh] min-h-[650px] flex items-center justify-center text-white">

      <HeroSection 
        :settings="settings" 
        pageKey="home" 
        customHeroImageKey="heroImage"
      >
        <template #fallback>
          <video autoplay loop muted playsinline class="absolute min-w-full min-h-full object-cover">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-audience-in-a-concert-with-hands-up-4444-large.mp4" type="video/mp4" />
          </video>
        </template>
      </HeroSection>
      
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl flex flex-col items-center">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <div class="w-2 h-2 bg-cfTeal rounded-full mr-3 animate-glow-pulse"></div>
          <span class="text-sm font-medium text-white/90 tracking-wide">Welcome to CELEMEDILAG</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-8 animate-fade-in-up">
          {{ settings.heroHeadline || 'Discover a Christian student group on your campus.' }}
        </h1>
        
        <p class="text-lg md:text-xl text-white/70 max-w-2xl mb-10 animate-fade-in-up" style="animation-delay: 0.2s">
          {{ settings.heroSubheadline || 'Connect with CELEMEDILAG' }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 0.4s">
          <NuxtLink to="/contact" class="bg-cfTeal text-white px-8 py-4 rounded-full font-semibold hover:bg-cfTeal/90 hover:shadow-xl hover:shadow-cfTeal/30 transition-all duration-300 flex items-center justify-center group">
            Get Involved
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </NuxtLink>
          <NuxtLink to="/about" class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
            Our Story
          </NuxtLink>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div class="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- Departments Section -->
    <section class="relative bg-warmGray-900 text-white py-28">
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div class="relative rounded-3xl overflow-hidden h-[450px] group">
          <img v-if="settings.departments_heroImage" :src="settings.departments_heroImage" alt="Students connecting" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <img v-else src="~/assets/image/hero_departments.png" alt="Students connecting" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-start justify-end p-10">
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-3 text-white">Get Connected</h2>
            <p class="text-gray-300 text-base max-w-sm mb-6">Find your unit and start serving with other students.</p>
            <NuxtLink to="/departments" class="bg-cfTeal text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cfTeal/30 transition-all">
              Explore Departments →
            </NuxtLink>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <h3 class="text-cfGold text-sm font-bold uppercase tracking-[0.2em] mb-6">Our Departments</h3>
          <div v-if="departmentsPending" class="animate-pulse space-y-4">
            <div class="h-6 bg-warmGray-700 rounded-xl w-3/4"></div>
            <div class="h-6 bg-warmGray-700 rounded-xl w-1/2"></div>
            <div class="h-6 bg-warmGray-700 rounded-xl w-5/6"></div>
          </div>
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <NuxtLink 
              v-for="dept in departments.slice(0, 8)" 
              :key="dept._id"
              :to="`/departments`"
              class="flex items-center justify-between text-warmGray-300 hover:text-white group bg-white/5 hover:bg-white/10 rounded-xl px-5 py-4 transition-all duration-300"
            >
              <span class="font-medium text-sm">{{ dept.name }}</span>
              <svg class="w-4 h-4 text-cfTeal transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="relative py-28 bg-ivory">
      <div class="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">

        <div class="w-full lg:w-1/2 relative">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 aspect-[4/5]">
            <img v-if="settings.about_heroImage" :src="settings.about_heroImage" alt="Worship" class="w-full h-full object-cover" />
            <img v-else src="~/assets/image/hero_about.png" alt="Worship" class="w-full h-full object-cover" />
          </div>
          <!-- Decorative ring -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-cfTeal/20 rounded-3xl -z-10"></div>
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-cfGold/10 rounded-3xl -z-10"></div>
        </div>

        <div class="w-full lg:w-1/2 space-y-6">
          <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-2">
            <span class="text-cfTeal text-sm font-semibold tracking-wide">About Us</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-display font-medium text-warmGray-900 leading-tight">About CELEMEDILAG</h2>
          <h3 class="text-xl text-warmGray-700 leading-relaxed font-medium">
            {{ settings.vision || 'Equipping students to implement and sustain dynamic campus ministries whose student worship God and change the world.' }}
          </h3>
          <p class="text-warmGray-500 italic font-medium">We Are For Christ, His Church, Campus, and Culture.</p>
          <p class="text-warmGray-600 leading-relaxed">
            {{ settings.mission || 'Founded years ago through the humble efforts of students. Over the last few years, we have grown to impact hundreds of students across the College of Medicine and LUTH.' }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink to="/about" class="bg-warmGray-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-warmGray-800 transition-all duration-300 inline-flex items-center group">
              Learn More
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </NuxtLink>
            <NuxtLink to="/contact" class="text-cfTeal font-semibold hover:text-cfTeal/80 transition-colors flex items-center px-4 py-3.5">
              Partner with Us
              <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources Section -->
    <section class="bg-cream py-28">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
          <div>
            <div class="inline-flex items-center bg-cfGold/10 rounded-full px-4 py-1.5 mb-4">
              <span class="text-cfGold text-sm font-semibold tracking-wide">Resources</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-display font-medium text-warmGray-900">Latest Resources</h2>
          </div>
          <NuxtLink to="/sermons" class="text-cfTeal font-semibold hover:text-cfTeal/80 transition-colors flex items-center group">
            View All
            <svg class="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </NuxtLink>
        </div>

        <div v-if="sermonsPending" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="animate-pulse">
            <div class="h-56 bg-warmGray-200 rounded-2xl mb-4"></div>
            <div class="h-6 bg-warmGray-200 rounded-xl w-3/4 mb-2"></div>
            <div class="h-4 bg-warmGray-200 rounded-xl w-1/2"></div>
          </div>
        </div>
        <div v-else-if="sermons.length === 0" class="text-warmGray-500 py-10 text-center bg-white rounded-3xl border border-warmGray-100">
          No resources found.
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="sermon in sermons.slice(0, 3)" 
            :key="sermon._id" 
            :to="`/sermons`"
            class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1"
          >
            <div class="overflow-hidden aspect-video relative">
              <img 
                :src="sermon.coverImageUrl || 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80'" 
                :alt="sermon.title" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-7">
              <p class="text-xs text-cfTeal font-bold uppercase tracking-wider mb-3">
                {{ new Date(sermon.date || sermon.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                <span v-if="sermon.preacher" class="text-warmGray-400"> · {{ sermon.preacher }}</span>
              </p>
              <h3 class="text-xl font-display font-bold text-warmGray-900 leading-tight mb-3 group-hover:text-cfTeal transition-colors">
                {{ sermon.title }} <span v-if="sermon.series" class="text-warmGray-400">| {{ sermon.series }}</span>
              </h3>
              <p class="text-sm text-warmGray-500 line-clamp-2 leading-relaxed">
                {{ sermon.summary }}
              </p>
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

const departments = ref<any[]>([]);
const sermons = ref<any[]>([]);
const departmentsPending = ref(true);
const sermonsPending = ref(true);

// Fetch initial data
onMounted(async () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase || 'http://localhost:3005/api';

  try {
    const res = await fetch(`${apiBase}/departments`);
    const json = await res.json();
    departments.value = json.data || json || [];
  } catch (err) {
    console.error('Failed to fetch departments:', err);
  } finally {
    departmentsPending.value = false;
  }

  try {
    const res = await fetch(`${apiBase}/sermons`);
    const json = await res.json();
    sermons.value = json.data || json || [];
  } catch (err) {
    console.error('Failed to fetch sermons:', err);
  } finally {
    sermonsPending.value = false;
  }
});
</script>
