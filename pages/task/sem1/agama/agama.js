import Navbar from "./../../../../components/navbar.js";
import TaskandprojectContent from "./../../../../components/taskContent1Agama.js";
import Footer from "./../../../../components/footer.js";
import addEventListener from "./../../../../components/addEventListenerNavbar.js";
import projectData from "./../../../../data/agama.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const taskContent = TaskandprojectContent(projectData);
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(taskContent);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
