import { fetchScheduleData } from "./fetchmatkul1.js";
import { createDaySchedule } from "./tableandpopup.js";

export default async function loadSchedule() {
  try {
    const data = await fetchScheduleData();

    // Buat container utama untuk semua jadwal
    const scheduleContainer = document.createElement("div");

    data.forEach((day) => {
      const daySchedule = createDaySchedule(day);
      scheduleContainer.appendChild(daySchedule);
    });

    return scheduleContainer;
  } catch (error) {
    console.error("Failed to load schedule data:", error);
    throw error; // Propagasi error jika diperlukan
  }
}
