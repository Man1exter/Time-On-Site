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
const time = Date();
const sec = time.getSeconds()
const min = time.getSeconds()
const hor = time.getSeconds()

document.querySelector("span").textContent = `${sec}:${min}:${hor}`;

}