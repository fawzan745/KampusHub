import Navbar from "./components/navbar.js";
import HomeContent from "./components/homecontent.js";
import Footer from "./components/footer.js";
import addEventListener from "./components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const homeContent = HomeContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(homeContent);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
