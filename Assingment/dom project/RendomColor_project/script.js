const getColor=()=>{
    const hash="#"
    const randomNUmber=hash+(Math.floor(Math.random()*1677215).toString(16));
    // console.log(randomNUmber)
    // const randomCode="#" +(randomNUmber.toString(16))
    // console.log(randomCode)
    console.log(randomNUmber)
    document.getElementById("box1").style.background=randomNUmber
    document.getElementById("box1").innerText=randomNUmber
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)