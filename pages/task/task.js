import Navbar from "./../../components/navbar.js";
import TaskContent from "./../../components/taskcontent.js";
import Footer from "./../../components/footer.js";
import addEventListener from "./../../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const taskContent = TaskContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(taskContent);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
