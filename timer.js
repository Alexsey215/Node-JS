const EventEmitter = require('events');

const emitter = new EventEmitter();

const time = process.argv[2];
const userTime = time.split(/[- .]/g);

function countDownTimer() {

    const difference = +new Date(`${userTime[3]}-${userTime[2]}-${userTime[1]}T${userTime[0]}:00:00`) - +new Date();
    let remaining = "Time's up!";

    if (difference > 0) {
        const parts = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        remaining = Object.keys(parts).map(part => {
            return `${parts[part]} ${part}`;
        }).join(" ");
    }

    console.log(remaining)
}

emitter.on('start', () => {
    setInterval(countDownTimer, 1000 );
})
countDownTimer();
emitter.emit('start');
