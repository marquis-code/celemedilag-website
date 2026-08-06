<template>
  <div>
    <section class="bg-royalBlue text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">Gallery</h1>
        <p class="text-lg md:text-xl font-light max-w-2xl mx-auto">Explore moments from our worship sessions, conferences, medical outreach, and fellowship activities.</p>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button class="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-skyBlue hover:text-white transition">All</button>
          <button class="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-skyBlue hover:text-white transition">Worship</button>
          <button class="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-skyBlue hover:text-white transition">Conferences</button>
          <button class="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-skyBlue hover:text-white transition">Medical Outreach</button>
          <button class="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-skyBlue hover:text-white transition">Fellowship Activities</button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="i in 12" :key="i" class="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative cursor-pointer">
            <div class="absolute inset-0 bg-royalBlue/0 group-hover:bg-royalBlue/40 transition flex items-center justify-center">
              <svg class="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition transform scale-50 group-hover:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
            </div>
            <div class="w-full h-full flex items-center justify-center text-gray-400">Image {{i}}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
