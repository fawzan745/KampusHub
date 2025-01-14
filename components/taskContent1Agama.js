import projectDataById from "./../data/agama.js";

export default function ScheduleContent1() {
  const main = document.createElement("main");
  main.className = "flex-1 bg-white shadow-md rounded-lg p-6 mt-6";

  // Placeholder saat data sedang dimuat
  const placeholder = document.createElement("div");
  placeholder.textContent = "Loading projects...";
  placeholder.className = "text-center text-gray-500";
  main.appendChild(placeholder);

  try {
    // Hapus placeholder hanya jika data tersedia
    if (main.contains(placeholder)) {
      main.removeChild(placeholder);
    }

    // Iterasi melalui data proyek berdasarkan ID
    Object.entries(projectDataById).forEach(([id, projects]) => {
      const idContainer = document.createElement("div");
      idContainer.className = "container mx-auto my-4 flex flex-col";

      const idTitle = document.createElement("h2");
      idTitle.className =
        "text-xl font-bold mb-4 text-center bg-blue-700 text-white py-2 rounded";
      idTitle.textContent = `Project ID: ${id}`;
      idContainer.appendChild(idTitle);

      const table = document.createElement("table");
      table.className = "w-full table-auto border-collapse mx-auto mb-4";

      const tableHeader = document.createElement("thead");
      const headerRow = document.createElement("tr");
      headerRow.className = "bg-blue-500 text-white";

      const nameHeader = document.createElement("th");
      nameHeader.className = "py-2 px-4 border";
      nameHeader.textContent = "Nama Proyek";
      headerRow.appendChild(nameHeader);

      const typeHeader = document.createElement("th");
      typeHeader.className = "py-2 px-4 border";
      typeHeader.textContent = "Tipe";
      headerRow.appendChild(typeHeader);

      const progressHeader = document.createElement("th");
      progressHeader.className = "py-2 px-4 border";
      progressHeader.textContent = "Progress";
      headerRow.appendChild(progressHeader);

      tableHeader.appendChild(headerRow);
      table.appendChild(tableHeader);

      const tableBody = document.createElement("tbody");
      projects.forEach((project) => {
        const row = document.createElement("tr");

        // Nama Proyek sebagai tombol
        const nameCell = document.createElement("td");
        nameCell.className = "py-2 px-4 border";

        const nameButton = document.createElement("button");
        nameButton.className =
          "w-full text-left rounded shadow hover:bg-blue-400 transition p-2";
        nameButton.textContent = project.projectName;

        nameButton.addEventListener("click", () => {
          showPopup(project);
        });

        nameCell.appendChild(nameButton);
        row.appendChild(nameCell);

        // Tipe
        const typeCell = document.createElement("td");
        typeCell.className = "py-2 px-4 border";
        typeCell.textContent = project.type;
        row.appendChild(typeCell);

        // Progress
        const progressCell = document.createElement("td");
        progressCell.className = "py-2 px-4 border";
        progressCell.textContent = `${project.progress.status} (${project.progress.percentage}%)`;
        row.appendChild(progressCell);

        tableBody.appendChild(row);
      });

      table.appendChild(tableBody);
      idContainer.appendChild(table);

      main.appendChild(idContainer);
    });
  } catch (error) {
    placeholder.textContent = "Failed to load projects.";
    console.error("Error loading project data:", error);
  }

  return main;
}

function showPopup(project) {
  // Membuat elemen untuk popup
  const popup = document.createElement("div");
  popup.className =
    "fixed inset-0 bg-blue-700 bg-opacity-50 flex justify-center items-center z-50";

  // Membuat konten popup
  const popupContent = document.createElement("div");
  popupContent.className = "bg-white rounded-lg shadow-lg w-1/2 p-6";
  popupContent.innerHTML = `
      <h2 class="text-xl font-bold mb-4">${project.projectName}</h2>
      <p class="mb-2"><strong>Tipe:</strong> ${project.type}</p>
      <p class="mb-2"><strong>Instruksi:</strong> ${project.instructions}</p>
      <p class="mb-2"><strong>Tujuan:</strong> ${project.details.objective}</p>
      <p class="mb-2"><strong>Alat:</strong> ${project.details.tools.join(
        ", "
      )}</p>
      <p class="mb-2"><strong>Dataset:</strong> ${project.details.datasets.join(
        ", "
      )}</p>
      <p class="mb-2"><strong>Metodologi:</strong> ${
        project.details.methodology
      }</p>
      <p class="mb-2"><strong>Progress:</strong> ${project.progress.status} (${
    project.progress.percentage
  }%)</p>
      <p class="mb-2"><strong>Created At:</strong> ${project.createdAt}</p>
      <p class="mb-2"><strong>Updated At:</strong> ${project.updatedAt}</p>
      <p class="mb-2"><strong>Link Laporan:</strong> <a href="${
        project.links.report
      }" target="_blank" class="text-blue-500 underline">Buka Laporan</a></p>
      <p class="mb-2"><strong>Link Video:</strong> ${
        project.links.video !== "none"
          ? `<a href="${project.links.video}" target="_blank" class="text-blue-500 underline">Buka Video</a>`
          : "Tidak Ada"
      }</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-full mt-4" id="closePopup">Close</button>
    `;

  popup.appendChild(popupContent);
  document.body.appendChild(popup);

  document.getElementById("closePopup").addEventListener("click", () => {
    document.body.removeChild(popup);
  });
}
