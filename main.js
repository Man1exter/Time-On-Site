const timer = () => {
    let time = 0;
    const dev = document.querySelector(".dev");
    dev.textContent =  0  + " is a time, spent on the site";
    dev.style.color = "yellow"
    dev.style.fontSize = 40 + "px"; 
    dev.style.textAlign = "center";
    dev.style.lineHeight = 100 + "px"

    const addSeconds = () => {
        time++;
        dev.textContent = time + " is a time, spent on the site";
    }
    return addSeconds;
}
const start = timer();

setInterval(start, 1000);
/////////////////////////////////////////////////////////////////////////

const actualTime = () => {
const time = new Date();
const sec = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
const min = time.getMinutes() < 10 ? "0" + time.Minutes() : time.getMinutes();
const hor = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

document.querySelector(".clock span").textContent = `${hor}:${min}:${sec}`;
}
setInterval(actualTime, 1000);