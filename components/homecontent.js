export default function HomeContent() {
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  main.innerHTML = `
      <h2 class="text-xl font-bold mb-4">Welcome To KampusHub!</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Card 1 -->
        <div class="bg-green-400 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 class="font-bold text-lg">Jadwal Kuliah Hari Ini</h3>
          <p class="text-sm mt-2">Tidak ada kelas hari ini! 🎉</p>
        </div>
        <!-- Card 2 -->
        <div class="bg-red-400 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 class="font-bold text-lg">Proyek Terkini</h3>
          <p class="text-sm mt-2">Analisis Statistik Pendidikan (Deadline: Jumat).</p>
        </div>
        <!-- Card 3 -->
        <div class="bg-blue-400 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 class="font-bold text-lg">Pengumuman</h3>
          <p class="text-sm mt-2">Jangan lupa mengisi KRS semester depan!</p>
        </div>
      </div>
    `;
  return main;
}
