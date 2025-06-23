// 1. Check if input is a Date object
function is_date(input) {
    return Object.prototype.toString.call(input) === '[object Date]';
  }
  
  // 2. Get current date with separator
  function curday(separator) {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    return (
      (month < 10 ? '0' + month : month) +
      separator +
      (day < 10 ? '0' + day : day) +
      separator +
      year
    );
  }
  
  // 3. Get number of days in a month
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  
  // 4. Get month name from date
  function month_name(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()];
  }
  
  // 5. Compare two dates
  function compare_dates(date1, date2) {
    if (date1.getTime() === date2.getTime()) return "Date1 = Date2";
    return date1 > date2 ? "Date1 > Date2" : "Date2 > Date1";
  }
  
  // 6. Add specified minutes to a date
  function add_minutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }
  
  // 7. Check if date is a weekend
  function is_weekend(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDay();
    return day === 0 || day === 6 ? "weekend" : undefined;
  }
  
  // 8. Difference in days between two dates
  function date_diff_indays(date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24));
  }
  
  // 9. Get last day of the month
 
  
  // 10. Get yesterday from a date
  function yesterday(dateStr) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() - 1);
    return date;
  }
  
  // 11. Maximum date in array
  
  
  // 12. Minimum date in array
  
  
  // 13. Minutes to hours and minutes
  function timeConvert(n) {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    return `${n} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
  }
  
  // 14. Days of a year
  function days_of_a_year(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 366 : 365;
  }
  
  
  
  function days_passed(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    return Math.floor((date - start) / (1000 * 60 * 60 * 24)) + 1;
  }
  
  
  function unix_to_time(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  }
  
  
  function calculate_age(birthdate) {
    const diff = Date.now() - birthdate.getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }
  
  
  function day_of_the_month(date) {
    return ('0' + date.getDate()).slice(-2);
  }
  
  
  function short_Days(date) {
    return date.toString().split(' ')[0];
  }
  
  
  function long_Days(date) {
    return date.toLocaleString('default', { weekday: 'long' });
  }
  
  
  function ISO_numeric_date(date) {
    return date.getDay() === 0 ? 7 : date.getDay();
  }
  
  
  function english_ordinal_suffix(date) {
    const day = date.getDate();
    if (day > 3 && day < 21) return day + 'th';
    switch (day % 10) {
      case 1: return day + 'st';
      case 2: return day + 'nd';
      case 3: return day + 'rd';
      default: return day + 'th';
    }
  }
  
  
  function ISO8601_week_no(date) {
    const temp = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    temp.setHours(0, 0, 0, 0);
    temp.setDate(temp.getDate() + 3 - (temp.getDay() + 6) % 7);
    const week1 = new Date(temp.getFullYear(), 0, 4);
    return 1 + Math.round(((temp - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  }
  
  
  function full_month(date) {
    return date.toLocaleString('default', { month: 'long' });
  }
  
  
  function numeric_month(date) {
    return ('0' + (date.getMonth() + 1)).slice(-2);
  }
  
  
  function short_months(date) {
    return date.toLocaleString('default', { month: 'short' });
  }
  
  
  function full_year(date) {
    return date.getFullYear();
  }
  
  
  function sort_year(date) {
    return date.getFullYear().toString().slice(-2);
  }
  
  
  function get_lower_meridiem(date) {
    return date.getHours() >= 12 ? 'pm' : 'am';
  }
  
  
  function get_upper_meridiem(date) {
    return date.getHours() >= 12 ? 'PM' : 'AM';
  }
  
  
  function internet_time(date) {
    const utc = date.getUTCHours() * 3600 + date.getUTCMinutes() * 60 + date.getUTCSeconds();
    return Math.floor(((utc + 3600) % 86400) / 86.4);
  }
  
  
  function hours_with_zeroes(date) {
    let hours = date.getHours() % 12 || 12;
    return ('0' + hours).slice(-2);
  }
  
  
  function hours_without_zeroes(date) {
    return date.getHours();
  }
  
  
  function minutes_with_leading_zeros(date) {
    return ('0' + date.getMinutes()).slice(-2);
  }
  
  
  function seconds_with_leading_zeros(date) {
    return ('0' + date.getSeconds()).slice(-2);
  }
  
  
  function get_timezone(date) {
    return date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ').pop();
  }
  
  
  function daylights_savings(date) {
    const jan = new Date(date.getFullYear(), 0, 1);
    const jul = new Date(date.getFullYear(), 6, 1);
    return date.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  }
  
  
  function diff_to_GMT(date) {
    const offset = -date.getTimezoneOffset();
    return (offset >= 0 ? '+' : '-') + (Math.abs(offset / 60)).toFixed(3);
  }


  function timezone_offset_in_seconds(date) {
    return -date.getTimezoneOffset() * 60;
  }
  
  
  function add_years(date, years) {
    return new Date(date.setFullYear(date.getFullYear() + years));
  }
  
  
  function add_weeks(date, weeks) {
    return new Date(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);
  }
  
  
  function add_months(date, months) {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d;
  }
  
  
  function diff_minutes(dt1, dt2) {
    return Math.floor((dt2 - dt1) / (1000 * 60));
  }
  
  
  function diff_hours(dt1, dt2) {
    return Math.floor((dt2 - dt1) / (1000 * 60 * 60));
  }
  
  
  function diff_days(dt1, dt2) {
    return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24));
  }
  

  function diff_weeks(dt1, dt2) {
    return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24 * 7));
  }
  
  
  function diff_months(dt1, dt2) {
    return (dt2.getFullYear() - dt1.getFullYear()) * 12 + dt2.getMonth() - dt1.getMonth();
  }
  
  
  function diff_years(dt1, dt2) {
    return dt2.getFullYear() - dt1.getFullYear();
  }
  
  
  function week_start(date) {
    const d = new Date(date);
    const diff = d.getDate() - d.getDay() + (d.getDay() === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }
  
  
  function week_end(date) {
    const start = week_start(date);
    return new Date(start.getTime() + 6 * 24 * 60 * 60 * 1000);
  }
  
  
  function month_start(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
  
  
  function month_end(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }
  