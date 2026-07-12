<script setup>
import { ref, computed } from 'vue'
import { gallery } from '../data/gallery'

const selectedCategory = ref('Semua')
const selectedImage = ref(null)

const categories = ['Semua', 'Produksi', 'Kegiatan', 'Produk']

const filteredGallery = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return gallery
  }

  return gallery.filter((item) => item.category === selectedCategory.value)
})

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}
</script>

<template>
  <main>
    <!-- HEADER -->

    <section class="bg-background py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-secondary">Galeri UMKM Desa Srowo</h1>

        <p class="mt-4 text-gray-600">Dokumentasi kegiatan dan produk unggulan Desa Srowo</p>
      </div>
    </section>

    <!-- FILTER -->

    <section class="max-w-7xl mx-auto px-6 py-10">
      <div class="flex flex-wrap justify-center gap-3">
        <button
          v-for="item in categories"
          :key="item"
          @click="selectedCategory = item"
          class="px-5 py-2 rounded-full transition"
          :class="selectedCategory === item ? 'bg-secondary text-white' : 'bg-white border'"
        >
          {{ item }}
        </button>
      </div>
    </section>

    <!-- GRID GALERI -->

    <section class="max-w-7xl mx-auto px-6 pb-20">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in filteredGallery"
          :key="item.id"
          @click="openImage(item)"
          class="group overflow-hidden rounded-2xl shadow-md cursor-pointer bg-white"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="h-64 w-full object-cover group-hover:scale-110 duration-500"
          />

          <div class="p-4">
            <h3 class="font-bold text-secondary">
              {{ item.title }}
            </h3>

            <p class="text-sm text-gray-500 mt-2">
              {{ item.category }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- MODAL -->

    <div
      v-if="selectedImage"
      @click="closeImage"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      <div class="max-w-4xl" @click.stop>
        <img :src="selectedImage.image" class="w-full rounded-2xl" />

        <h2 class="text-white text-center mt-4 text-xl">
          {{ selectedImage.title }}
        </h2>
      </div>
    </div>
  </main>
</template>
