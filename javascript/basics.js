// const today = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = days[today.getDay()];
let hours = today.getHours();
const minutes = today.getMinutes();
const second = today.getSeconds();
const am_pm = hours>=12 ? "pm" : "am";
hours = hours%12;
hours = hours ? hours : 12;
console.log("Today is :" + day);
console.log("current time is :" + hours + " " + am_pm +":"+  minutes + ":" + second)


//2amd 3

let a = 5, b = 6, c = 7;
let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Area of triangle is: " + area.toFixed(2));


function rotateString(str)
{
    str = str.charAt(str.length - 1) + str.substring(0, str.length - 1);
    console.log(str);
}
rotateString("w3resource");


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  console.log(isLeapYear(2024)); 
  console.log(isLeapYear(2100)); 
  
  for(year = 2014 ;year <= 2050;year++)
    {
        let date = new Date(year,0,1);
        if(date.getDay()  === 0)
        {
            console.log("1st January is a Sunday in the year"  + year);
        }
    }


    let randomNumber = Math.floor(Math.random() * 10) + 1;
let user = parseInt(prompt("Guess a number between 1 and 10:"));
if (user === randomNumber) {
  alert("Good Work");
} else {
  alert(`Not matched! The correct number was ${randomNumber}`);
}

let today = new Date();
let year = today.getFullYear();
let christmas = new Date(year, 11, 25); 
if (today > christmas) {
  christmas = new Date(year + 1, 11, 25);
}
let oneDay = 1000 * 60 * 60 * 24;
let daysLeft = Math.ceil((christmas - today) / oneDay);

console.log(`There are ${daysLeft} days left until next Christmas!`);


//10

const temp = prompt("Enter the temperature : ");
const value = parseFloat(temp);
const degree = temp.slice(-1).toUpperCase();

if(degree === "C"){
    const ans = ((9 / 5) * value) + 32;
    console.log(value + "°C is " + ans + "°F");
}
else{
    const ans = (value - 32) * 5 / 9 ;
    console.log(value + "°F is " + ans + "°C");
}

