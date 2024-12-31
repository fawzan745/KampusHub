import GLOBAL_ENV from "./../config.dev.js";

export default function ScheduleContent1() {
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6";

  const placeholder = document.createElement("div");
  placeholder.textContent = "Loading schedule...";
  placeholder.className = "text-center text-gray-500";
  main.appendChild(placeholder);

  fetch(`${HOME}data/matkul1.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Hapus placeholder
      main.removeChild(placeholder);

      // Iterasi melalui data JSON
      Object.entries(data).forEach(([day, subjects]) => {
        const dayContainer = document.createElement("div");
        dayContainer.className = "container mx-auto my-4 flex flex-col";

        const dayTitle = document.createElement("h2");
        dayTitle.className =
          "text-xl font-bold mb-4 text-center bg-blue-700 text-white py-2 rounded";
        dayTitle.textContent = day.charAt(0).toUpperCase() + day.slice(1);
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

        const lecturerHeader = document.createElement("th");
        lecturerHeader.className = "py-2 px-4 border";
        lecturerHeader.textContent = "Dosen";
        headerRow.appendChild(lecturerHeader);

        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);

        const tableBody = document.createElement("tbody");
        subjects.forEach((subject) => {
          const row = document.createElement("tr");

          // Waktu
          const timeCell = document.createElement("td");
          timeCell.className = "py-2 px-4 border";
          timeCell.textContent = subject.waktu;
          row.appendChild(timeCell);

          // Nama Mata Kuliah sebagai tombol
          const subjectCell = document.createElement("td");
          subjectCell.className = "py-2 px-4 border";

          const subjectButton = document.createElement("button");
          subjectButton.className =
            "w-full text-left rounded shadow hover:bg-blue-400 transition p-2";
          subjectButton.textContent = subject.mata_kuliah;

          subjectButton.addEventListener("click", () => {
            showPopup(subject); // Tampilkan popup saat tombol diklik
          });

          subjectCell.appendChild(subjectButton);
          row.appendChild(subjectCell);

          // Ruangan
          const roomCell = document.createElement("td");
          roomCell.className = "py-2 px-4 border";
          roomCell.textContent = subject.ruangan;
          row.appendChild(roomCell);

          // Dosen
          const lecturerCell = document.createElement("td");
          lecturerCell.className = "py-2 px-4 border";
          lecturerCell.textContent = subject.dosen;
          row.appendChild(lecturerCell);

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
}
