let sec = 0;
let min = 5;

const countdown = function () {
    const sec_count = document.getElementById('second');
    const min_count = document.getElementById('minute');

    if (sec < 10) {
        sec_count.innerText = `0${sec}`;
    }
    else {
        sec_count.innerText = sec;
    }
    if (min < 10) {
        min_count.innerText = `0${min}`;
    }
    else {
        min_count.innerText = min;
    }

    sec -= 1;
    if (sec < 0) {
        min -= 1;
        if (min < 0) {
            console.log('hii');
            clearInterval(interval_id);
            min = 0;
        }
        sec = 59;
    }

}

const interval_id = setInterval(countdown, 1000);
