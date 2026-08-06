<template>
  <div>
    <!-- Hero -->
    <section class="bg-royalBlue text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">Alumni Network</h1>
        <p class="text-lg md:text-xl font-light max-w-2xl mx-auto">Connecting past members, celebrating achievements, and fostering lifelong relationships.</p>
      </div>
    </section>

    <!-- Alumni Directory & Testimonials -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl font-display font-bold text-royalBlue mb-6">Alumni Directory</h2>
          <p class="text-gray-600 mb-6">Stay connected with your set and other graduates of the College of Medicine and LUTH who were part of this great fellowship.</p>
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
            <h3 class="font-bold text-xl text-skyBlue mb-2">Search Alumni</h3>
            <input type="text" placeholder="Search by name, set, or specialty..." class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalBlue">
          </div>
        </div>

        <div>
          <h2 class="text-3xl font-display font-bold text-royalBlue mb-6">Alumni Testimonials</h2>
          <div class="space-y-6">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 italic text-gray-700">
              "CELEMEDILAG was my spiritual anchor during my grueling medical training. The friendships and mentorship I received there shaped my career."
              <span class="block text-right text-sm font-bold text-royalBlue mt-4">- Dr. Anonymous (Class of '15)</span>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 italic text-gray-700">
              "The outreach programs ignited my passion for public health. I am forever grateful for the foundation."
              <span class="block text-right text-sm font-bold text-royalBlue mt-4">- Dr. John Doe (Class of '18)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alumni Registration CTA -->
    <section class="py-16 bg-gold text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-display font-bold text-royalBlue mb-4">Not yet registered on the Alumni Network?</h2>
        <p class="text-royalBlue/80 mb-8 max-w-xl mx-auto">Update your details to stay in touch, mentor students, and participate in alumni events.</p>
        <button class="bg-royalBlue text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-royalBlue transition text-lg shadow-md">Register Now</button>
      </div>
    </section>
  </div>
</template>
