<template>
  <div class="bg-ivory overflow-hidden">
    <section class="relative h-[55vh] min-h-[400px] flex items-center justify-center text-white">
      <HeroSection :settings="settings" pageKey="contact">
        <template #fallback>
          <img src="~/assets/image/hero_contact.png" alt="Contact" class="absolute min-w-full min-h-full object-cover" />
        </template>
      </HeroSection>
      <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span class="text-sm font-medium text-white/90 tracking-wide">Contact & Partner</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-display font-medium leading-tight mb-4">Contact & Partner</h1>
        <p class="text-lg text-white/70 max-w-xl mx-auto">Get in touch with us or submit a partnership request.</p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Contact Info & Partnership -->
        <div class="space-y-8">
          <div class="bg-warmGray-900 text-white p-10 rounded-3xl">
            <div class="inline-flex items-center bg-cfGold/10 rounded-full px-4 py-1.5 mb-6">
              <span class="text-cfGold text-sm font-semibold">Reach Us</span>
            </div>
            <h2 class="text-3xl font-display font-bold mb-8 text-white">Get In Touch</h2>
            <ul class="space-y-6">
              <li class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-base text-white mb-1">Our Location</h3>
                  <p class="text-warmGray-400 text-sm">{{ settings.address || 'CMUL/LUTH Campus, Idi-Araba, Lagos' }}</p>
                </div>
              </li>
              <li class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-base text-white mb-1">Email Us</h3>
                  <p class="text-warmGray-400 text-sm">{{ settings.email || 'info@celemedilag.org' }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Partnership Proposal Download -->
          <div v-if="settings.contact_partnershipLink" class="bg-white border border-warmGray-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
            <div class="w-14 h-14 rounded-2xl bg-cfTeal/10 flex items-center justify-center mb-5">
              <svg class="w-7 h-7 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
            <h2 class="text-xl font-display font-bold text-warmGray-900 mb-2">Partnership Proposal</h2>
            <p class="text-warmGray-500 text-sm mb-6">{{ settings.contact_partnership || 'Learn more about how you can partner with us to spread the gospel and impact lives.' }}</p>
            <a :href="settings.contact_partnershipLink" target="_blank" download class="bg-cfTeal text-white px-7 py-3 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-cfTeal/30 transition-all flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download Proposal
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-3xl shadow-sm border border-warmGray-100 p-10">
          <div class="inline-flex items-center bg-cfTeal/10 rounded-full px-4 py-1.5 mb-4">
            <span class="text-cfTeal text-sm font-semibold">Message Us</span>
          </div>
          <h2 class="text-3xl font-display font-bold text-warmGray-900 mb-8">Send a Message</h2>
          
          <div v-if="submitSuccess" class="bg-cfTeal/5 text-cfTeal p-8 rounded-2xl text-center border border-cfTeal/20">
            <div class="w-16 h-16 bg-cfTeal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-cfTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 class="font-bold text-xl mb-2">Message Sent!</h3>
            <p class="text-cfTeal/80 mb-4">Thank you for reaching out. We will get back to you shortly.</p>
            <button @click="submitSuccess = false" class="text-sm font-bold underline hover:no-underline">Send another message</button>
          </div>
          
          <form v-else @submit.prevent="submitForm" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-warmGray-700 mb-2">Name</label>
                <input v-model="form.name" type="text" required class="w-full border border-warmGray-200 bg-warmGray-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-cfTeal/30 focus:border-cfTeal transition-all text-sm" placeholder="Your full name" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-warmGray-700 mb-2">Email</label>
                <input v-model="form.email" type="email" required class="w-full border border-warmGray-200 bg-warmGray-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-cfTeal/30 focus:border-cfTeal transition-all text-sm" placeholder="your@email.com" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-warmGray-700 mb-2">Subject / Inquiry Type</label>
              <select v-model="form.subject" required class="w-full border border-warmGray-200 bg-warmGray-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-cfTeal/30 focus:border-cfTeal transition-all text-sm appearance-none">
                <option value="General Inquiry">General Inquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Prayer Request">Prayer Request</option>
                <option value="Testimony">Testimony</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-warmGray-700 mb-2">Message</label>
              <textarea v-model="form.message" required rows="5" class="w-full border border-warmGray-200 bg-warmGray-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-cfTeal/30 focus:border-cfTeal transition-all resize-none text-sm" placeholder="How can we help you?"></textarea>
            </div>
            
            <button type="submit" :disabled="isSubmitting" class="w-full bg-warmGray-900 text-white font-semibold py-4 rounded-xl hover:bg-cfTeal transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm">
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
            <p v-if="submitError" class="text-red-500 text-sm text-center">{{ submitError }}</p>
          </form>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRuntimeConfig } from '#imports';
import { useSettings } from '~/composables/useSettings';

const { settings } = useSettings();

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

const form = ref({
  name: '',
  email: '',
  subject: 'General Inquiry',
  message: ''
});

const submitForm = async () => {
  isSubmitting.value = true;
  submitError.value = '';
  
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || 'http://localhost:3005/api';
    
    const res = await fetch(`${apiBase}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });
    
    if (!res.ok) throw new Error('Failed to submit form');
    
    submitSuccess.value = true;
    form.value = { name: '', email: '', subject: 'General Inquiry', message: '' };
  } catch (err) {
    submitError.value = 'Failed to send message. Please try again later.';
    console.error(err);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
