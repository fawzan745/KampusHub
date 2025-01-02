import Navbar from "./navbar.js";
import schedule from "./schedule.js";
import Footer from "./../components/footer.js";
import addEventListener from "./../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const scheduleContent = schedule();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(scheduleContent);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
