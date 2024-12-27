import GLOBAL_ENV from "./../config.dev.js";
export default function Navbar() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const navbar = document.createElement("nav");
  navbar.className =
    "container px-3 mx-auto flex justify-between items-center bg-blue-700 text-white shadow-md fixed top-0 left-0 min-w-full";

  navbar.innerHTML = `
        <!-- Logo -->
        <a href="${HOME}" class="flex flex-row">
          <img
            src="${HOME}public/images/logo.png"
            alt="KampusHub"
            class="rounded-full h-14 top-10"
          />
          <p class="sm:hidden px-2 pt-5 text-xl font-bold text-center">KampusHub</p>
        </a>

        <!-- Hamburger Button -->
        <button
          id="menu-toggle"
          class="text-white-800 sm:hidden focus:outline-none"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Menu -->
        <ul
          id="menu"
          class="hidden mr-2 px-3 py-3 flex-col text-white bg-blue-500 absolute top-16 right-0 sm:bg-blue-700 sm:text-white rounded-md sm:static sm:flex sm:flex-row sm:space-y-0 sm:space-x-8 sm:min-w-fit sm:mr-6 min-w-max"
        >
          <li>
            <a href="${HOME}pages/about" class="hover:text-green-600"
              >About</a
            >
          </li>
          <li>
            <a href="${HOME}pages/schedule" class="hover:text-green-600"
              >Schedule</a
            >
          </li>
          <li>
            <a href="${HOME}pages/task" class="hover:text-green-600">Task and Project</a>
          </li>
          <li>
            <a href="${HOME}pages/profile" class="hover:text-green-600"
              >Profile</a
            >
          </li>
        </ul>
      </div>
    </div>
  `;
  return navbar;
}
