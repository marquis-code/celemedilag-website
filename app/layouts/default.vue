<template>
  <div class="min-h-screen bg-ivory text-warmGray-900 font-body flex flex-col selection:bg-cfTeal/20 selection:text-cfTeal">
    <!-- Navbar -->
    <header 
      class="fixed w-full top-0 z-50 transition-all duration-500"
      :class="isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-2.5' : 'bg-transparent py-5'"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img src="~/assets/image/campus-church-logo.png" class="h-10 transition-transform duration-300 group-hover:scale-105" />
        </NuxtLink>
        
        <!-- Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-1 text-sm font-medium">
          <div class="relative group">
            <NuxtLink to="/about" class="px-4 py-2 rounded-full transition-all duration-300" :class="isScrolled ? 'text-warmGray-600 hover:text-cfTeal hover:bg-cfTeal/5' : 'text-white/90 hover:text-white hover:bg-white/10'">
              About <span class="ml-0.5 text-[10px] opacity-60">▾</span>
            </NuxtLink>
            <div class="absolute left-0 mt-1 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-white/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden p-1.5">
              <NuxtLink to="/about" class="block px-4 py-2.5 rounded-xl text-warmGray-700 hover:bg-cfTeal/10 hover:text-cfTeal transition-colors">Our Story</NuxtLink>
              <NuxtLink to="/leadership" class="block px-4 py-2.5 rounded-xl text-warmGray-700 hover:bg-cfTeal/10 hover:text-cfTeal transition-colors">Leadership</NuxtLink>
            </div>
          </div>
          
          <NuxtLink to="/departments" class="px-4 py-2 rounded-full transition-all duration-300" :class="isScrolled ? 'text-warmGray-600 hover:text-cfTeal hover:bg-cfTeal/5' : 'text-white/90 hover:text-white hover:bg-white/10'">
            Departments
          </NuxtLink>
          
          <div class="relative group">
            <NuxtLink to="/programs" class="px-4 py-2 rounded-full transition-all duration-300" :class="isScrolled ? 'text-warmGray-600 hover:text-cfTeal hover:bg-cfTeal/5' : 'text-white/90 hover:text-white hover:bg-white/10'">
              Programs <span class="ml-0.5 text-[10px] opacity-60">▾</span>
            </NuxtLink>
            <div class="absolute left-0 mt-1 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-white/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden p-1.5">
              <NuxtLink to="/worship" class="block px-4 py-2.5 rounded-xl text-warmGray-700 hover:bg-cfTeal/10 hover:text-cfTeal transition-colors">Worship Services</NuxtLink>
              <NuxtLink to="/programs" class="block px-4 py-2.5 rounded-xl text-warmGray-700 hover:bg-cfTeal/10 hover:text-cfTeal transition-colors">Special Events</NuxtLink>
            </div>
          </div>

          <div class="relative group">
            <NuxtLink to="/sermons" class="px-4 py-2 rounded-full transition-all duration-300" :class="isScrolled ? 'text-warmGray-600 hover:text-cfTeal hover:bg-cfTeal/5' : 'text-white/90 hover:text-white hover:bg-white/10'">
              Resources <span class="ml-0.5 text-[10px] opacity-60">▾</span>
            </NuxtLink>
            <div class="absolute left-0 mt-1 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-white/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden p-1.5">
              <NuxtLink to="/sermons" class="block px-4 py-2.5 rounded-xl text-warmGray-700 hover:bg-cfTeal/10 hover:text-cfTeal transition-colors">Sermons Library</NuxtLink>
              <NuxtLink to="/blog" class="block px-4 py-2.5 rounded-xl text-warmGray-700 hover:bg-cfTeal/10 hover:text-cfTeal transition-colors">News & Blog</NuxtLink>
              <NuxtLink to="/gallery" class="block px-4 py-2.5 rounded-xl text-warmGray-700 hover:bg-cfTeal/10 hover:text-cfTeal transition-colors">Gallery</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/alumni" class="px-4 py-2 rounded-full transition-all duration-300" :class="isScrolled ? 'text-warmGray-600 hover:text-cfTeal hover:bg-cfTeal/5' : 'text-white/90 hover:text-white hover:bg-white/10'">Alumni</NuxtLink>
          <NuxtLink to="/contact" class="px-4 py-2 rounded-full transition-all duration-300" :class="isScrolled ? 'text-warmGray-600 hover:text-cfTeal hover:bg-cfTeal/5' : 'text-white/90 hover:text-white hover:bg-white/10'">Partner</NuxtLink>
        </nav>

        <!-- Right CTA / Login -->
        <div class="hidden lg:flex items-center space-x-4">
          <NuxtLink to="/contact" class="bg-cfTeal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-cfTeal/90 hover:shadow-lg hover:shadow-cfTeal/25 transition-all duration-300">
            Get Involved
          </NuxtLink>
          <!-- <a href="https://celemedilag-admin.onrender.com/login" target="_blank" class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300" :class="isScrolled ? 'text-warmGray-400 hover:bg-warmGray-100 hover:text-warmGray-700' : 'text-white/60 hover:bg-white/10 hover:text-white'">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </a> -->
        </div>
        
        <!-- Mobile Menu Toggle -->
        <button class="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors" :class="isScrolled ? 'text-warmGray-700 hover:bg-warmGray-100' : 'text-white hover:bg-white/10'" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Mobile Dropdown -->
      <transition name="slide-down">
        <div v-if="mobileMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-warmGray-100 shadow-2xl shadow-black/10">
          <nav class="flex flex-col py-3 px-6 space-y-1">
            <NuxtLink to="/about" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">About</NuxtLink>
            <NuxtLink to="/departments" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">Departments</NuxtLink>
            <NuxtLink to="/programs" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">Programs</NuxtLink>
            <NuxtLink to="/worship" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">Worship</NuxtLink>
            <NuxtLink to="/sermons" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">Sermons</NuxtLink>
            <NuxtLink to="/gallery" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">Gallery</NuxtLink>
            <NuxtLink to="/blog" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">Blog</NuxtLink>
            <NuxtLink to="/alumni" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">Alumni</NuxtLink>
            <NuxtLink to="/contact" class="text-warmGray-700 hover:text-cfTeal hover:bg-cfTeal/5 px-4 py-3 rounded-xl transition-colors" @click="mobileMenuOpen = false">Partner</NuxtLink>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-warmGray-900 text-warmGray-400 pt-20 pb-10 relative overflow-hidden">
      <!-- Decorative element -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-cfTeal to-transparent"></div>
      
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div class="col-span-1 md:col-span-1">
            <NuxtLink to="/" class="flex items-center space-x-2 mb-6">
              <img src="~/assets/image/campus-church-logo.png" class="h-10 opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </NuxtLink>
            <p class="text-sm text-warmGray-500 leading-relaxed">Raising spiritually grounded believers on campus and beyond.</p>
          </div>

          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul class="space-y-3 text-sm">
              <li><NuxtLink to="/departments" class="hover:text-cfTeal transition-colors duration-200">Departments</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-cfTeal transition-colors duration-200">About Us</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-cfTeal transition-colors duration-200">Partner</NuxtLink></li>
              <li><NuxtLink to="/gallery" class="hover:text-cfTeal transition-colors duration-200">Gallery</NuxtLink></li>
              <li><a href="http://localhost:3002" target="_blank" class="hover:text-cfTeal transition-colors duration-200">Staff Login</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-5">Connect</h4>
            <div class="flex space-x-3">
              <a v-if="settings?.instagram" :href="settings.instagram" target="_blank" class="w-10 h-10 bg-warmGray-800 rounded-xl flex items-center justify-center hover:bg-cfTeal hover:text-white hover:shadow-lg hover:shadow-cfTeal/20 transition-all duration-300">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a v-if="settings?.tiktok" :href="settings.tiktok" target="_blank" class="w-10 h-10 bg-warmGray-800 rounded-xl flex items-center justify-center hover:bg-cfTeal hover:text-white hover:shadow-lg hover:shadow-cfTeal/20 transition-all duration-300">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.66-.21-3.11 2.05-6.04 5.08-6.62 1.05-.2 2.12-.17 3.16.09.02.02.04.05.05.07v4.06c-1.09-.34-2.31-.22-3.32.32-1.15.63-1.87 1.88-1.85 3.24.03 1.06.66 2.07 1.59 2.53 1.15.56 2.6.49 3.65-.24.78-.54 1.25-1.45 1.28-2.43.05-3.32.02-6.63.02-9.95.02-2.73.01-5.46.01-8.2z"></path></svg>
              </a>
              <a v-if="settings?.youtube" :href="settings.youtube" target="_blank" class="w-10 h-10 bg-warmGray-800 rounded-xl flex items-center justify-center hover:bg-cfTeal hover:text-white hover:shadow-lg hover:shadow-cfTeal/20 transition-all duration-300">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768-1.56-.418-7.814-.418-7.814-.418s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768-.418 1.56-.418 4.814-.418 4.814s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768 1.56.418 7.814.418 7.814.418s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768.418-1.56.418-4.814.418-4.814s0-3.254-.418-4.814zm-11.582 7.814v-6l5.5 3-5.5 3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div class="text-sm">
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-5">Info</h4>
            <p class="mb-2 text-warmGray-500">&copy; {{ new Date().getFullYear() }} CELEMEDILAG.</p>
            <!-- <p class="text-warmGray-500">Built with ♥ by <span class="text-cfGold font-medium">Marquis</span></p> -->
          </div>
        </div>
      </div>
      
      <!-- Floating Action Button -->
      <NuxtLink to="/contact" class="fixed bottom-8 right-8 w-14 h-14 bg-cfTeal rounded-2xl flex items-center justify-center shadow-xl shadow-cfTeal/30 hover:shadow-2xl hover:shadow-cfTeal/40 hover:scale-110 transition-all duration-300 z-50 group">
        <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      </NuxtLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useSettings } from '~/composables/useSettings';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const { settings, fetchSettings, setupWatcher } = useSettings();

onMounted(() => {
  fetchSettings();
  setupWatcher();
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
