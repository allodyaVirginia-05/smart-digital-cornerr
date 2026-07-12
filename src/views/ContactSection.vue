<template>
  <main>
    <!-- HEADER -->
    <section class="bg-background py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-secondary">Hubungi Kami</h1>

        <p class="text-gray-600 mt-4">
          Silakan hubungi kami untuk informasi produk UMKM Desa Srowo
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="max-w-7xl mx-auto px-6 py-16 pb-20">
      <div class="grid lg:grid-cols-2 gap-10 items-start">

        <!-- KIRI : INFORMASI -->
        <div>
          <h2 class="text-3xl font-bold text-secondary mb-8">
            Informasi Kontak
          </h2>

          <div class="space-y-6">
            <div>
              <h3 class="font-semibold text-secondary">📍 Alamat</h3>
              <p class="text-gray-600 mt-2">
                Desa Srowo, Kecamatan Sidayu, Kabupaten Gresik, Jawa Timur
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-secondary">
                📞 Telepon / WhatsApp
              </h3>
              <p class="text-gray-600 mt-2">0812-3456-7890</p>
            </div>

            <div>
              <h3 class="font-semibold text-secondary">
                🕒 Jam Operasional
              </h3>
              <p class="text-gray-600 mt-2">
                Senin - Sabtu
                <br />
                08.00 - 16.00 WIB
              </p>
            </div>
          </div>
<!--
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            class="inline-block mt-8 bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 duration-300"
          >
            Chat WhatsApp
          </a> -->
        </div>

        <!-- KANAN : MAP -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Desa%20Srowo%20Gresik&t=&z=13&ie=UTF8&iwloc=&output=embed"
            class="w-full h-[450px]"
            style="border:0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  </main>
</template>
