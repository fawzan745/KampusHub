export function loadSchedule() {
  fetch("./matkul.json")
    .then((response) => response.json())
    .then((data) => {
      const app = document.getElementById("app");

      data.forEach((day) => {
        const dayContainer = document.createElement("div");
        dayContainer.className = "container mx-auto my-4 flex flex-col"; // Gunakan flex-col untuk elemen vertikal

        const dayTitle = document.createElement("h2");
        dayTitle.className =
          "text-xl font-bold mb-4 text-center bg-blue-700 text-white py-2 rounded";
        dayTitle.textContent = day.day;
        dayContainer.appendChild(dayTitle);

        // Membuat tabel
        const table = document.createElement("table");
        table.className = "w-full table-auto border-collapse mx-auto mb-4"; // Menambahkan mx-auto untuk memusatkan tabel

        const tableHeader = document.createElement("thead");
        const headerRow = document.createElement("tr");
        headerRow.className = "bg-blue-500 text-white";

        // Menambahkan header tabel
        const timeHeader = document.createElement("th");
        timeHeader.className = "py-2 px-4 border";
        timeHeader.textContent = "Waktu";
        headerRow.appendChild(timeHeader);

        const subjectHeader = document.createElement("th");
        subjectHeader.className = "py-2 px-4 border";
        subjectHeader.textContent = "Mata Kuliah";
        headerRow.appendChild(subjectHeader);

        const roomHeader = document.createElement("th"); // Kolom baru untuk ruangan
        roomHeader.className = "py-2 px-4 border";
        roomHeader.textContent = "Ruangan"; // Teks untuk kolom ruangan
        headerRow.appendChild(roomHeader);

        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);

        // Menambahkan baris mata kuliah
        const tableBody = document.createElement("tbody");
        day.subjects.forEach((subject) => {
          const row = document.createElement("tr");

          // Waktu
          const timeCell = document.createElement("td");
          timeCell.className = "py-2 px-4 border";
          timeCell.textContent = subject.time;
          row.appendChild(timeCell);

          // Nama Mata Kuliah sebagai tombol
          const subjectCell = document.createElement("td");
          subjectCell.className = "py-2 px-4 border";

          const subjectButton = document.createElement("button");
          subjectButton.className =
            "w-full text-left rounded shadow hover:bg-blue-400 transition p-2";
          subjectButton.textContent = subject.name;

          subjectButton.addEventListener("click", () => {
            showPopup(subject);
          });

          subjectCell.appendChild(subjectButton);
          row.appendChild(subjectCell);

          // Ruangan
          const roomCell = document.createElement("td"); // Sel baru untuk ruangan
          roomCell.className = "py-2 px-4 border";
          roomCell.textContent = subject.room; // Menampilkan ruangan
          row.appendChild(roomCell);

          tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        dayContainer.appendChild(table);

        app.appendChild(dayContainer);
      });
    })
    .catch((err) => console.error("Failed to load schedule data:", err));
}

function showPopup(subject) {
  // Membuat elemen untuk popup
  const popup = document.createElement("div");
  popup.className =
    "fixed inset-0 bg-blue-700 bg-opacity-50 flex justify-center items-center z-50"; // Membuat latar belakang semi transparan dan memusatkan popup

  // Membuat konten popup
  const popupContent = document.createElement("div");
  popupContent.className = "bg-white rounded-lg shadow-lg w-1/2 p-6";
  popupContent.innerHTML = `
      <h2 class="text-xl font-bold mb-4">${subject.name}</h2>
      <p class="mb-2"><strong>Hari:</strong> ${subject.daytime}</p>
      <p class="mb-2"><strong>Waktu:</strong> ${subject.time}</p>
      <p class="mb-2"><strong>Ruangan:</strong> ${subject.room}</p>
      <p class="mb-2"><strong>Dosen:</strong> ${subject.lecturer}</p>
      <p class="mb-2"><strong>SKS:</strong> ${subject.sks}</p>
      <p class="mb-4"><strong>Deskripsi:</strong> ${subject.description}</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-full" id="closePopup">Close</button>
    `;

  // Memasukkan konten popup ke dalam elemen popup
  popup.appendChild(popupContent);
  document.body.appendChild(popup);

  // Untuk memposisikan popup di tengah layar
  const popupWidth = popupContent.offsetWidth;
  const popupHeight = popupContent.offsetHeight;

  // Posisi absolute dengan menggunakan transform untuk benar-benar memusatkan popup
  popupContent.style.position = "absolute";
  popupContent.style.top = "50%";
  popupContent.style.left = "50%";
  popupContent.style.transform = "translate(-50%, -50%)"; // Memastikan popup benar-benar di tengah layar

  // Menambahkan event listener untuk menutup popup
  document.getElementById("closePopup").addEventListener("click", () => {
    document.body.removeChild(popup);
  });
}
