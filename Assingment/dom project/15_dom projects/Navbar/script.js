document.getElementById('menubar').addEventListener('click', function() {
    const logonav = document.querySelector('.logonav');
    if (logonav.style.display === 'block') {
        logonav.style.display = 'none';
    } else {
        logonav.style.display = 'block';
    }
});
