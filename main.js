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

// const x = 10;

// console.log((x%2===0) ? 'podzielne' : 'nie podzielne')
//operator warunkowy // 

// const x = 50;
// let $txt;

// if(x >= 100){
//     $txt = 'its ok';
// } else if ( x < 100 && x > 30){
//     $txt = "mid";
// } else {
//     $txt = "small"
// }
// console.log($txt.toUpperCase())

// complete exercises next kek ////

// const cities = ['Warsaw','Kraków','Wroclaw']

// for (let i = 0; i < 1; i++) {
//     console.log(`This is my cities ${cities[0]}`)
// }

// complete for let i i i exercises
// let x = 0;
// while(x <= 10){
//     console.log(x);
//     x += 2; // x = x + 2
// }


// let x = 20;
// do{
//     console.log(`${x}`)
//     x -= 3
// } while(x>0)
// console.log(`${x}`)

// do ... while complete stack

// const items = [5, 8, 10, 23, 48, 60];
//  for(let item of items){
//      if( item % 2 === 0){
//          console.log(`yes ${item}`);
//      } else {
//          console.log(`no ${item}`);
//      }
//     //  console.log(item / 5)
//     }

//     // section copmplete 5/5 mm

// const colors = ["green", "red", "yellow"];
// const newColor = colors;
// newColor.pop("yellow")
// console.log(newColor)
//  colors.unshift("blue");
//  console.log(colors)

// complete unshift with arrays
//complete shift / pop / push exercises done