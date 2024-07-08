const nextButton = document.querySelector("#btn2");
const prevButton = document.querySelector("#btn1");
let imageElement = document.getElementById("imges");
let imgNo = document.querySelector('h1');

let images = [
    {src: "./img/img1.webp"},
    {src: "./img/img2.jpeg"},
    {src: "./img/img3.jpeg"},
    {src: "./img/img4.jpg"},
    {src: "./img/img5.jpg"}
];
let currentIndex = 0;

function changeImg() {
    imageElement.src = images[currentIndex].src;
    imgNo.textContent = currentIndex + 1; 
}

function prevImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImg();
}

function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImg();
}

nextButton.addEventListener("click", nextImg);
prevButton.addEventListener("click", prevImg);
changeImg();
