function is_array(arr){
return Array.isArray(arr);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


function array_Clone(arr) {
    return arr.slice(0);
  }
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));
  
  
  
function first(arr, n) {
    if (arr == null) return void 0;
    if (n == null) return arr[0];
    if (n < 0) return [];
    return arr.slice(0, n);
  }
  
  
  function last(arr, n) {
    if (arr == null) return void 0;
    if (n == null) return arr[arr.length - 1];
    return arr.slice(Math.max(arr.length - n, 0));
  }
  
  // q5
  let myColor = ["Red", "Green", "White", "Black"];
  console.log(myColor.join(","));
  console.log(myColor.join("+"));
  
  // q6
  function insertDash(num) {
    let str = num.toString();
    let result = [str[0]];
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
        result.push('-');
      }
      result.push(str[i]);
    }
    return result.join('');
  }
  console.log(insertDash(25468));
  
  // a7
  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  let arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
  console.log(bubbleSort(arr1));  
  // q8
  function mostFrequent(arr) {
    let map = {}, maxNum = 0, most;
    for (let item of arr) {
      map[item] = (map[item] || 0) + 1;
      if (map[item] > maxNum) {
        maxNum = map[item];
        most = item;
      }
    }
    return `${most} (${maxNum} times)`;
  }
  console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
  
  // q9
  function swapCase(str) {
    let swapped = '';
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      if (ch === ch.toLowerCase()) {
        swapped += ch.toUpperCase();
      } else {
        swapped += ch.toLowerCase();
      }
    }
    return swapped;
  }
  
  console.log(swapCase('The Quick Brown Fox'));  
  
  // q10
  var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  a.forEach((row, i) => {
    console.log("row " + i);
    row.forEach(val => console.log(" " + val));
  }); var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  a.forEach((row, i) => {
    console.log("row " + i);
    row.forEach(val => console.log(" " + val));
  });
  
  // q11
  function sumOfSquares(arr) {
    return arr.reduce((sum, val) => sum + val * val, 0);
  }
  
  // q12
  function sumAndProduct(arr) {
    return arr.reduce((res, val) => {
      res.sum += val;
      res.product *= val;
      return res;
    }, {sum: 0, product: 1});
  }
  
  // q13
  
  
  // q14
  function removeDuplicates(arr) {
    let unique = [];
    let seen = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      let item = typeof arr[i] === 'string' ? arr[i].toLowerCase() : arr[i];
      if (!seen.has(item)) {
        seen.add(item);
        unique.push(arr[i]);  
    }
  
    return unique;
  }
}
  
  // q15
  function displayColors(colors) {
    const o = ["th", "st", "nd", "rd"];
    for (let i = 0; i < colors.length; i++) {
      let suffix = o[(i + 1) % 10 > 3 || (i + 1) % 10 === 0 || (i + 1) > 20 ? 0 : (i + 1) % 10];
      console.log(`${i + 1}${suffix} choice is ${colors[i]}.`);
    }
  }
  
  // q16
  function leapYears(start, end) {
    const years = [];
    for (let year = start; year <= end; year++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) years.push(year);
    }
    return years;
  }
  // 17. Shuffle an array
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  // 18. Binary search
  function binary_Search(items, value) {
    let low = 0, high = items.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (items[mid] === value) return mid;
      else if (items[mid] < value) low = mid + 1;
      else high = mid - 1;
    }
    return -1;
  }
  
  // 19. Sum of two arrays by index
  function sumArrays(arr1, arr2) {
    let maxLen = Math.max(arr1.length, arr2.length);
    let result = [];
    for (let i = 0; i < maxLen; i++) {
      result.push((arr1[i] || 0) + (arr2[i] || 0));
    }
    return result;
  }
  
  // 20. Find duplicates
  function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    for (let val of arr) {
      if (seen.has(val)) duplicates.add(val);
      else seen.add(val);
    }
    return [...duplicates];
  }
  
  // 21. Flatten array
  
  // 22. Union of arrays
  function union(a, b) {
    return [...new Set([...a, ...b])];
  }
  
  // 23. Difference of two arrays
  function difference(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) {
        result.push(a[i]);
      }
    }
    for (let j = 0; j < b.length; j++) {
      if (!a.includes(b[j])) {
        result.push(b[j]);
      }
    }
    return result;
  }
  
  

  function cleanArray(arr) {
    return arr.filter(Boolean);
  }
  
  // 25
 
  
  function findPair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) return [i, j];
      }
    }
    return [];
  }
  
  // 27. 
  
  
  function longestCommonStart(arr) {
    if (arr.length === 0) return '';
    let result = '';
    let firstWord = arr[0];
  
    for (let i = 0; i < firstWord.length; i++) {
      let char = firstWord[i];
      for (let j = 1; j < arr.length; j++) {
        if (arr[j][i] !== char) {
          return result;
        }
      }
      result += char;
    }
    return result;
  }
  
  // 29. Fill array with range
  function num_string_range(start, end, step) {
    let result = [];
    if (typeof start === "number") {
      for (let i = start; i <= end; i += step) result.push(i);
    } else {
      for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step)
        result.push(String.fromCharCode(i));
    }
    return result;
  }
  
  // 30. Merge and remove duplicates
  function merge_array(a, b) {
    return [...new Set([...a, ...b])];
  }
  
  // 31. Remove specific element
  function remove_array_element(arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== value) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  // 32. Check if array contains element
  function contains(arr, value) {
    return arr.includes(value);
  }
  
  // 33. Empty array keeping reference
  function emptyArray(arr) {
    arr.length = 0;
    return arr;
  }
  
  // 34. Nth largest element
  function nthlargest(arr, n) {
    return arr.sort((a, b) => b - a)[n - 1];
  }
  
  // 35. Random item from array
  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // 36. Fill array with numeric values
  function array_filled(n, val) {
    return Array(n).fill(val);
  }
  
  // 37. Fill array with string values
  // Same as above — works for any value type
  
  // 38. Move element
  function move(arr, from, to) {
    const copy = arr.slice();
    const val = copy.splice(from < 0 ? copy.length + from : from, 1)[0];
    copy.splice(to < 0 ? copy.length + to : to, 0, val);
    return copy;
  }
  
  // 39. Filter false, null, 0, ""
  function filter_array_values(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // 40. Array range increasing by 1
  function array_range(start, length) {
    let result = [];
    for (let i = 0; i < length; i++) {
      result.push(start + i);
    }
    return result;
  }
  
  // 41. Array range between two integers
  function rangeBetwee(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  
  // 42. 
  