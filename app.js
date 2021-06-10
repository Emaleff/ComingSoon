let endDate = new Date("sep 1, 2021 12:00:00").getTime();

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let timer = setInterval(function () {
    let currentDate = new Date().getTime();
    let timer = endDate - currentDate;

    if (timer >= 0) {
        days.innerText = Math.floor(timer / (1000 * 60 * 60 * 24));
        // console.log(days.innerHTML);
        if (days.innerHTML === '0' || !days) {
            days.parentNode.parentNode.removeChild(days.parentNode);
        }

        if (days.innerHTML >= 100){
            document.getElementById('dayBlock').style.boxSizing = 'content-box'
        }
        hours.innerText = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours.innerHTML === '0') {
            hours.innerText = "00";
        }
        minutes.innerText = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes.innerHTML === '0') {
            minutes.innerText= '00';
        }
        seconds.innerText = Math.floor((timer % (1000 * 60)) / 1000);

    } else {
        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        seconds .innerText = "00";
    }

}, 1000);