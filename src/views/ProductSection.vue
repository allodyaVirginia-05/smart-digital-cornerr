<script setup>
import { ref, computed } from 'vue'
import { products } from '../data/products'

const search = ref('')
const category = ref('Semua')

// const categories = ['Semua', 'Makanan', 'Minuman', 'Kerajinan']

const filteredProducts = computed(() => {
  return products.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.value.toLowerCase())

    const matchCategory = category.value === 'Semua' ? true : item.category === category.value

    return matchSearch && matchCategory
  })
})
</script>

<template>
  <main class="">
    <!-- HEADER -->

    <section class="bg-background py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-4xl font-bold text-center text-secondary">Produk UMKM Desa Srowo</h1>

        <p class="text-center text-gray-500 mt-4">
          Berbagai produk unggulan hasil karya masyarakat Desa Srowo
        </p>
      </div>
    </section>

    <!-- FILTER -->

    <section class="max-w-7xl mx-auto px-6 py-10">
      <div class="flex flex-col md:flex-row gap-4 justify-between">
        <!-- <select v-model="category" class="border rounded-xl px-4 py-3">
          <option v-for="item in categories" :key="item">
            {{ item }}
          </option>
        </select> -->

        <input
          v-model="search"
          type="text"
          placeholder="Cari produk..."
          class="flex border rounded-xl px-4 py-3"
        />
      </div>
    </section>

    <!-- PRODUK -->

    <section class="max-w-7xl mx-auto px-6 pb-20">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white rounded-2xl shadow overflow-hidden hover:shadow-xl duration-300"
        >
          <img :src="product.image" class="h-48 w-full object-cover" />

          <div class="p-4">
            <h3 class="font-bold text-lg text-secondary">
              {{ product.name }}
            </h3>

            <p class="text-sm text-gray-500 mt-2">
              {{ product.description }}
            </p>

            <!-- <p class="mt-3 font-bold text-green-700">Rp {{ product.price }}</p> -->

            <RouterLink
              :to="`/product/${product.id}`"
              class="block text-center mt-4 w-full bg-secondary text-white py-2 rounded-lg hover:bg-hover"
            >
              Lihat Detail
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
