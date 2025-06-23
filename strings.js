 console.log("JavaScript String");
// let  input= prompt("Enter the string ");
function is_String(input){
 return typeof input ==='string' ;   
}console.log(is_String(1234));


function checkBlank(str)
{
    if(typeof str == ' ')
        return true;
    else
    return false;
}

console.log(checkString("w3"))



function string_to_array(str) {
    return str.trim().split(" ");
  }
  


  function truncate_string(str, num) {
    return str.slice(0, num);
  }
  console.log(truncate_string("Robin Singh",4))
  


  function abbrev_name(str) {
    let res = str.split(" ");
    let name = res[0];
    for (let i = 1; i < res.length; i++) {
      name += " " + res[i].charAt(0) + "."; 
    }
    return name;
  }
  
  console.log(abbrev_name("Robin Singh"));
  
  //Q6

   function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  


  function capitalizeWords(str)
  {   let res = " "
    let arr = str.split(" ")
    for( i = 0;i<arr.length;i++)
    {
        res += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " "
    }
    return res
  }
  console.log(capitalizeWords("js string exercises"))
 


  function swapCase(str)
  { res = " "
    for(i of str)
    {
      if(i === i.toUpperCase())
      {
       res +=  i.toLowerCase()
      }
      else 
      {
        res += i.toUpperCase()
      }
    }
    return res
  }
  console.log(swapCase("aAb$B"))
  //Q11
  //Q12
  //Q13
  function repeat(str, n  ) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += str;
    }
    return result;
  }
  console.log(repeat("Hi", 3));
  
  
  function insert(str, insertStr, pos = 1) {
    return str.slice(0, pos) + insertStr + str.slice(pos);
  }
  console.log(insert('We are doing some exercises.'));  
  console.log(insert('We are doing some exercises.','JavaScript '));  
  console.log(insert('We are doing some exercises.','JavaScript ',18)); 
  

  function humanize_format(num) {
    if (typeof num !== 'number') return;
      let lastDigit = num % 10;
    let lastTwoDigits = num % 100;
      if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return num + "th";
    }  
    switch (lastDigit) {
      case 1: return num + "st";
      case 2: return num + "nd";
      case 3: return num + "rd";
      default: return num + "th";
    }
  }
    console.log(humanize_format(114));  
  

  function text_truncate(str,len,ending = '...')
  {
    return (str.length>len ? str.slice(0,len-ending.length)+ ending: str)
  }
  console.log(text_truncate('We are doing JS string exercises.'))  
console.log(text_truncate('We are doing JS string exercises.',19)) 
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))


function string_chop(str, size) {
  if (!size) return [str];
  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}


function count(str, substr) {
  let res = str.toLowerCase().split(/\s+/); 
  let target = substr.toLowerCase();
  let c = 0;
  for (let i of res) {
    if (i === target) {
      c++;
    }
  }
  return c;
}
//q19



function formatted_string(pad, user_str, pad_pos) {
  if (typeof user_str === 'undefined') return pad;
  if (pad_pos === 'l') {
    return (pad + user_str).slice(-pad.length);
  } else {
    return (user_str + pad).substring(0, pad.length);
  }
}


function repeat_string(str, n  ) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
console.log(repeat("a", 3));


function subStrAfterChars(str, char, pos) {
  let index = str.indexOf(char);
  if (index === -1) return str;
  return pos === 'a' ? str.substring(0, index) : str.substring(index + 1);
}


function strip(str) {
  return str.trim();
}


function truncate(str, numWords) {
  return str.split(" ").slice(0, numWords).join(" ");
}


function alphabetize_string(str) {
  return str.replace(/[\s]+/g, "").split("").sort().join("");
}


function remove_first_occurrence(str, searchStr) {
  return str.replace(searchStr, "");
}


function ascii_to_hexa(str) {
  let hex = "";
  for (let i = 0; i < str.length; i++) {
    hex += str.charCodeAt(i).toString(16);
  }
  return hex;
}


function hex_to_ascii(hex) {
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    let code = parseInt(hex.substr(i, 2), 16);  // Convert 2 hex digits to a decimal number
    str += String.fromCharCode(code);           // Convert number to character
  }
  return str;
}


function search_word(str, word) {
  let arr = str.split(/\s+/); 
  let c = 0;

  for (let i of arr) {
    if (i === word) {
      c++;
    }
  }

  console.log(`'${word}' was found ${c} times.`);
}
search_word('The quick brown fox', 'fox');  
search_word('aa, bb, cc, dd, aa', 'aa');


function string_endsWith(str, suffix) {
  return str.endsWith(suffix) && suffix !== "";
}


function escape_html(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}


function remove_non_ascii(str) {
  return str.replace(/[^\x20-\x7E]/g, '');
}


function remove_non_word(str) {
  return str.replace(/[^\w\s-]/g, '');
}


function sentenceCase(str) {
  let sentences = str.split('.');  
  let result = [];
  for (let sentence of sentences) {
    sentence = sentence.trim();  
    if (sentence.length > 0) {
      result.push(sentence[0].toUpperCase() + sentence.slice(1));
    }
  }
  return result.join('. ') + (str.endsWith('.') ? '.' : '');
}



function strip_html_tags(str) {
  return str.replace(/<[^>]*>/g, '');
}


function zeroFill(num, width, sign = '+') {
  let absNum = Math.abs(num).toString();
  let zerosNeeded = width - absNum.length;
  let padding = '';
  for (let i = 0; i < zerosNeeded; i++) {
    padding += '0';
  }
  let signChar = (sign === '-' && num < 0) ? '-' : '+';
  return signChar + padding + absNum;
}


function compare_strings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}


function case_insensitive_search(str, search) {
  return str.toLowerCase().includes(search.toLowerCase()) ? "Matched" : "Not Matched";
}
