const dayEl = document.getElementById("days");
const houEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");

const gettime = () => {
    var bithday = new Date("31 jan 2021");
    var currentdate = new Date();
    var totalseconds = (bithday - currentdate) / 1000;
    var days = Math.floor(totalseconds / 3600 / 24);
    var hours = Math.floor((totalseconds / 3600) % 24);
    var minutes = Math.floor((totalseconds / 60 % 60));
    var seconds = Math.floor((totalseconds % 60));

    dayEl.innerHTML = formattime(days);
    houEl.innerHTML = formattime(hours);
    minEl.innerHTML = formattime(minutes);
    secEl.innerHTML = formattime(seconds);

    console.log(formattime(seconds));

}

const formattime = (val) => {
    return val < 10 ? (`0${val}`) : val;
}
gettime();
setInterval(gettime, 1000)

