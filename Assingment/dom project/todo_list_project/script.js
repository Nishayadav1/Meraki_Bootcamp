function show() {
    const username = document.querySelector("#name").value;
    const password = document.querySelector("#pass").value;
    const area = document.querySelector(".show_area");
    let result = "Username: " + username + "<br>" + "Password: " + password;
    area.innerHTML = result;
}
 
const button = document.querySelector("#show");
button.addEventListener("click", show);

function clearInputs() {
    document.querySelector("#name").value = ''; 
    document.querySelector("#pass").value = ''; 
    document.querySelector(".show_area").innerHTML = ''; 
}
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearInputs);

