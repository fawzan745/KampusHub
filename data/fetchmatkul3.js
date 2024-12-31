export function fetchScheduleData() {
  return fetch("./matkul3.json")
    .then((response) => response.json())
    .catch((err) => console.error("Failed to load schedule data:", err));
}
