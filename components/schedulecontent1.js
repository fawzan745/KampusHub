export default function HomeContent() {
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  main.innerHTML = `
      <div class="container mx-auto">
        <h1 class="text-2xl text-center font-bold mb-4">Jadwal Kuliah Semester 1</h1>
        
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
              <td class="py-3 px-4 border-b">Praktikum Statistika Dasar</td>
              <td class="py-3 px-4 border-b">08.00 - 09.40</td>
              <td class="py-3 px-4 border-b">C 105</td>
              <td class="py-3 px-4 border-b">Ronny Susetyoko</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Praktikum Pemrograman 1</td>
              <td class="py-3 px-4 border-b">10.30 - 12.10</td>
              <td class="py-3 px-4 border-b">C 303</td>
              <td class="py-3 px-4 border-b">Tri Hadiah Muliawati</td>
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
              <td class="py-3 px-4 border-b">Matematika 1</td>
              <td class="py-3 px-4 border-b">08.00 - 09.40</td>
              <td class="py-3 px-4 border-b">B 304</td>
              <td class="py-3 px-4 border-b">Ira Prasetyaningrum</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Basis Data</td>
              <td class="py-3 px-4 border-b">13.00 - 14.40</td>
              <td class="py-3 px-4 border-b">PS-03.11</td>
              <td class="py-3 px-4 border-b">Isbat Uzzin Nadhori</td>
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
              <td class="py-3 px-4 border-b">Praktikum Pemrograman 1</td>
              <td class="py-3 px-4 border-b">08.00 - 09.40</td>
              <td class="py-3 px-4 border-b">C 203</td>
              <td class="py-3 px-4 border-b">Tri Hadiah Muliawati</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Pemrograman 1</td>
              <td class="py-3 px-4 border-b">11.20 - 13.30</td>
              <td class="py-3 px-4 border-b">B 305</td>
              <td class="py-3 px-4 border-b">Tri Hadiah Muliawati</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Praktikum Basis Data</td>
              <td class="py-3 px-4 border-b">13.50 - 15.30</td>
              <td class="py-3 px-4 border-b">C 105</td>
              <td class="py-3 px-4 border-b">Isbat Uzzin Nadhori</td>
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
              <td class="py-3 px-4 border-b">Agama</td>
              <td class="py-3 px-4 border-b">09.40 - 11.20</td>
              <td class="py-3 px-4 border-b">HH-101</td>
              <td class="py-3 px-4 border-b">Choliliyah Toha</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="py-3 px-4 border-b">Aljabar Linier</td>
              <td class="py-3 px-4 border-b">11.20 - 13.30</td>
              <td class="py-3 px-4 border-b">B 301</td>
              <td class="py-3 px-4 border-b">Fitrah Maharani Humaira</td>
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
              <td class="py-3 px-4 border-b">Logika dan Algoritma</td>
              <td class="py-3 px-4 border-b">08.00 - 09.40</td>
              <td class="py-3 px-4 border-b">PS-07.03</td>
              <td class="py-3 px-4 border-b">Tri Hadiah Muliawati</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

  return main;
}
