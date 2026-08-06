<template>
  <div>
    <section class="bg-royalBlue text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">Contact & Partnership</h1>
        <p class="text-lg md:text-xl font-light max-w-2xl mx-auto">Get in touch with us, or discover how you can partner with CELEMEDILAG for kingdom expansion.</p>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-display font-bold text-royalBlue mb-6">Send us a Message</h2>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalBlue bg-gray-50">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalBlue bg-gray-50">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalBlue bg-gray-50">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows="5" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalBlue bg-gray-50"></textarea>
            </div>
            <button type="submit" class="bg-royalBlue text-white px-8 py-3 rounded-full font-bold hover:bg-skyBlue transition w-full md:w-auto">Send Message</button>
          </form>
        </div>

        <!-- Contact Details & Partnership -->
        <div class="space-y-12">
          <div>
            <h2 class="text-2xl font-display font-bold text-royalBlue mb-6">Fellowship Location</h2>
            <div class="space-y-4 text-gray-700">
              <p class="flex items-start">
                <svg class="w-6 h-6 text-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>CMUL/LUTH Campus<br>Idi-Araba, Lagos, Nigeria</span>
              </p>
              <p class="flex items-center">
                <svg class="w-6 h-6 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>info@celemedilag.org</span>
              </p>
              <p class="flex items-center">
                <svg class="w-6 h-6 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                <span>WhatsApp: +234 XXX XXXX</span>
              </p>
            </div>
          </div>

          <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h2 class="text-2xl font-display font-bold text-royalBlue mb-4">Partner With Us</h2>
            <p class="text-gray-600 mb-6 text-sm">
              Support our community projects, medical outreach, and campus evangelism. Your sponsorship goes a long way in fulfilling our mission.
            </p>
            <button class="w-full bg-white border-2 border-royalBlue text-royalBlue px-6 py-3 rounded-full font-bold hover:bg-royalBlue hover:text-white transition">Download Sponsorship Proposal</button>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
