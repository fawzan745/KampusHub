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
          <h2 class="text-3xl font-bold text-blue-800 mb-4 text-center">Profile Creator KampusHub</h2>
        </section>
        
        <section id="about" class="bg-blue-300 rounded-lg shadow-md p-6 mt-3">
          <!-- About Card -->
          <div class="flex items-center space-x-6">
            <!-- Logo -->
            <img
              src="/public/images/pp.jpg"
              alt="Profiel Picture"
              class="h-40 w-40 rounded-full shadow-md"
            />
            <div class="text-justify font-medium">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Profile
              </h3>
              <p class="text-black mb-4">
                Nama      : Fawzan Insani
              </p>
              <p class="text-black mb-4">
              Ttl       : Gresik, 7 APril 2005
              </p>
              <p class="text-black mb-4">
              Kampus    : Politeknik Elektronika Negeri Surabaya
              </p>
              <p class="text-black mb-4">
              Prodi     : Sains Data Terapan
              </p>
              <p class="text-black mb-4">
              Instagram : @745.fawzann
              </p>
            </div>
          </div>
        </section>
      </main>
        `;
  return main;
}
