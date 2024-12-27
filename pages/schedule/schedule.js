import Navbar from "./../../components/navbar.js";
import ScheduleContent from "./../../components/schedulecontent.js";
import Footer from "./../../components/footer.js";
import addEventListener from "./../../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const scheduleContent = ScheduleContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(scheduleContent);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
