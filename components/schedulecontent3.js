export default function HomeContent() {
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  main.innerHTML = `
      <div class="container mx-auto">
        <h1 class="text-2xl text-center font-bold mb-4">Jadwal Kuliah Semester 3</h1>
        
        <!-- Tabel untuk Senin -->
        <h2 class="text-xl font-semibold text-white mt-4 bg-blue-700 text-center">Senin</h2>
        <table class="min-w-full bg-blue-300 border border-gray-300 rounded-lg shadow-md mb-6">
          <thead>
            <tr class="bg-blue-500 text-gray-700">
              <th class="py-3 px-4 border-b">Mata Kuliah</th>
              <th class="py-3 px-4 border-b">Waktu</th>
              <th class="py-3 px-4 border-b">Ruangan</th>
              <th class="py-3 px-4 border-b">Dosen</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Analisa Statistika Terapan</td>
              <td class="py-3 px-4 border-b">08.00 - 09.40</td>
              <td class="py-3 px-4 border-b">PS-04.11</td>
              <td class="py-3 px-4 border-b">Ronny Susetyoko</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Eksplorasi dan Visualisasi Data</td>
              <td class="py-3 px-4 border-b">09.40 - 11.20</td>
              <td class="py-3 px-4 border-b">SAW-03.06</td>
              <td class="py-3 px-4 border-b">Edi Satriyanto</td>
            </tr>
          </tbody>
        </table>
  
        <!-- Tabel untuk Selasa -->
        <h2 class="text-xl font-semibold text-white mt-4 bg-blue-700 text-center">Selasa</h2>
        <table class="min-w-full bg-blue-300 border border-gray-300 rounded-lg shadow-md mb-6">
          <thead>
            <tr class="bg-blue-500 text-gray-700">
              <th class="py-3 px-4 border-b">Mata Kuliah</th>
              <th class="py-3 px-4 border-b">Waktu</th>
              <th class="py-3 px-4 border-b">Ruangan</th>
              <th class="py-3 px-4 border-b">Dosen</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Praktikum Mesin Pembelajaran</td>
              <td class="py-3 px-4 border-b">08.00 - 09.40</td>
              <td class="py-3 px-4 border-b">SAW-07.06</td>
              <td class="py-3 px-4 border-b">Nur Rosyid Mubtadai</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Mesin Pembelajaran</td>
              <td class="py-3 px-4 border-b">09.40 - 11.20</td>
              <td class="py-3 px-4 border-b">SAW-01.05</td>
              <td class="py-3 px-4 border-b">Nur Rosyid Mubtadai</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Text Mining</td>
              <td class="py-3 px-4 border-b">14.40 - 16.20</td>
              <td class="py-3 px-4 border-b">B 202</td>
              <td class="py-3 px-4 border-b">Tita Karlita</td>
            </tr>
          </tbody>
        </table>
  
        <!-- Tabel untuk Rabu -->
        <h2 class="text-xl font-semibold text-white mt-4 bg-blue-700 text-center">Rabu</h2>
        <table class="min-w-full bg-blue-300 border border-gray-300 rounded-lg shadow-md mb-6">
          <thead>
            <tr class="bg-blue-500 text-gray-700">
              <th class="py-3 px-4 border-b">Mata Kuliah</th>
              <th class="py-3 px-4 border-b">Waktu</th>
              <th class="py-3 px-4 border-b">Ruangan</th>
              <th class="py-3 px-4 border-b">Dosen</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Pancasila</td>
              <td class="py-3 px-4 border-b">08.50 - 10.30</td>
              <td class="py-3 px-4 border-b">SAW-01.05</td>
              <td class="py-3 px-4 border-b">Prima Dewi Permatasari</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Praktikum Eksplorasi dan Visualisasi Data</td>
              <td class="py-3 px-4 border-b">10.30 - 12.10</td>
              <td class="py-3 px-4 border-b">SAW-07.06</td>
              <td class="py-3 px-4 border-b">Edi Satriyanto</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Praktikum Analisa Statistika Terapan</td>
              <td class="py-3 px-4 border-b">13.50 - 15.30</td>
              <td class="py-3 px-4 border-b">SAW-07.06</td>
              <td class="py-3 px-4 border-b">Ronny SUsetyoko</td>
            </tr>
          </tbody>
        </table>
  
        <!-- Tabel untuk Kamis -->
        <h2 class="text-xl font-semibold text-white mt-4 bg-blue-700 text-center">Kamis</h2>
        <table class="min-w-full bg-blue-300 border border-gray-300 rounded-lg shadow-md mb-6">
          <thead>
            <tr class="bg-blue-500 text-gray-700">
              <th class="py-3 px-4 border-b">Mata Kuliah</th>
              <th class="py-3 px-4 border-b">Waktu</th>
              <th class="py-3 px-4 border-b">Ruangan</th>
              <th class="py-3 px-4 border-b">Dosen</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Praktikum Pemrograman 3</td>
              <td class="py-3 px-4 border-b">08.00 - 09.40</td>
              <td class="py-3 px-4 border-b">SAW-07.07</td>
              <td class="py-3 px-4 border-b">Grezio Arifiyan Primajaya</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Pemrograman 3</td>
              <td class="py-3 px-4 border-b">09.40 - 12.10</td>
              <td class="py-3 px-4 border-b">PS-04.08</td>
              <td class="py-3 px-4 border-b">Grezio Arifiyan Primajaya</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Praktikum Text Mining</td>
              <td class="py-3 px-4 border-b">13.00 - 14.40</td>
              <td class="py-3 px-4 border-b">SAW-07.06</td>
              <td class="py-3 px-4 border-b">Tita Karlita</td>
            </tr>
          </tbody>
        </table>
  
        <!-- Tabel untuk Jumat -->
        <h2 class="text-xl font-semibold text-white mt-4 bg-blue-700 text-center">Jumat</h2>
        <table class="min-w-full bg-blue-300 border border-gray-300 rounded-lg shadow-md mb-6">
          <thead>
            <tr class="bg-blue-500 text-gray-700">
              <th class="py-3 px-4 border-b">Mata Kuliah</th>
              <th class="py-3 px-4 border-b">Waktu</th>
              <th class="py-3 px-4 border-b">Ruangan</th>
              <th class="py-3 px-4 border-b">Dosen</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Matematika 3</td>
              <td class="py-3 px-4 border-b">08.00 - 09.40</td>
              <td class="py-3 px-4 border-b">B 303</td>
              <td class="py-3 px-4 border-b">Alfi Fadliana</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

  return main;
}
