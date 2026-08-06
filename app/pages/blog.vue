<template>
  <div>
    <!-- Hero -->
    <section class="bg-royalBlue text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">Blog & CELEMEDILAG Digest</h1>
        <p class="text-lg md:text-xl font-light max-w-2xl mx-auto">Read devotionals, campus life updates, event reports, and our digital monthly publication.</p>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        
        <!-- Categories -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button @click="selectedCategory = ''" :class="['border border-gray-200 px-6 py-2 rounded-full text-sm font-medium transition', selectedCategory === '' ? 'bg-royalBlue text-white border-royalBlue' : 'bg-white hover:bg-skyBlue hover:text-white']">All</button>
          <button @click="selectedCategory = 'Devotionals'" :class="['border border-gray-200 px-6 py-2 rounded-full text-sm font-medium transition', selectedCategory === 'Devotionals' ? 'bg-royalBlue text-white border-royalBlue' : 'bg-white hover:bg-skyBlue hover:text-white']">Devotionals</button>
          <button @click="selectedCategory = 'Campus Life'" :class="['border border-gray-200 px-6 py-2 rounded-full text-sm font-medium transition', selectedCategory === 'Campus Life' ? 'bg-royalBlue text-white border-royalBlue' : 'bg-white hover:bg-skyBlue hover:text-white']">Campus Life</button>
          <button @click="selectedCategory = 'Medical Missions'" :class="['border border-gray-200 px-6 py-2 rounded-full text-sm font-medium transition', selectedCategory === 'Medical Missions' ? 'bg-royalBlue text-white border-royalBlue' : 'bg-white hover:bg-skyBlue hover:text-white']">Medical Missions</button>
          <button @click="selectedCategory = 'Fellowship News'" :class="['border border-gray-200 px-6 py-2 rounded-full text-sm font-medium transition', selectedCategory === 'Fellowship News' ? 'bg-royalBlue text-white border-royalBlue' : 'bg-white hover:bg-skyBlue hover:text-white']">Fellowship News</button>
        </div>

        <!-- Blog Grid -->
        <div v-if="pending" class="text-center text-gray-500 py-12">Loading articles...</div>
        <div v-else-if="error" class="text-center text-red-500 py-12">Error loading articles.</div>
        <div v-else-if="filteredNews.length === 0" class="text-center text-gray-500 py-12">No articles found in this category.</div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="article in filteredNews" :key="article._id" class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
            <div class="p-6 flex-grow">
              <span class="text-xs font-bold text-skyBlue uppercase tracking-wider mb-2 block">{{ article.category }}</span>
              <h3 class="text-xl font-display font-bold text-royalBlue mb-3 leading-tight">{{ article.title }}</h3>
              <p class="text-gray-600 mb-4 text-sm line-clamp-3">{{ article.content }}</p>
            </div>
            <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
              <span class="font-bold">By {{ article.author }}</span>
              <span>{{ new Date(article.createdAt).toLocaleDateString() }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: news, pending, error } = await useFetch<any[]>('http://localhost:3001/api/news')
const selectedCategory = ref('')

const filteredNews = computed(() => {
  if (!news.value) return []
  if (!selectedCategory.value) return news.value
  return news.value.filter(n => n.category === selectedCategory.value)
})
</script>
