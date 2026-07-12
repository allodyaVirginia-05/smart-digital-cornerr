<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
    <img :src="product.gambar" class="w-full h-52 object-cover" />

    <div class="p-5">
      <h3 class="text-lg font-semibold">
        {{ product.nama }}
      </h3>

      <p class="text-green-700 font-bold mt-2">
        {{ product.harga }}
      </p>

      <router-link
        :to="`/produk/${product.id}`"
        class="block mt-4 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        Detail Produk
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
})
</script>
