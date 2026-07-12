<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center gap-3"
      >
        <img
          src="../assets/images/logo-desa.png"
          alt="Logo UMKM"
          class="h-12"
        />

        <h1 class="text-xl lg:text-2xl font-bold text-secondary">
          UMKM Desa Srowo
        </h1>
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8">
        <RouterLink to="/" class="nav-link">Beranda</RouterLink>

        <RouterLink to="/product" class="nav-link">Produk</RouterLink>

        <RouterLink to="/gallery" class="nav-link">Galeri</RouterLink>

        <RouterLink to="/contact" class="nav-link">Kontak</RouterLink>
      </div>

      <!-- Mobile Button -->
      <button
        class="md:hidden"
        @click="isOpen = !isOpen"
      >
        <Menu
          v-if="!isOpen"
          class="w-7 h-7 text-secondary"
        />

        <X
          v-else
          class="w-7 h-7 text-secondary"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="md:hidden bg-white border-t shadow-lg"
      >
        <RouterLink
          to="/"
          @click="closeMenu"
          class="mobile-link"
        >
          Beranda
        </RouterLink>

        <RouterLink
          to="/product"
          @click="closeMenu"
          class="mobile-link"
        >
          Produk
        </RouterLink>

        <RouterLink
          to="/gallery"
          @click="closeMenu"
          class="mobile-link"
        >
          Galeri
        </RouterLink>

        <RouterLink
          to="/contact"
          @click="closeMenu"
          class="mobile-link"
        >
          Kontak
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  color: #374151;
  font-weight: 500;
  padding-bottom: 6px;
  transition: 0.3s;
}

.nav-link:hover {
  color: #112e81;
}

.router-link-exact-active {
  color: #112e81;
  font-weight: 600;
}

.router-link-exact-active::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -4px;
  width: 24px;
  height: 3px;
  background: #112e81;
  border-radius: 9999px;
}

/* Mobile */

.mobile-link {
  display: block;
  padding: 14px 24px;
  color: #374151;
  font-weight: 500;
  transition: .3s;
}

.mobile-link:hover {
  background: #f4f7f4;
  color: #112e81;
}

.mobile-link.router-link-exact-active {
  background: #eef8ef;
  color: #112e81;
}
</style>
