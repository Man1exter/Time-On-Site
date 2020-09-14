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
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const birthDay = new Date().getTime();

const day = document.querySelector(".day");
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sc = document.querySelector(".sc");

setInterval(()=>{
    const actuallyTime = new Date().getTime();
    const time = birthDay - actualTime;

    const dayCalc = Math.floor((birthDay/1000 * 60 * 60 * 24) - (actualTime/1000 * 60 * 60 * 24))
    
    const hrCalc = Math.floor((birthDay/1000 * 60 * 60 ))
    
    const minCalc = Math.floor((birthDay/1000 * 60 ))
    
    const scCalc = Math.floor((birthDay/1000 ))

    day.textContent = dayCalc;
    hr.textContent = hrCalc;
    min.textContent = minCalc;
    sc.textContent = scCalc;
})
