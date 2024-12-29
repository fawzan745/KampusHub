import GLOBAL_ENV from "./../config.dev.js";

export default function Navbar() {
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
            <a href="${HOME}pages/about" class="hover:text-green-600">About</a>
          </li>
          <li class="relative">
            <button
              id="schedule-btn"
              class="hover:text-green-600 focus:outline-none"
            >
              Schedule
            </button>
            <!-- Dropdown -->
            <ul
              id="schedule-dropdown"
              class="hidden absolute bg-white text-blue-700 shadow-lg rounded-md mt-2 w-48 p-2 space-y-2"
            >
              <li>
                <button
                  onclick="window.location.href='${HOME}pages/schedule/semester1/index.html'"
                  class="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Semester 1
                </button>
              </li>
              <li>
                <button
                  onclick="window.location.href='${HOME}pages/schedule/semester2/index.html'"
                  class="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Semester 2
                </button>
              </li>
              <li>
                <button
                  onclick="window.location.href='${HOME}pages/schedule/semester3/index.html'"
                  class="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Semester 3
                </button>
              </li>
            </ul>
          </li>
          <li class="relative">
            <button
              id="task-btn"
              class="hover:text-green-600 focus:outline-none"
            >
              Task and Project
            </button>
            <!-- Dropdown -->
            <ul
              id="task-dropdown"
              class="hidden absolute bg-white text-blue-700 shadow-lg rounded-md mt-2 w-48 p-2 space-y-2"
            >
              <li>
                <button
                  onclick="window.location.href='${HOME}pages/task/index.html'"
                  class="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Semester 1
                </button>
              </li>
              <li>
                <button
                  onclick="window.location.href='${HOME}pages/task/index.html'"
                  class="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Semester 2
                </button>
              </li>
              <li>
                <button
                  onclick="window.location.href='${HOME}pages/task/index.html'"
                  class="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Semester 3
                </button>
              </li>
            </ul>
          </li>
          <li>
            <a href="${HOME}pages/profile" class="hover:text-green-600">Profile</a>
          </li>
        </ul>
  `;
  return navbar;
}
