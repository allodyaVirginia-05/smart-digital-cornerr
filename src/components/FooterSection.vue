<script setup>
import { Facebook, Instagram, MessageCircle, MapPin, Phone} from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-secondary text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- KOLOM 1 -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="../assets/images/logo-desa.png" alt="Logo" class="h-12" />

            <div>
              <h2 class="font-bold text-xl">UMKM</h2>

              <p class="text-sm">Desa Srowo</p>
            </div>
          </div>

          <p class="text-sm leading-relaxed text-green-50">
            Bersama UMKM, membangun ekonomi Desa Srowo yang mandiri, sejahtera, dan berdaya saing.
          </p>
        </div>

        <!-- KOLOM 2 -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Menu</h3>

          <ul class="space-y-3 text-sm">
            <li>
              <RouterLink to="/" class="hover:text-green-100"> Beranda </RouterLink>
            </li>

            <li>
              <RouterLink to="/product" class="hover:text-green-100"> Produk </RouterLink>
            </li>

            <li>
              <RouterLink to="/gallery" class="hover:text-green-100"> Galeri </RouterLink>
            </li>

            <li>
              <RouterLink to="/contact" class="hover:text-green-100"> Kontak </RouterLink>
            </li>
          </ul>
        </div>

        <!-- KOLOM 3 -->
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <MapPin class="w-5 h-5 text-white shrink-0 mt-1" />

            <p>Desa Srowo, Kecamatan Sidayu, Kabupaten Gresik</p>
          </div>

          <div class="flex items-center gap-3">
            <Phone class="w-5 h-5 text-white" />

            <p>0812-3456-7890</p>
          </div>
        </div>

        <!-- KOLOM 4 -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Ikuti Kami</h3>

          <div class="flex gap-4">
            <a href="#">
              <Facebook class="w-6 h-6" />
            </a>

            <a href="#">
              <Instagram class="w-6 h-6" />
            </a>

            <a href="#">
              <MessageCircle class="w-6 h-6" />
            </a>
          </div>
<!--
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            class="inline-block mt-6 bg-white text-green-700 px-5 py-2 rounded-full font-medium hover:bg-green-50"
          >
            Chat WhatsApp
          </a> -->
        </div>
      </div>

      <!-- COPYRIGHT -->

      <div class="mt-10 pt-6 text-center text-sm text-green-50">
        © 2026 UMKM Desa Srowo. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
