import { fetchScheduleData } from "./fetchmatkul.js";
import { createDaySchedule } from "./tableandpopup.js";

export default function loadSchedule() {
  fetchScheduleData().then((data) => {
    const app = document.getElementById("app");

    data.forEach((day) => {
      const daySchedule = createDaySchedule(day);
      app.appendChild(daySchedule);
    });
  });
}
