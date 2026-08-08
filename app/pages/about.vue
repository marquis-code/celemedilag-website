<template>
  <div class="bg-ivory overflow-hidden">
    <!-- Hero Section -->
    <section class="relative w-full h-screen flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="about">
        <template #fallback>
          <img src="~/assets/image/hero_about.png" alt="About Us" class="absolute inset-0 w-full h-full object-cover" />
        </template>
      </HeroSection>
      
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">About CELEMEDILAG</span>
        </div>
        <h1 class="text-xl md:text-lg font-display font-medium leading-tight mb-4">Our Story</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">
          Discover the rich history, tenets, and spiritual foundation of CELEMEDILAG.
        </p>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="container mx-auto px-6 py-20">
      <div v-if="pending" class="py-32 flex justify-center items-center">
        <div class="flex flex-col items-center">
          <div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin mb-4"></div>
          <div class="text-warmGray-400 font-medium">Loading content...</div>
        </div>
      </div>
      
      <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-14">
        <!-- Sidebar Navigation -->
        <div class="lg:col-span-4 hidden lg:block">
          <div class="sticky top-28 bg-white rounded-3xl shadow-sm border border-warmGray-100 p-8">
            <h3 class="font-display font-bold text-lg mb-6 text-warmGray-900">Contents</h3>
            <ul class="space-y-2">
              <li><a href="#history" class="text-warmGray-500 hover:text-cfTeal hover:bg-cfTeal/5 transition-all px-4 py-2.5 rounded-xl flex items-center text-sm font-medium">Foundation History</a></li>
              <li v-if="settings.about_tenets?.length"><a href="#tenets" class="text-warmGray-500 hover:text-cfTeal hover:bg-cfTeal/5 transition-all px-4 py-2.5 rounded-xl flex items-center text-sm font-medium">Tenets & Mode of Worship</a></li>
              <li v-if="settings.about_rites?.length"><a href="#sacraments" class="text-warmGray-500 hover:text-cfTeal hover:bg-cfTeal/5 transition-all px-4 py-2.5 rounded-xl flex items-center text-sm font-medium">Holy Rites & Sacraments</a></li>
              <li v-if="settings.about_churchStructure"><a href="#structure" class="text-warmGray-500 hover:text-cfTeal hover:bg-cfTeal/5 transition-all px-4 py-2.5 rounded-xl flex items-center text-sm font-medium">Church Structure</a></li>
            </ul>
          </div>
        </div>

        <!-- Content Area -->
        <div class="lg:col-span-8 space-y-20">
          
          <!-- History Section -->
          <div id="history" class="scroll-mt-32">
            <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4">
              <span class="text-cfTeal text-sm font-semibold">Foundation</span>
            </div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Foundation History</h2>
            <div class="prose prose-lg prose-warmGray max-w-none bg-white rounded-3xl p-8 md:p-10 border border-warmGray-100 shadow-sm" v-html="settings.about_foundationHistory || '<p class=\'italic text-warmGray-400\'>History content is being updated...</p>'"></div>
          </div>

          <!-- Tenets Section -->
          <div v-if="settings.about_tenets?.length" id="tenets" class="scroll-mt-32">
            <div class="inline-flex items-center bg-cfGold/10 rounded-full px-4 py-1.5 mb-4">
              <span class="text-cfGold text-sm font-semibold">Our Faith</span>
            </div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Tenets & Mode of Worship</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(tenet, index) in settings.about_tenets" :key="index" class="bg-white p-6 rounded-2xl border border-warmGray-100 flex items-start space-x-4 hover:shadow-md hover:border-cfTeal/20 transition-all duration-300 group">
                <div class="w-8 h-8 rounded-full bg-cfTeal/10 flex items-center justify-center shrink-0 group-hover:bg-cfTeal/20 transition-colors">
                  <svg class="w-4 h-4 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="text-warmGray-700 leading-relaxed text-sm">{{ tenet }}</span>
              </div>
            </div>
          </div>

          <!-- Sacraments Section -->
          <div v-if="settings.about_rites?.length" id="sacraments" class="scroll-mt-32">
            <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4">
              <span class="text-cfTeal text-sm font-semibold">Sacred Rites</span>
            </div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Holy Rites & Sacraments</h2>
            <div class="space-y-4">
              <div v-for="(rite, index) in settings.about_rites" :key="index" class="bg-warmGray-900 text-white p-8 rounded-3xl hover:shadow-xl hover:shadow-warmGray-900/20 transition-all duration-300 group">
                <h3 class="font-display font-bold text-xl text-cfGold mb-3 group-hover:text-cfTeal transition-colors">{{ rite.name }}</h3>
                <p class="text-warmGray-400 leading-relaxed whitespace-pre-wrap">{{ rite.description }}</p>
              </div>
            </div>
          </div>

          <!-- Structure Section -->
          <div v-if="settings.about_churchStructure" id="structure" class="scroll-mt-32">
            <div class="inline-flex items-center bg-cfGold/10 rounded-full px-4 py-1.5 mb-4">
              <span class="text-cfGold text-sm font-semibold">Organization</span>
            </div>
            <h2 class="text-xl md:text-lg font-display font-medium text-warmGray-900 mb-8">Church Structure</h2>
            <div class="bg-white p-8 md:p-10 rounded-3xl border border-warmGray-100 shadow-sm">
              <div class="prose prose-lg prose-warmGray max-w-none" v-html="settings.about_churchStructure"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '~/composables/useSettings';

const { settings, pending } = useSettings();
</script>
