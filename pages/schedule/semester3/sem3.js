import Navbar from "./../../../components/navbar.js";
import ScheduleContent3 from "./../../../components/schedulecontent3.js";
import Footer from "./../../../components/footer.js";
import addEventListener from "./../../../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const scheduleContent3 = ScheduleContent3();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(scheduleContent3);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
