export function createDaySchedule(day) {
  const dayContainer = document.createElement("div");
  dayContainer.className = "container mx-auto my-4 flex flex-col";

  const dayTitle = document.createElement("h2");
  dayTitle.className =
    "text-xl font-bold mb-4 text-center bg-blue-700 text-white py-2 rounded";
  dayTitle.textContent = day.day;
  dayContainer.appendChild(dayTitle);

  const table = createScheduleTable(day.subjects);
  dayContainer.appendChild(table);

  return dayContainer;
}

function createScheduleTable(subjects) {
  const table = document.createElement("table");
  table.className = "w-full table-auto border-collapse mx-auto mb-4";

  const tableHeader = createTableHeader();
  table.appendChild(tableHeader);

  const tableBody = createTableBody(subjects);
  table.appendChild(tableBody);

  return table;
}

function createTableHeader() {
  const tableHeader = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.className = "bg-blue-500 text-white";

  const timeHeader = createTableHeaderCell("Waktu");
  headerRow.appendChild(timeHeader);

  const subjectHeader = createTableHeaderCell("Mata Kuliah");
  headerRow.appendChild(subjectHeader);

  const roomHeader = createTableHeaderCell("Ruangan");
  headerRow.appendChild(roomHeader);

  tableHeader.appendChild(headerRow);
  return tableHeader;
}

function createTableHeaderCell(text) {
  const cell = document.createElement("th");
  cell.className = "py-2 px-4 border";
  cell.textContent = text;
  return cell;
}

function createTableBody(subjects) {
  const tableBody = document.createElement("tbody");

  subjects.forEach((subject) => {
    const row = document.createElement("tr");

    const timeCell = createTableCell(subject.time);
    row.appendChild(timeCell);

    const subjectCell = createSubjectCell(subject);
    row.appendChild(subjectCell);

    const roomCell = createTableCell(subject.room);
    row.appendChild(roomCell);

    tableBody.appendChild(row);
  });

  return tableBody;
}

function createTableCell(content) {
  const cell = document.createElement("td");
  cell.className = "py-2 px-4 border";
  cell.textContent = content;
  return cell;
}

function createSubjectCell(subject) {
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
  return subjectCell;
}

export function showPopup(subject) {
  const popup = document.createElement("div");
  popup.className =
    "fixed inset-0 bg-blue-700 bg-opacity-50 flex justify-center items-center z-50";

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

  popupContent.style.position = "absolute";
  popupContent.style.top = "50%";
  popupContent.style.left = "50%";
  popupContent.style.transform = "translate(-50%, -50%)";

  document.getElementById("closePopup").addEventListener("click", () => {
    document.body.removeChild(popup);
  });
}
