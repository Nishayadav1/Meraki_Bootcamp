// ---------------------inline onclick---------------------------
// ///primary color
// function primaryColors(){
//     let colors=["red","yellow","blue","white"];
//     let rendomCcolor=colors[Math.floor(Math.random()*colors.length)];
//     return(rendomCcolor);
// };
// function primaryColor(){
//     let primary_color=primaryColors();
//     document.querySelector('.container').style.backgroundColor = primary_color;
//     document.querySelector('p').innerText=primary_color
// }

// // hexcolor
// function randomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function changeColor() {
//     const newColor=randomColor();
//     document.querySelector('.container').style.backgroundColor = newColor;
//     document.querySelector('p').textContent = newColor;
// }


// -----------------without inline----------------------
const primaryButton = document.getElementById('primary');
const hexaButton = document.getElementById('hex');

function primaryColors() {
    let colors = ["red", "yellow", "blue", "white"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

function primaryColor() {
    let primary_color = primaryColors();
    document.querySelector('.container').style.backgroundColor = primary_color;
    document.querySelector('p').innerText = primary_color;
}
primaryButton.addEventListener('click', primaryColor);



function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const newColor = randomColor();
    document.querySelector('.container').style.backgroundColor = newColor;
    document.querySelector('p').textContent = newColor;
}
hexaButton.addEventListener('click', changeColor);


