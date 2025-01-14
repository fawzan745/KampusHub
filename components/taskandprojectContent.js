import GLOBAL_ENV from "./../config.dev.js";
export default function TaskandprojectContent(content) {
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement("main");
  main.className = "container flex-1 bg-white shadow-lg rounded-lg mt-10 p-6";

  main.innerHTML = `
    <div class="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-xl p-6">
        <div class="text-2xl font-extrabold text-black mt-6 mb-5 text-center bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-2 shadow-lg">
            <h1>${content.projectName}</h1>
        </div>
        <div class="text-black text-justify">
            <div class="grid grid-cols-[auto,1fr] gap-2 mb-2">
                <span class="font-semibold text-lg">Tipe Project :</span>
                <span class="text-lg">${content.type}</span>
            </div>
            <div class="grid grid-cols-[auto,1fr] gap-2 mb-2">
                <span class="font-semibold text-lg">Instruksi :</span>
                <span class="text-lg">${content.instructions}</span>
            </div>
            <div class="grid grid-cols-[auto,1fr] gap-2 mb-2">
                <span class="font-semibold text-lg">Summary :</span>
                <span class="text-lg">${content.summary}</span>
            </div>
        </div>
    </div>
  `;

  return main;
}
