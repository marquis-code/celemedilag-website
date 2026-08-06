<template>
  <div>
    <!-- Hero -->
    <section class="bg-royalBlue text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">Sermons & Resources</h1>
        <p class="text-lg md:text-xl font-light max-w-2xl mx-auto">Listen to audio messages, watch video sermons, and download Bible study notes and teaching materials.</p>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div class="lg:col-span-2">
          <h2 class="text-3xl font-display font-bold text-royalBlue mb-8">Recent Sermons</h2>
          
          <div class="space-y-6">
            <div v-for="i in 4" :key="i" class="flex flex-col sm:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
              <div class="sm:w-1/3 bg-gray-200 flex items-center justify-center p-8">
                <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div class="p-6 sm:w-2/3 flex flex-col justify-center">
                <h3 class="text-xl font-display font-bold text-royalBlue mb-2">The Power of His Resurrection</h3>
                <p class="text-sm text-gray-500 mb-4">Pastor Anonymous • Sunday Service • Apr 9, 2023</p>
                <div class="flex space-x-4">
                  <button class="bg-royalBlue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-skyBlue transition">Listen Audio</button>
                  <button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">Watch Video</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-gray-50 p-8 rounded-xl border border-gray-100 sticky top-24">
            <h2 class="text-2xl font-display font-bold text-royalBlue mb-6">Resources & Downloads</h2>
            <ul class="space-y-4">
              <li>
                <a href="#" class="flex items-center text-gray-700 hover:text-skyBlue transition">
                  <svg class="w-5 h-5 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <span>Bible Study Notes - Book of John</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center text-gray-700 hover:text-skyBlue transition">
                  <svg class="w-5 h-5 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <span>Fellowship Constitution PDF</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center text-gray-700 hover:text-skyBlue transition">
                  <svg class="w-5 h-5 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <span>Evangelism Tracts Template</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
