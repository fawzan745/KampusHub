export default function ScheduleContent1() {
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  const placeholder = document.createElement("div");
  placeholder.textContent = "Loading schedule...";
  placeholder.className = "text-center text-gray-500";
  main.appendChild(placeholder);

  // Panggil data JSON
  fetch("data/matkul1.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Hapus placeholder
      main.removeChild(placeholder);

      // Buat elemen berdasarkan data
      data.forEach((day) => {
        const dayContainer = document.createElement("div");
        dayContainer.className = "container mx-auto my-4 flex flex-col";

        const dayTitle = document.createElement("h2");
        dayTitle.className =
          "text-xl font-bold mb-4 text-center bg-blue-700 text-white py-2 rounded";
        dayTitle.textContent = day.day;
        dayContainer.appendChild(dayTitle);

        const table = document.createElement("table");
        table.className = "w-full table-auto border-collapse mx-auto mb-4";

        const tableHeader = document.createElement("thead");
        const headerRow = document.createElement("tr");
        headerRow.className = "bg-blue-500 text-white";

        const timeHeader = document.createElement("th");
        timeHeader.className = "py-2 px-4 border";
        timeHeader.textContent = "Waktu";
        headerRow.appendChild(timeHeader);

        const subjectHeader = document.createElement("th");
        subjectHeader.className = "py-2 px-4 border";
        subjectHeader.textContent = "Mata Kuliah";
        headerRow.appendChild(subjectHeader);

        const roomHeader = document.createElement("th");
        roomHeader.className = "py-2 px-4 border";
        roomHeader.textContent = "Ruangan";
        headerRow.appendChild(roomHeader);

        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);

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
            showPopup(subject); // Tampilkan popup saat tombol diklik
          });

          subjectCell.appendChild(subjectButton);
          row.appendChild(subjectCell);

          // Ruangan
          const roomCell = document.createElement("td");
          roomCell.className = "py-2 px-4 border";
          roomCell.textContent = subject.room;
          row.appendChild(roomCell);

          tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        dayContainer.appendChild(table);

        main.appendChild(dayContainer);
      });
    })
    .catch((error) => {
      placeholder.textContent = "Failed to load schedule.";
      console.error("Error loading schedule data:", error);
    });

  return main;
}

function showPopup(subject) {
  // Membuat elemen untuk popup
  const popup = document.createElement("div");
  popup.className =
    "fixed inset-0 bg-blue-700 bg-opacity-50 flex justify-center items-center z-50";

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

  popup.appendChild(popupContent);
  document.body.appendChild(popup);

  document.getElementById("closePopup").addEventListener("click", () => {
    document.body.removeChild(popup);
  });
}
