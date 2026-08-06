<template>
  <div>
    <!-- Hero -->
    <section class="bg-royalBlue text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">Worship & Service Guides</h1>
        <p class="text-lg md:text-xl font-light max-w-2xl mx-auto">Explore the detailed, simplified service guides and sacred hymns used by conductors and members of the Celestial Church of Christ.</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <!-- Order of Services -->
          <div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-skyBlue rounded-lg flex items-center justify-center text-white mr-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </div>
              <h2 class="text-3xl font-display font-bold text-royalBlue">Order of Services</h2>
            </div>
            <p class="text-gray-600 mb-6">Detailed, step-by-step guides for Service Conductors across various occasions.</p>
            
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-skyBlue transition group">
                <h3 class="font-bold text-gray-800 group-hover:text-skyBlue">Order of Morning Service</h3>
                <p class="text-sm text-gray-500">Daily at 6:00 AM</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-skyBlue transition group">
                <h3 class="font-bold text-gray-800 group-hover:text-skyBlue">Order of Seekers Service</h3>
                <p class="text-sm text-gray-500">Wednesday at 9:00 AM</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-skyBlue transition group">
                <h3 class="font-bold text-gray-800 group-hover:text-skyBlue">Order of Service on Lord's Day</h3>
                <p class="text-sm text-gray-500">Sunday Devotional Service at 10:00 AM</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-skyBlue transition group">
                <h3 class="font-bold text-gray-800 group-hover:text-skyBlue">Order of Service for New Moon</h3>
                <p class="text-sm text-gray-500">First Thursday of the month at 12 Midnight</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-skyBlue transition group">
                <h3 class="font-bold text-gray-800 group-hover:text-skyBlue">Order of Service for Baby Christening</h3>
                <p class="text-sm text-gray-500">Performed on the 8th day</p>
              </div>
            </div>
            
            <button class="mt-6 text-royalBlue font-bold hover:underline flex items-center">
              View All Services 
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>

          <!-- Hymns -->
          <div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-skyBlue rounded-lg flex items-center justify-center text-white mr-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
              </div>
              <h2 class="text-3xl font-display font-bold text-royalBlue">Sacred Hymns</h2>
            </div>
            <p class="text-gray-600 mb-6">A collection of divinely revealed hymns in Yoruba and English for our various rites and worships.</p>

            <div class="space-y-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-gray-800">Hymn 1 (Processional)</h3>
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Yoruba / English</span>
                </div>
                <div class="text-gray-600 text-sm italic">
                  "Jerih mo yah mah... Awon Angeli kun f'ayo lorun..."<br>
                  "The host of Angels full of joy in heaven..."
                </div>
              </div>

              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-gray-800">Hymn 2 (Lighting Candles)</h3>
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Yoruba / English</span>
                </div>
                <div class="text-gray-600 text-sm italic">
                  "Yah rah Sarah, Yah rah Samahtah..."<br>
                  "Kindle the light, Divine from heaven above..."
                </div>
              </div>

               <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-gray-800">Hymn 3 (Kneeling Down)</h3>
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Yoruba / English</span>
                </div>
                <div class="text-gray-600 text-sm italic">
                  "Yah rah man, Hi Yah rah man..."<br>
                  "Oh come unto the Lord..."
                </div>
              </div>
            </div>

            <button class="mt-6 text-royalBlue font-bold hover:underline flex items-center">
              Browse Full Hymnal 
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
