import GLOBAL_ENV from "./../config.dev.js";
export default function HomeContent() {
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  main.innerHTML = `
        <main class="flex-grow container mx-auto p-4">
      <!-- About Section -->
      <section id="about" class="bg-blue-200 rounded-lg shadow-md p-6">
        <!-- About Header -->
        <h2 class="text-3xl font-bold text-blue-800 mb-4 text-center">About KampusHub</h2>
      </section>
      
      <section id="about" class="bg-blue-300 rounded-lg shadow-md p-6 mt-3">
        <!-- About Card -->
        <div class="flex items-center space-x-6">
          <!-- Logo -->
          <img
            src="${HOME}public/images/logo.png"
            alt="Logo KampusHub"
            class="h-40 w-40 rounded-full shadow-md"
          />
          <div class="text-justify">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Apa itu KampusHub?
            </h3>
            <p class="text-gray-600 mb-4">
              KampusHub adalah platform yang saya rancang untuk membantu saya
              sebagai mahasiswa PENS mengelola berbagai kegiatan kuliah saya.
              Dengan KampusHub, saya bisa dengan mudah mengakses jadwal kuliah,
              tugas, proyek, dan berbagai informasi penting lainnya dalam satu
              tempat yang terorganisir dan mudah diakses.
            </p>
            <p class="text-gray-600">
              Platform ini bertujuan untuk memberikan pengalaman yang lebih
              terstruktur dalam mengelola waktu kuliah saya, serta memastikan saya
              tidak melewatkan deadline tugas atau proyek.
            </p>
          </div>
        </div>
      </section>
    </main>
      `;
  return main;
}
