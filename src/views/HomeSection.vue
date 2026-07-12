<script setup>
import { products } from '../data/products'
import { Store, BadgeCheck, User, Users } from 'lucide-vue-next'
</script>

<template>
  <main>
    <!-- HERO -->
    <section class="relative overflow-hidden">
      <!-- Background Foto -->
      <img
        src="../assets/images/desa-srowo.jpg"
        class="absolute inset-0 w-full h-full object-cover opacity-16"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-background/"></div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-14 items-center">
          <!-- KIRI -->
          <div>
            <p class="text-secondary font-semibold mb-3">Selamat Datang di</p>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary">
              UMKM Unggulan
              <br />
              Desa Srowo
            </h1>

            <p class="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Menampilkan berbagai produk unggulan hasil karya masyarakat Desa Srowo, Kecamatan
              Sidayu, Kabupaten Gresik.
            </p>

            <RouterLink
              to="/product"
              class="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full bg-secondary text-white hover:bg-green-800 duration-300"
            >
              Lihat Produk →
            </RouterLink>
          </div>

          <!-- KANAN -->

          <div class="flex justify-center">
            <img
              src="../assets/images/desa-srowo.jpg"
              alt="Desa Srowo"
              class="w-full max-w-lg h-[280px] md:h-[380px] object-cover rounded-[32px] shadow-2xl"
            />
          </div>
        </div>
      </div>

      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,149.3C672,117,768,75,864,85.3C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> -->
    </section>

    <!-- KEUNGGULAN -->

    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
      <div class="bg-background rounded-3xl shadow-md p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl mb-3">⭐</div>

          <h3 class="font-bold text-secondary">Produk Berkualitas</h3>

          <p class="text-gray-500 text-sm mt-2">Diproduksi oleh masyarakat lokal.</p>
        </div>

        <div class="text-center">
          <div class="text-4xl mb-3">🏪</div>

          <h3 class="font-bold text-secondary">UMKM Lokal</h3>

          <p class="text-gray-500 text-sm mt-2">Mendukung ekonomi desa.</p>
        </div>

        <div class="text-center">
          <div class="text-4xl mb-3">💰</div>

          <h3 class="font-bold text-secondary">Harga Terjangkau</h3>

          <p class="text-gray-500 text-sm mt-2">Cocok untuk semua kalangan.</p>
        </div>

        <div class="text-center">
          <div class="text-4xl mb-3">🌿</div>

          <h3 class="font-bold text-secondary">Produk Unggulan</h3>

          <p class="text-gray-500 text-sm mt-2">Khas Desa Srowo.</p>
        </div>
      </div>
    </section>

    <!-- TENTANG DESA -->

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-5xl font-bold text-secondary">Tentang Desa Srowo</h2>

        <p class="mt-8 text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem ex reiciendis laboriosam voluptatum alias facere maxime aliquid pariatur, tenetur porro iure, voluptate, ipsa rem vero quae et. Modi possimus rem fuga voluptatem iusto quia deleniti reiciendis reprehenderit, ipsa voluptatibus perspiciatis commodi architecto sed ad ex ullam nesciunt quos. Magnam non obcaecati provident? Eius ipsa nihil repellendus optio blanditiis assumenda?
        </p>
      </div>
    </section>

    <!-- PRODUK -->

    <section class="bg-background py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-center text-3xl lg:text-5xl font-bold text-secondary mb-16">
          Produk Unggulan
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 duration-300"
          >
            <img :src="product.image" class="h-60 w-full object-cover" />

            <div class="p-6">
              <h3 class="text-xl font-bold text-secondary">
                {{ product.name }}
              </h3>

              <!-- <p class="mt-2 text-green-700 font-semibold">Rp {{ product.price }}</p> -->

              <p class="mt-3 text-gray-500">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATISTIK -->
    <section class="bg-white py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Item 1 -->
          <div class="flex items-center justify-center gap-4">
            <div class="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
              <Store class="w-7 h-7 text-secondary" />
            </div>

            <div>
              <h3 class="text-4xl font-bold text-secondary leading-none">50</h3>

              <p class="text-sm text-gray-600 mt-1">UMKM Aktif</p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="flex items-center justify-center gap-4">
            <div class="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
              <BadgeCheck class="w-7 h-7 text-secondary" />
            </div>

            <div>
              <h3 class="text-4xl font-bold text-secondary leading-none">10</h3>

              <p class="text-sm text-gray-600 mt-1">Produk</p>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="flex items-center justify-center gap-4">
            <div class="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
              <User class="w-7 h-7 text-secondary" />
            </div>

            <div>
              <h3 class="text-4xl font-bold text-secondary leading-none">200+</h3>

              <p class="text-sm text-gray-600 mt-1">Pelanggan</p>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="flex items-center justify-center gap-4">
            <div class="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
              <Users class="w-7 h-7 text-secondary" />
            </div>

            <div>
              <h3 class="text-4xl font-bold text-secondary leading-none">30+</h3>

              <p class="text-sm text-gray-600 mt-1">Tahun Berkembang</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->

    <!-- <section class="bg-green-700 text-white py-20">
      <div class="max-w-4xl mx-auto text-center px-6">
        <h2 class="text-3xl lg:text-5xl font-bold">Tertarik Dengan Produk Kami?</h2>

        <p class="mt-6 text-lg">Hubungi kami dan dapatkan informasi produk unggulan Desa Srowo.</p>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          class="inline-block mt-8 bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:scale-105 duration-300"
        >
          Hubungi WhatsApp
        </a>
      </div>
    </section> -->
  </main>
</template>
