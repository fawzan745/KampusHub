import Navbar from "./../../components/navbar.js";
import ProfileContent from "./../../components/profilecontent.js";
import Footer from "./../../components/footer.js";
import addEventListener from "./../../components/addEventListenerNavbar.js";

function App() {
  const app = document.getElementById("app");

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const profileContent = ProfileContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(profileContent);
  app.appendChild(footer);
  addEventListener();
}

document.addEventListener("DOMContentLoaded", App);
