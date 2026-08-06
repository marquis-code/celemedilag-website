<template>
  <div class="bg-ivory overflow-hidden">
    <section class="relative h-[55vh] min-h-[400px] flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="worship">
        <template #fallback>
          <img src="~/assets/image/hero_worship.png" alt="Worship" class="absolute min-w-full min-h-full object-cover" />
        </template>
      </HeroSection>
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">Worship & Service</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-display font-medium leading-tight mb-4">Worship & Service</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Explore the detailed service guides and sacred hymns of the Celestial Church of Christ.</p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div v-if="pending" class="py-32 flex justify-center"><div class="h-12 w-12 border-4 border-cfTeal border-t-transparent rounded-full animate-spin"></div></div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- Order of Services -->
        <div class="space-y-8">
          <div>
            <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4">
              <span class="text-cfTeal text-sm font-semibold">Service Guide</span>
            </div>
            <h2 class="text-3xl font-display font-bold text-warmGray-900">Order of Services</h2>
            <p class="text-warmGray-500 text-sm mt-2">Detailed step-by-step guides</p>
          </div>
          
          <div class="space-y-4">
            <div v-if="!settings.worship_services?.length" class="text-warmGray-400 italic bg-white rounded-2xl p-8 border border-warmGray-100">No service guides available.</div>
            <div v-for="(svc, index) in settings.worship_services" :key="index" class="bg-white p-6 rounded-2xl border border-warmGray-100 hover:border-cfTeal/20 hover:shadow-md transition-all duration-300 cursor-pointer group flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-cfTeal/10 flex items-center justify-center shrink-0 text-cfTeal font-bold text-sm group-hover:bg-cfTeal group-hover:text-white transition-colors">
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="font-display font-bold text-lg text-warmGray-900 group-hover:text-cfTeal transition-colors mb-1">{{ svc.title }}</h3>
                <p class="text-warmGray-500 leading-relaxed text-sm">{{ svc.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Hymns -->
        <div class="space-y-8">
          <div>
            <div class="inline-flex items-center bg-cfGold/10 rounded-full px-4 py-1.5 mb-4">
              <span class="text-cfGold text-sm font-semibold">Sacred Music</span>
            </div>
            <h2 class="text-3xl font-display font-bold text-warmGray-900">Sacred Hymns</h2>
            <p class="text-warmGray-500 text-sm mt-2">Divinely revealed hymns in Yoruba & English</p>
          </div>

          <div class="space-y-4">
            <div v-if="!settings.worship_hymns?.length" class="text-warmGray-400 italic bg-white rounded-2xl p-8 border border-warmGray-100">No hymns available.</div>
            <div v-for="(hymn, index) in settings.worship_hymns" :key="index" class="bg-warmGray-900 text-white p-8 rounded-3xl group hover:shadow-xl hover:shadow-warmGray-900/20 transition-all duration-300 relative overflow-hidden">
              <div class="absolute top-4 right-4">
                <span class="bg-cfGold text-warmGray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{{ hymn.category }}</span>
              </div>
              <h3 class="font-display font-bold text-xl text-cfTeal mb-4 pr-20">{{ hymn.title }}</h3>
              <div class="text-warmGray-400 italic whitespace-pre-wrap leading-relaxed font-serif text-sm">
                {{ hymn.lyrics }}
              </div>
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
