<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden">
    <!-- Carousel Mode -->
    <div v-if="heroType === 'carousel' && carouselImages.length > 0" class="absolute inset-0 w-full h-full">
      <TransitionGroup name="fade">
        <div v-for="(img, index) in carouselImages" :key="img" v-show="currentIndex === index" class="absolute inset-0 w-full h-full">
          <img :src="img" class="absolute min-w-full min-h-full object-cover" alt="Hero background carousel" />
        </div>
      </TransitionGroup>
      
      <!-- Navigation dots -->
      <div v-if="carouselImages.length > 1" class="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-30">
        <button 
          v-for="(_, index) in carouselImages" 
          :key="index"
          @click="currentIndex = index"
          class="rounded-full transition-all duration-500"
          :class="currentIndex === index ? 'bg-white w-8 h-2.5' : 'bg-white/40 w-2.5 h-2.5 hover:bg-white/70'"
          aria-label="Slide to image"
        ></button>
      </div>
    </div>
    
    <!-- Single Image Mode -->
    <img v-else-if="singleImage" :src="singleImage" class="absolute min-w-full min-h-full object-cover" alt="Hero background" />

    <!-- Fallback -->
    <slot v-else name="fallback"></slot>

    <!-- Dark gradient overlay to ensure text visibility -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>
    <!-- Subtle grain texture -->
    <div class="absolute inset-0 bg-grain opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
    
    <slot name="extra-overlay"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

const props = withDefaults(defineProps<{
  settings: Record<string, any>;
  pageKey: string;
  customHeroImageKey?: string;
}>(), {});

const heroType = computed(() => props.settings[`${props.pageKey}_heroType`] || 'single');
const carouselImages = computed(() => props.settings[`${props.pageKey}_heroCarouselImages`] || []);
const singleImage = computed(() => props.settings[props.customHeroImageKey || `${props.pageKey}_heroImage`]);

const currentIndex = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

const startTimer = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    if (heroType.value === 'carousel' && carouselImages.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length;
    }
  }, 6000);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

watch(carouselImages, () => {
  currentIndex.value = 0;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
