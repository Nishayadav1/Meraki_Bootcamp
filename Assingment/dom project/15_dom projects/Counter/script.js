const counter= document.querySelector("#counter")
const btns=document.querySelector('.btnchild1')
const decreaseBtn=document.querySelector('#btn3')
const increaseBtn=document.querySelector('#btn1')
const resetBtn=document.querySelector('#btn2')

let count=0

increaseBtn.onclick=function(){
    count++;
    counter.textContent=count;
    updateCounterColor();

}
decreaseBtn.onclick=function(){
    count--;
    counter.textContent=count;
    updateCounterColor();

}
resetBtn.onclick=function(){
    count=0;
    counter.textContent=count;
    updateCounterColor();
}

function updateCounterColor(){
    if (count > 0){
        counter.style.color = "green";
    } else if (count === 0){
        counter.style.color = "black";
    } else {
        counter.style.color = "red";
    }
}
