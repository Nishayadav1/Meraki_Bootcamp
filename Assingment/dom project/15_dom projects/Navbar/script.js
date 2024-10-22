const menuButton = document.querySelector('.btn');
const listBtn = document.querySelector('.list');

menuButton.addEventListener('click', () => {
    if (listBtn.style.display === 'flex') {
        listBtn.style.display = 'none';
    } else {
        listBtn.style.display = 'flex';
        listBtn.style.flexDirection = 'column';
        listBtn.style.position = 'absolute';
        listBtn.style.top = '60px';
        listBtn.style.right = '20px';
        listBtn.style.backgroundColor = 'white';
        listBtn.style.width = '12rem'
    }
});

