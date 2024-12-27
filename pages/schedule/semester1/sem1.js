import Navbar from "./../../../components/navbar.js";
import ScheduleContent1 from "./../../../components/schedulecontent1.js";
import Footer from "./../../../components/footer.js";
import addEventListener from "./../../../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const scheduleContent1 = ScheduleContent1();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(scheduleContent1);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
