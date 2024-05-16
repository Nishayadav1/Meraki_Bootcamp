const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const captcha= document.querySelector(".captcha")
const refresh= document.querySelector("#refresh")


refresh.addEventListener("click",()=>{
   captcha.textContent= generatorCaptcha();
})
function generatorCaptcha(){
    let captcha_gen="";
    for (let i=0;i<3;i++){
        let a=Math.floor(Math.random()*10)
        let b=chars[Math.floor(Math.random()*chars.length)]
        let sum=a+b
        captcha_gen+= sum
    }
    return captcha_gen
}
// console.log(generatorCaptcha())


