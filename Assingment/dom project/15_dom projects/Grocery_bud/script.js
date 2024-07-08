const deletButton=document.getElementById('delet');
const editButton=document.getElementById('edit');
const clearItmes=document.getElementById('clear');
const submitButton=document.getElementById('submit');

function clear(){

}

function delet(){
    document.getElementById('storeitem').style.display='none'
}

deletButton.addEventListener('click',delet())