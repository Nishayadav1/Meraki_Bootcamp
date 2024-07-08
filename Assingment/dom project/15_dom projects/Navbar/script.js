// const menyBar=document.getElementById('menubar');
// function visible(){
//     document.getElementsByClassName('container1').style.visibility="hidden"
//     document.getElementsByClassName('container').style.visibility="visible"
// }
// menyBar.addEventListener("click",visible)






const menuBar = document.getElementById('menubar');
const menuBar2 = document.getElementById('menubar2');

function sideBar() {
    document.querySelector('.container1').style.visibility = "hidden";
    document.querySelector('.container').style.visibility = "visible";
}

menuBar.addEventListener("click", sideBar);

function navBar() {
    document.querySelector('.container1').style.visibility = "visible";
    document.querySelector('.container').style.visibility = "hidden";
}

menuBar2.addEventListener("click", navBar);
