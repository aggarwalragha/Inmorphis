function isBoolean(value) {
    return typeof value === 'boolean';
  }
  console.log(isBoolean(true));  
  console.log(isBoolean("true"));


function isError(value) {
    return value instanceof Error;
  }
  console.log(isError(new Error("Oops"))); 
  console.log(isError("Error"));


function isNaNValue(value) {
    return typeof value === 'number' && isNaN(value);
  }
  console.log(isNaNValue(NaN));      
  console.log(isNaNValue("NaN"));    
  console.log(isNaNValue(undefined));


function isNull(value) {
    return value === null;
  }
  console.log(isNull(null));    
  console.log(isNull(undefined))


function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  console.log(isNumber(123));     
  console.log(isNumber(NaN));    
  console.log(isNumber("123"))


function isObject(value) {
    return typeof value === 'object' && value !== null;
  }
  console.log(isObject({}));        
  console.log(isObject(null));     
  console.log(isObject([]))


function isPureJsonObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }
  console.log(isPureJsonObject({ a: 1 }));  
  console.log(isPureJsonObject(null));


function isRegExp(value) {
    return value instanceof RegExp;
  }
  console.log(isRegExp(/abc/));      
  console.log(isRegExp("abc"));


function isChar(value) {
    return typeof value === 'string' && value.length === 1;
  }
  console.log(isChar("a"));    
  console.log(isChar("ab"));  
  console.log(isChar(1));

  
function isSameType(val1, val2) {
    return typeof val1 === typeof val2;
  }
  console.log(isSameType(10, 20));      
  console.log(isSameType(10, "10"));     
  console.log(isSameType([], {}));  