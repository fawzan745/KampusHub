import Navbar from "./../../../components/navbar.js";
import TaskContent1 from "./../../../components/taskcontent1.js";
import Footer from "./../../../components/footer.js";
import addEventListener from "./../../../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const taskContent1 = TaskContent1();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(taskContent1);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
