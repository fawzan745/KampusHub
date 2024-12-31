export function fetchScheduleData() {
  return fetch("./matkul2.json")
    .then((response) => response.json())
    .catch((err) => console.error("Failed to load schedule data:", err));
}
