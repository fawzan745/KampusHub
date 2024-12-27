import Navbar from "./../../components/navbar.js";
import AboutContent from "./../../components/aboutcontent.js";
import Footer from "./../../components/footer.js";
import addEventListener from "./../../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const aboutContent = AboutContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(aboutContent);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
