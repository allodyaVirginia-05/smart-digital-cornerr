<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'

const route = useRoute()

const product = computed(() => {
  return products.find((item) => item.id == route.params.id)
})
</script>

<template>
  <main class="py-20">
    <div v-if="product" class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Gambar -->

        <div>
          <img :src="product.image" :alt="product.name" class="w-full rounded-3xl shadow-lg" />
        </div>

        <!-- Detail -->

        <div>
          <span class="bg-accent text-secondary px-4 py-2 rounded-full text-sm">
            {{ product.category }}
          </span>

          <h1 class="text-4xl font-bold text-secondary mt-5">
            {{ product.name }}
          </h1>

          <!-- <h2 class="text-3xl font-bold text-green-600 mt-4">Rp {{ product.price }}</h2> -->

          <p class="text-gray-600 mt-6 leading-relaxed">
            {{ product.description }}
          </p>

          <!-- Deskripsi Lengkap -->

          <div class="mt-8">
            <h3 class="text-2xl font-semibold text-secondary mb-3">Deskripsi Produk</h3>

            <p class="text-gray-600 leading-relaxed">
              {{ product.detailDescription }}
            </p>
          </div>

          <!-- UMKM Pembuat -->

          <div class="mt-10">
            <h3 class="text-2xl font-semibold text-secondary mb-4">UMKM Pembuat Produk</h3>

            <div class="grid gap-4">
              <div
                v-for="umkm in product.umkm"
                :key="umkm.name"
                class="bg-accent rounded-xl p-4"
              >
                <h4 class="font-semibold text-secondary">
                  {{ umkm.name }}
                </h4>

                <p class="text-gray-600 text-sm">Pemilik : {{ umkm.owner }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8 flex gap-4">
            <!-- <a
              href="https://wa.me/6281234567890"
              target="_blank"
              class="bg-green-700 text-white px-8 py-3 rounded-xl"
            >
              Pesan via WhatsApp
            </a> -->

            <RouterLink
              to="/product"
              class="border border-secondary text-secondary hover:bg-hover hover:text-white px-8 py-3 rounded-xl"
            >
              Kembali
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
