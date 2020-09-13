const timer = () => {
    let time = 0;
    document.body.textContent =  0  + " is a time, spent on the site";

    const addSeconds = () => {
        time++;
        document.body.textContent = time + " is a time, spent on the site";
    }
    return addSeconds;
}
const start = timer();

setInterval(start, 1000);