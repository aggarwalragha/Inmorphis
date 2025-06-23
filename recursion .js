function fact(n){
    if(n === 0 || n === 1) return 1;
    return n * (fact(n-1));
}


function gcd(a, b) {
  if (b === 0) 
    return a;
  return gcd(b, a % b);
}


var a = 2 , b = 9 ;
var ans = [];
function func(a,b){
    if(a > b) return [];
    if(a === b - 1) return ans;
    return [a+1, ... func(a+1,b)];
}
console.log(func(a,b));


function sumArray(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + sumArray(arr.slice(1));
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));


function expo(n,e){
  if(e <= 1) return n;
  return n*expo(n,e-1);
}
console.log(expo(8,2));


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));


function isEven(num) {
  if (num < 0) num = -num;
    if (num === 0) return true;
  if (num === 1) return false;
    return isEven(num - 2);
}
console.log(isEven(26));


function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target){
    return mid;
  } 
  else if (arr[mid] > target){
    return binarySearch(arr, target, left, mid - 1);
  } 
  else{
    return binarySearch(arr, target, mid + 1, right);
  }
}

const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr, 7));  
console.log(binarySearch(arr, 8));  


//9th 
