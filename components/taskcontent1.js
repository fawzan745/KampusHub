import GLOBAL_ENV from "./../config.dev.js";

export default function HomeContent() {
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  main.innerHTML = `
      <div class="container mx-auto text-center">
        <!-- About Section -->
        <section id="about" class="bg-blue-200 rounded-lg shadow-md p-6">
          <!-- About Header -->
          <h2 class="text-3xl font-bold text-blue-800 mb-4 text-center">Campus Assignments and Projects Semester 1</h2>
        </section>
        <h1 class="text-2xl font-bold mb-4 mt-10">Pilih Mata Kuliah</h1>
        <div class="flex flex-wrap justify-center -mx-2">
          <div class="w-1/2 px-2 mb-4">
            <a href="${HOME}pages/task/sem1/agama/index.html" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Agama
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Aljabar Linier
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Basis Data
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Logika Algoritma
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Matematika 1
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Pemrograman 1
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Praktikum Basis Data
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Praktikum Pemrograman 1
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Praktikum Statistika Dasar
            </a>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block text-center">
              Statistika Dasar
            </a>
          </div>
        </div>
      </div>
    `;

  return main;
}
