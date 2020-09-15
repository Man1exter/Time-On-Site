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
const min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
const hor = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

document.querySelector(".clock span").textContent = `${hor}:${min}:${sec}`;
}
setInterval(actualTime, 1000);
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const birthDay = new Date('2021-08-21 09:00:00').getTime();

const daySec = document.querySelector(".day");
const hr = document.querySelector(".hr");
const mins = document.querySelector(".min");
const sc = document.querySelector(".sc");

setInterval( () => {
    const actuallyTime = new Date().getTime();
    const timeX = birthDay - actuallyTime;

    const dayCalc = Math.floor((birthDay/(1000 * 60 * 60 * 24)) - (actuallyTime/(1000 * 60 * 60 * 24)));
    
    const hrCalc = Math.floor((birthDay/(1000 * 60 * 60) - actuallyTime/(1000 * 60 * 60)) % 24);
    
    const minCalc = Math.floor((birthDay / (1000 * 60) - actuallyTime / (1000 * 60)) % 60);
    
    const scCalc = Math.floor((birthDay / 1000 - actuallyTime / 1000) % 60);

    daySec.textContent = dayCalc;
    hr.textContent = hrCalc;
    mins.textContent = minCalc;
    sc.textContent = scCalc;
},1000)
//////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const x = 50;
// const y = 30;

// if(x >= y){
//     console.log('dobra robota')
// }
//// if ////////

// const color = "blue";
// const newColor = "green";
// if(color === newColor){
// console.log('yes');
// } else {
//     console.log('no');
// }

//else and if //

// const x = 100;
// const y = 50;

// if(y > x){
//     console.log("of course");
// } else if(x === y) {
//     console.log("nie jest równy")
// } else  {
//     console.log("not now")
// }

// else if complete //

// const promo = '20';
// switch(promo){
//     case '10':
//     break;

//     case '20':
//         console.log("tak to ta promka")
//         break;
        
//         case '30':
//             break;

//             default:console.log('sorka')
// }

// switch case break done//