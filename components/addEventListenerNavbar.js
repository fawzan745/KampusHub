export default function addEventListenerNavbar() {
  /**
   * Add listentner pada toggle dan harus di-eksekusi
   * pada akhir elemen DOM agar bisa mengambil id
   */
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const scheduleBtn = document.getElementById("schedule-btn");
  const dropdown = document.getElementById("schedule-dropdown");
  const taskBtn = document.getElementById("task-btn");
  const taskDropdown = document.getElementById("task-dropdown");

  taskBtn.addEventListener("click", () => {
    taskDropdown.classList.toggle("hidden");
  });

  // Tampilkan/Sembunyikan menu saat tombol hamburger diklik
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Tutup menu jika item diklik
  menu.querySelectorAll("a").forEach((item) => {
    console.log("item : ", item);
    item.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  // Tampilkan atau sembunyikan dropdown saat tombol diklik
  scheduleBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Hindari event bubbling
    dropdown.classList.toggle("hidden");
  });

  // Sembunyikan dropdown jika klik di luar elemen
  document.addEventListener("click", (event) => {
    if (
      !scheduleDropdown.contains(event.target) &&
      !scheduleBtn.contains(event.target)
    ) {
      scheduleDropdown.classList.add("hidden");
    }

    if (
      !taskDropdown.contains(event.target) &&
      !taskBtn.contains(event.target)
    ) {
      taskDropdown.classList.add("hidden");
    }
  });
}
