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
            <h2 class="text-3xl font-bold text-blue-800 mb-4 text-center">Lecture Schedule</h2>
          </section>
            <h1 class="text-2xl font-bold mb-4 mt-10">Pilih Semester</h1>
            <div class="flex flex-col space-y-4 items-center">
              <a href="${HOME}pages/schedule/semester1/index.html" class="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600">
                Jadwal Semester 1
              </a>
              <a href="${HOME}pages/schedule/semester2/index.html" class="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600">
                Jadwal Semester 2
              </a>
              <a href="${HOME}pages/schedule/semester3/index.html" class="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600">
                Jadwal Semester 3
              </a>
            </div>
          </div>
        `;

  return main;
}
