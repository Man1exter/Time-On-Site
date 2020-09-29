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


// const numbers = [];
// const newNumbers = numbers;

// numbers.push("dwa");
// console.log(numbers)

// complete 51 exercises



// const x = ["mice", "mouse"];
// const y = ["elephant", "trans"];

// const xy = x.concat(y);
// console.log(xy);

// add two raays in one 

// const x = [1,2,3];
// const y = [4,5,6];

// const xy =[...x,...y];
// console.log(xy)

// add spread arreays in one ...[]



// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumbers = numbers.forEach(ele => {
//     console.log(ele * 5)
// });

// forEach with arrays complete done

// const colors = ["yellow"];
//   colors.unshift(" red");
//   colors.push(" pink");

// for (let i = 0; i < colors.length ; i++){
//     console.log(`favorite color: ${colors[i].toUpperCase()}`)
// }

// complete array with for let and inx colors to add in one
////////// s p a c e w i t h exercises

// const names = "Audi, Mercedes, BMW, Nissan, Dodge";
// const arrays = names.split(", ");

// console.log((names.length > 3) ? "jest OK" : "Nie jest OK");


// if (arrays.includes("Audi")) {
//     console.log("INCLUDES AUDI")
//     arrays.push("LAMBOOO")
// } else {
//     console.log("DH AUDI");
// } 

// if ( let )// e.t.c upper case with [i] index

//////////////////////////////////////////////////////////////
/////////// space to start with function  /s  /////////////////
////////////////////////////////////////////////////////////

// let $score;

// const sum = (x,y) => {
//   $score = x + y;


// if($score % 2 === 0){
//     plus();
// } else {
//     minus();
// }
// };

// function plus(){
//     console.log(`PARZYSTA ${$score}`);
// };
// function minus(){
//     console.log(`NIEPARZYSTA ${$score}`);
// };
// sum(1000,6555);

////////////////////////////////////////////////////////
//////////// complete exercises ////////////////////////



//konwerter ! :) fahrent na celc
// let $celsius;
// let $temp;

// const fahrenheit = (arg) => {
// $celsius = arg;
// $temp = ($celsius * 1.8 + 32);
// };
// fahrenheit()
// console.log(`${$celsius} to ${$temp}`);


//////////////////////////
///////////////////////////////////////

// let num = 10;
// let numbers = [];

// for(let i = 0; i < num; i++){
// numbers.push(i);
// console.log(numbers);
// };



// const letMe = numbers => {
//     if(numbers % 3 === 0){
//         console.log(`is ok ${numbers}`)
//     } else {
//         console.log(`isn't ok ${numbers}`)
//     }
// }
// const exec = numbers.forEach(letMe);
// done array with for
// .. done complete fiunish murillo



const ulList = document.createElement('ul');
document.body.appendChild(ulList);

for(let i = 0; i < 3; i++){
    
}



