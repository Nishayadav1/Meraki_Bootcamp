let menuBar = document.querySelector("#menubar");
let sideBar = document.querySelector(".sidebar");

function toggleMenu() {
    if (sideBar.classList.contains("hidden")) {
        sideBar.classList.remove("hidden");
    } else {
        sideBar.classList.add("hidden");
    }
}

menuBar.addEventListener("click", toggleMenu);
