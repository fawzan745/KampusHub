export default function HomeContent() {
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  main.innerHTML = `
      <div class="container mx-auto text-center">
      <!-- About Section -->
        <section id="about" class="bg-blue-200 rounded-lg shadow-md p-6">
          <!-- About Header -->
          <h2 class="text-3xl font-bold text-blue-800 mb-4 text-center">Campus Assignements and Projects</h2>
        </section>
        <h1 class="text-2xl font-bold mb-4 mt-10">Pilih Semester</h1>
        <div class="flex flex-col space-y-4 items-center">
          <a href="/pages/task/sem1/index.html" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Tugas dan Proyek Semester 1
          </a>
          <a href="/pages/task/sem2/index.html" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Tugas dan Proyek Semester 2
          </a>
          <a href="/pages/task/sem3/index.html" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Tugas dan Proyek Semester 3
          </a>
        </div>
      </div>
    `;

  return main;
}
