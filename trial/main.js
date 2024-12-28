import Navbar from "./../components/navbar.js";
import domContent from "./dom.js";
import Footer from "./../components/footer.js";
import addEventListener from "./../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const domcontent = domContent();
  const footer = Footer();

  app.appendChild(navbar);
  // app.appendChild(domcontent);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
