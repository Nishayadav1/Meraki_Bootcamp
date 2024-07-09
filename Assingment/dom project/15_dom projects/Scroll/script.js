const toggleBar=document.querySelector('.fa-solid');
const logonav = document.querySelector('.logonav');

toggleBar.addEventListener('click',function (){
    if (logonav.style.display === 'flex') {
        logonav.style.display = 'none';
    } else {
        logonav.style.display = 'flex';
    }
})


