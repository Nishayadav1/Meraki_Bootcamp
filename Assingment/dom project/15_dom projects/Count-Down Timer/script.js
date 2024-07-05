document.addEventListener('DOMContentLoaded',()=>{
    const monthInput = document.getElementById('month');
    const dateInput = document.getElementById('date');
    const yearInput = document.getElementById('year');
    const startButton = document.getElementById('start');

    const daysTimer = document.getElementById('days');
    const hoursTimer = document.getElementById('hours');
    const minutesTimer = document.getElementById('minutes');
    const secondsTimer = document.getElementById('seconds');

    let countDowm;
    function enterCountdown(){
        const month = monthInput.value;
        const date = dateInput.value;
        const year = yearInput.value;

        if (month === '' || date === '' || year === '') {
            return;
        }

        const countdownDate = new Date(year, month - 1, date).getTime(); 
        const now = Date.now(); 
        const distance = countdownDate - now;
        
        if (distance < 0) {
            daysTimer.textContent = '0';
            hoursTimer.textContent = '0';
            minutesTimer.textContent = '0';
            secondsTimer.textContent = '0';
            clearInterval(countdownInterval);
            return;
        }
        const s=1000
        const m=s*60
        const h=m*60
        const d=h*24
        const days    = Math.floor(distance / d);
        const hours   = Math.floor(distance %d  / h);
        const minutes = Math.floor(distance %h  / m);
        const seconds = Math.floor(distance %m  / s);

        
        daysTimer.textContent = days;
        hoursTimer.textContent = hours;
        minutesTimer.textContent =minutes;
        secondsTimer.textContent = seconds;
    }
    startButton.addEventListener('click', () => {
        enterCountdown();
        countDowm = setInterval(enterCountdown, 1000);
    });

})




// sec=1000
// min=sec*60
// hour=min*60
// day=hour*24