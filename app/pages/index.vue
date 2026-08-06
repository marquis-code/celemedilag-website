<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative bg-royalBlue text-white py-32 overflow-hidden">
      <!-- Use hero image if available, else fallback to dark overlay on blue -->
      <div 
        class="absolute inset-0 bg-cover bg-center" 
        :style="settings.heroImage ? `background-image: url('${settings.heroImage}')` : ''"
      ></div>
      <div class="absolute inset-0 bg-black" :class="settings.heroImage ? 'opacity-60' : 'opacity-40'"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-5xl md:text-7xl font-display font-bold mb-6 transition-all duration-300">
          {{ settings.heroHeadline || 'Raising Spiritually Grounded Believers' }}
        </h1>
        <p class="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light transition-all duration-300">
          {{ settings.heroSubheadline || 'Welcome to the official digital home of the Celestial Church of Christ Students Fellowship, College of Medicine, University of Lagos (CELEMEDILAG).' }}
        </p>
        <div class="space-x-4">
          <NuxtLink to="/about" class="bg-gold text-royalBlue px-8 py-3 rounded-full font-bold hover:bg-white transition text-lg">Discover More</NuxtLink>
          <NuxtLink to="/contact" class="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-royalBlue transition text-lg">Partner With Us</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Welcome Message & Quick Intro -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center max-w-4xl">
        <h2 class="text-3xl font-display font-bold text-royalBlue mb-6">Welcome to CELEMEDILAG</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          We exist to nurture spiritually grounded students, promote biblical discipleship, encourage academic excellence, strengthen fellowship among members, and extend the love of Christ through community service and medical outreach within CMUL and LUTH.
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
          <div class="w-16 h-16 bg-skyBlue/20 rounded-full flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-royalBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="text-2xl font-display font-bold text-royalBlue mb-4">Our Vision</h3>
          <p class="text-gray-600 leading-relaxed transition-all duration-300 whitespace-pre-wrap">
            {{ settings.vision || "To raise spiritually grounded believers who grow into their full potential in Christ, reveal God's glory on campus and beyond, and become leaders of excellence in every sphere of life." }}
          </p>
        </div>
        <div class="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
          <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
          </div>
          <h3 class="text-2xl font-display font-bold text-royalBlue mb-4">Our Mission</h3>
          <p class="text-gray-600 leading-relaxed transition-all duration-300 whitespace-pre-wrap">
            {{ settings.mission || "To nurture and disciple students into spiritual maturity, empowering them to manifest Christlike excellence in academics, character, leadership, and service." }}
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 bg-royalBlue text-white text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-display font-bold mb-6">Ready to Make an Impact?</h2>
        <p class="text-xl mb-10 font-light max-w-2xl mx-auto">Join our fellowship today or partner with us to spread the gospel and provide medical outreach to communities in need.</p>
        <div class="space-x-4">
          <NuxtLink to="/contact" class="bg-gold text-royalBlue px-8 py-3 rounded-full font-bold hover:bg-white transition text-lg inline-block">Join the Fellowship</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const settings = ref<Record<string, string>>({
  heroHeadline: '',
  heroSubheadline: '',
  heroImage: '',
  vision: '',
  mission: ''
});

// Fetch initial data
onMounted(async () => {
  try {
    const res = await fetch('http://127.0.0.1:3001/api/settings');
    const data = await res.json();
    data.forEach((item: any) => {
      settings.value[item.key] = item.value;
    });
  } catch (err) {
    console.error('Failed to fetch settings:', err);
  }
});

// Listen for WebSocket updates from backend
const { $latestUpdate } = useNuxtApp();

watch(() => $latestUpdate?.value, (update) => {
  if (update && update.type === 'setting') {
    // Hot swap the setting in real-time
    settings.value[update.key] = update.data.value;
  }
}, { deep: true });
</script>
