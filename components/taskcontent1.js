export default function HomeContent() {
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  main.innerHTML = `
      <div class="container mx-auto text-center">
      <!-- About Section -->
        <section id="about" class="bg-blue-200 rounded-lg shadow-md p-6">
          <!-- About Header -->
          <h2 class="text-3xl font-bold text-blue-800 mb-4 text-center">Campus Assignements and Projects Semester 1</h2>
        </section>
        <h1 class="text-2xl font-bold mb-4 mt-10">Pilih Mata Kuliah</h1>
        <div class="flex flex-col space-y-4">
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Agama
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Aljabar Linier
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Basis data
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Logika Algoritma
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Matematika 1
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Pemrograman 1
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Praktikum Basis Data
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Praktikum Pemrograman 1
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Praktikum Statistika Dasar
          </a>
          <a href="" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Statistika Dasar
          </a>
        </div>
      </div>
    `;

  return main;
}
