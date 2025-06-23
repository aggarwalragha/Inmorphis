// console.log("Javascript Conditinal Statements and Loop");
// var inp1=parseInt(prompt("enter first integer"));
// var inp2=parseInt(prompt("enter second integer"));
// if(inp1>inp2)
//     console.log(inp1);
// else
// console.log(inp2);


// var inp1=parseInt(prompt("enter first integer"));
// var inp2=parseInt(prompt("enter second integer"));
// var cn=0;
// var inp3=parseInt(prompt("enter third number"));
// function isNegative(num){
//     if(num<0)
//         cn++;
// return cn;}
// isNegative(inp1);
// isNegative(inp2);
// isNegative(inp3);
// if(cn!==2)
//        console.log("the sign is -");
//     else
//     console.log("the sign is +");


var inp1=parseInt(prompt("enter first integer"));
var inp2=parseInt(prompt("enter second integer"));
var inp3=parseInt(prompt("enter third number"));
var inp4=parseInt(prompt("enter fourth integer"));
var inp5=parseInt(prompt("enter fiveth number"));
 var arr=[inp1,inp2,inp3,inp4,inp5];
for(var i=0;i<=arr.length;i++){
    for(var j=i;j<=arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            var temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
                    }
    }
}console.log(arr[length]);


var a = prompt("Enter the numbers : ");
var ans = a.split(' ');
function sortFive(ans) {
    var t = parseInt(ans[0]);
    for(let i = 1 ; i < ans.length ; i++){
        if(parseInt(ans[i]) > t)
        t= parseInt(ans[i]);
    }
    return t;
}
console.log(sortFive(ans));


var a = 0 ;
var b = 15;
function func(a,b){
    for(var i = 0 ; i <= 15 ; i++){
        if(parseInt(i) % 2 === 0)
        console.log(i + ' is even');
        else
        console.log(i + ' is odd');
    }
}
func(a,b);

//6th not done

var a = 3 ;
var b = 5;
function func(a,b){
    var arr = [];
    for(var i = 1 ; i <= 100 ; i++){
        if(parseInt(i) % 15 === 0)
        arr.push("FizzBuzz");
        else if(parseInt(i) % 5 === 0)
        arr.push("Fizz");
        else if(parseInt(i) % 5 === 0)
        arr.push("Buzz");
        else
        arr.push(i);
    }
    return arr;
}
console.log(func(a,b));


function sumOfSquares(num) {
  let sum = 0;
  let digits = num.toString().split("");
  for (let d of digits) {
    sum += Number(d) * Number(d);
  }
  return sum;
}
function isHappy(num) {
  let seen = [];
  while (num !== 1 && !seen.includes(num)) {
    seen.push(num);           
    num = sumOfSquares(num);
  }
  return num === 1;
}
let happyNumbers = [];
let number = 1;
while (happyNumbers.length < 5) {
  if (isHappy(number)) {
    happyNumbers.push(number);
  }
  number++;
}
console.log("First 5 happy numbers:", happyNumbers);


var a = 372 ;
function func(a){
    let b = a , ans = 0;
    while(b){
        let i = (b%10);
        ans += ( i * i * i);
        b = parseInt(b/10);
    }
    return ans === a;
}
console.log(func(a));


var a = 5 ;
function func(a){
    for(var i = 0 ; i < a ; i++){
        let t = '';
        for(let j = 0 ; j <= i ; j++)
         t +='* ';
        console.log(t);
    }
}
func(a);


function gcd(a, b) {
  if (b === 0) 
    return a;
  return gcd(b, a % b);
}


var a = 3 ;
var b = 5;
function func(a,b){
    var arr = [];
    for(var i = a ; i <= 1000 ; i++){
        if(parseInt(i) % 5 === 0 || parseInt(i) % 15 === 0 || parseInt(i) % 3 === 0)
        arr.push(i);
    }
    return arr;
}
console.log(func(a,b));