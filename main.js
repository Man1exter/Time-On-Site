const timer = () => {
    let time = 0;
    document.body.textContent =  0  + " is a time, spent on the site";
    document.body.style.color = "yellow"
    document.body.style.fontSize = 34 + "px"; 
    document.body.style.textAlign = "center";
    document.body.style.lineHeight = 100 + "px"

    const addSeconds = () => {
        time++;
        document.body.textContent = time + " is a time, spent on the site";
    }
    return addSeconds;
}
const start = timer();

setInterval(start, 1000);