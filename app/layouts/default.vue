<template>
  <div class="min-h-screen bg-white text-gray-900 font-body flex flex-col">
    <!-- Navbar -->
    <header class="bg-royalBlue text-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="text-2xl font-display font-bold tracking-wider">CELEMEDILAG</span>
        </NuxtLink>
        
        <nav class="hidden md:flex space-x-6 font-medium text-sm">
          <NuxtLink to="/" class="hover:text-gold transition">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-gold transition">About Us</NuxtLink>
          <NuxtLink to="/leadership" class="hover:text-gold transition">Leadership</NuxtLink>
          <NuxtLink to="/departments" class="hover:text-gold transition">Departments</NuxtLink>
          <NuxtLink to="/programs" class="hover:text-gold transition">Programs</NuxtLink>
          <NuxtLink to="/worship" class="hover:text-gold transition">Worship & Service</NuxtLink>
          <NuxtLink to="/sermons" class="hover:text-gold transition">Sermons</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-gold transition">Blog</NuxtLink>
          <NuxtLink to="/alumni" class="hover:text-gold transition">Alumni</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-gold transition">Contact</NuxtLink>
        </nav>

        <div class="hidden md:block">
          <NuxtLink to="/contact" class="bg-gold text-royalBlue px-5 py-2 rounded-full font-bold hover:bg-white transition shadow-md">Join Us</NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-display font-bold mb-4 text-gold">CELEMEDILAG</h3>
          <p class="text-gray-400 text-sm">Celestial Church of Christ Students Fellowship, College of Medicine, University of Lagos.</p>
        </div>
        <div>
          <h4 class="font-bold mb-4 text-skyBlue">Quick Links</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/about" class="hover:text-white transition">About Us</NuxtLink></li>
            <li><NuxtLink to="/events" class="hover:text-white transition">Upcoming Events</NuxtLink></li>
            <li><NuxtLink to="/sermons" class="hover:text-white transition">Sermons & Resources</NuxtLink></li>
            <li><NuxtLink to="/alumni" class="hover:text-white transition">Alumni Network</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4 text-skyBlue">Contact</h4>
          <p class="text-sm text-gray-400">CMUL/LUTH Campus, Idi-Araba, Lagos</p>
          <p class="text-sm text-gray-400 mt-2">Email: info@celemedilag.org</p>
        </div>
      </div>
      <div class="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
        &copy; {{ new Date().getFullYear() }} CELEMEDILAG. All rights reserved.
      </div>
    </footer>
  </div>
</template>
