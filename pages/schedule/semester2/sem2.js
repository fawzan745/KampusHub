import Navbar from "./../../../components/navbar.js";
import ScheduleContent2 from "./../../../components/schedulecontent2.js";
import Footer from "./../../../components/footer.js";
import addEventListener from "./../../../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const scheduleContent2 = ScheduleContent2();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(scheduleContent2);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
