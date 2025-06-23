function reverse(no){
    var rev=0,r;
    while(no!=0)
    {
        r=parseInt(no%10);
        rev=(rev*10)+r;
        no=parseInt(no/10);

    }
    return rev;
}
console.log(reverse(45673));


function palindrom(input){
    var str= input.trim();
    str=str.toLowerCase();
    var start =0;
    var end = str.length-1;
    while(start <=end )
    {
        if(str[start]  !== str[end])
        return false;
    
    start++;
    end--;

}
return true;
}
console.log (palindrom('raghav'));


// function combination(input){
//     var result=[];
//     for(var i=0;i<input.length;i++)
//     {
//         for(var j=i+1;j<=input.length;j++)
//         {
//             result.push(input.slice(i,j));
//         }
//     }
// return result ;
// }console.log(combination("raghav"));


// function alphabetic(input){
//     var output=[];
//     var result=[];
//     for(var i =0;i<input.length;i++)
//     {
//              output.push(input.charAt(i));
//         }
//         // console.log(output.length);
//         for(var i=0;i<output.length;i++)
//     {
//         for(var j=i+1;j<=output.length;j++)
//         {
//             if(output[i]>output[j])
//             {
//                 var temp= output[j];
//                 output[j]=output[i];
//                 output[i]=temp;

//             }
           
//     }
//     }
    
//     return output;

// }console.log(alphabetic("raghav"));


// function conversion(input){
//     var s=input.trim();
//     const str=s+" ";
//     for(var i=0;i<=str.length;i++)
//     {
//         let k=str[i];
//         if(k===' ')
//         {

//         }

//     }
// return str;
// }console.log(conversion("the bog dog chup"));

// function longest(input){
//     var arr=[];
//     arr=input.slice(' ');
//     for(var i=0;i<=arr.length;i++){

//     }
// }
// function vowels7(input){
//     var inpt= input.toLowerCase();
//     let count=0;
//     for(var i=0;i<inpt.length;i++)
//     {
//         let k= inpt[i];
//         if(k=='a'||k=='e'||k=='i'||k=='o'||k=='u')
//             count++;
//     }
//     return count;
// }console.log(vowels7("RAGHAV"));


let input=parseInt(prompt("enter "));
function prime(input)
{
    if(input<=1)
        return false;
    else if (input<=3) 
        return true;
    else{
          for(var i=2;i<input/2;i++)
    {
        if(input%i==0)
            return false;
            
    }}
}console.log(prime(input));
console.log(typeof(input));


var num1 = undefined;
var num2 = null ;
var num3 = 22062025 ;
var num4 = "Aakash" ;
var num5 = true;
function inputType(num){
    return typeof num;
}
console.log(inputType(num1));
console.log(inputType(num2));
console.log(inputType(num3));
console.log(inputType(num4));
console.log(inputType(num5));
console.log(inputType(inputType));


var n = parseInt(prompt("Enter value of n : "));
var ans = [];
for(var i = 0 ; i < n ; i++){
    var row = [];
    for(var j = 0 ; j < n ; j++){
        (i == j) ? row.push(1) : row.push(0);
    }
    ans.push(row);
}
console.log(ans);


function findSecondNumbers(arr) {
    arr = Array.from(new Set(arr));
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}
console.log("\n Find the second lowest and second greatest numbers in an array:");
console.log(findSecondNumbers([1, 2, 3, 4, 5]));
console.log(findSecondNumbers([12, 5, 7, 3, 8]));


function isPerfect(num) {
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i * i !== num) {
                sum += num / i;
            }
        }
    }
    return sum === num;
}

console.log("\n Check if a number is perfect:");
console.log(isPerfect(6));
console.log(isPerfect(28)); 
console.log(isPerfect(12));    


function getFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log("\n Compute the factors of a positive integer:");
console.log(getFactors(28));
console.log(getFactors(12));


var amount = parseInt(prompt("Enter the amount : "));
var arr = [25, 10, 5, 2, 1];
var i = 0 ;

function func(amount){
    if(amount <= 0){
        console.log("Enter a valid number");
        return ans;
    }
    var ans = [];
    while(amount){
     if(amount - arr[i] >= 0){
        amount -= arr[i];
        ans.push(arr[i]);
     }
     else{
        i++;
     }
    }
    console.log(ans);
    return ans;
}

func(amount);


var base = parseInt(prompt("Enter the base : "));
var exponent = parseInt(prompt("Enter the exponent : "));
console.log(Math.pow(base,exponent));


function uniqueCharacters(str) {
    return Array.from(new Set(str)).join('');
}
console.log("\n Extract unique characters from a string:");
console.log(uniqueCharacters('thequickbrownfoxjumpsoverthelazydog'));


function countLetters(str) {
    const counts = {};
    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            counts[char] = counts[char] ? counts[char] + 1 : 1;
        }
    }
    return counts;
}

console.log("\n Get the number of occurrences of each letter in a string:");
console.log(countLetters('hello world'));


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log("\n Binary search in JavaScript arrays:");
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));


function elementsLargerThan(arr, num) {
    return arr.filter(item => item > num);
}

console.log("\n Return array elements larger than a number:");
console.log(elementsLargerThan([1, 2, 3, 4, 5, 6, 7], 3));
console.log(elementsLargerThan([-10, 0, 10, 20, 30], 15));


function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
console.log("\n Generate a random string id of specified length:");
console.log(generateRandomId(8));


function getSubsets(arr, length) {
    const subsets = [];
    const helper = (start, subset) => {
        if (subset.length === length) {
            subsets.push(subset.slice());
            return;
        }
        for (let i = start; i < arr.length; i++) {
            subset.push(arr[i]);
            helper(i + 1, subset);
            subset.pop();
        }
    };
    helper(0, []);
    return subsets;
}

console.log("\n Get all possible subsets of fixed length from an array:");
console.log(getSubsets([1, 2, 3], 2));


function countOccurrences(str, letter) {
    let count = 0;
    for (let char of str) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}
console.log("\n Count occurrences of a letter in a string:");
console.log(countOccurrences('w3resource.com', 'o'));


function firstNotRepeated(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log("\n Find the first not repeated character in a string:");
console.log(firstNotRepeated('abacddbec'));


function longestCountryName(countries) {
    return countries.reduce((longest, country) => country.length > longest.length ? country : longest, '');
}
console.log("\n Find the longest country name in an array:");
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));


function longestSubstringWithoutRepeating(str) {
    let longest = '';
    let current = '';
    for (let char of str) {
        const index = current.indexOf(char);
        if (index !== -1) {
            current = current.slice(index + 1);
        }
        current += char;
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}
console.log("\n Find longest substring without repeating characters:");
console.log(longestSubstringWithoutRepeating('abcabcbb'));
console.log(longestSubstringWithoutRepeating('bbbbb'));


function longestPalindrome(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const substr = str.slice(i, j);
            if (substr === substr.split('').reverse().join('') && substr.length > longest.length) {
                longest = substr;
            }
        }
    }
    return longest;
}
console.log("\n Find longest palindrome in a string:");
console.log(longestPalindrome('bananas'));
console.log(longestPalindrome('abracadabra'));


function executeFunction(func) {
    return func();
}
console.log("\n Pass a JavaScript function as parameter:");
console.log(executeFunction(() => 'Hello, World!'));


function getFunctionName(func) {
    return func.name;
}
console.log("\n Get the function name:");
console.log(getFunctionName(reverseNumber));
console.log(getFunctionName(isPalindrome)); 