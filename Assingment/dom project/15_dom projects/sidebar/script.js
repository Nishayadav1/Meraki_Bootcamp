let menuBar = document.querySelector("#menubar");
let sideBar = document.querySelector(".sidebar");
// let iconClose = document.querySelector("#icon1");

function toggleMenu() {
    // console.log(sideBar.classList)
    if (sideBar.classList.contains("hidden")) {
        sideBar.classList.remove("hidden");
    } else {
        sideBar.classList.add("hidden");
    }
}

menuBar.addEventListener("click", toggleMenu);
// iconClose.addEventListener("click", toggleMenu);
