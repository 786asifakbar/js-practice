let d = new Date();
console.log(`Year : ${d.getFullYear()}`);  // Year (e.g., 2025)
console.log(`Month : ${d.getMonth()}`); // Month (0-11) [0 = January, 11 = December]
console.log(`Date : ${d.getDate()}`); // Day of month (1-31)
console.log(`Day : ${d.getDay()}`); // Day of week (0-6) [0 = Sunday]
console.log(`Hourse : ${d.getHours()}`); // Hours (0-23)
console.log(`Mints : ${d.getMinutes()}`);// Minutes (0-59)
console.log(`Seconds : ${d.getSeconds()}`); // Seconds (0-59)
console.log(`milliseconds : ${d.getMilliseconds()}`); // Milliseconds (0-999)
console.log(`Time : ${d.getTime()}`); // Milliseconds since Jan 1, 1970 (Unix time)
console.log(`Time zone offset : ${d.getTimezoneOffset()}`); // Difference from UTC in minutes


console.log(`Set year : ${d.setFullYear(2025)}`); // Set year
console.log(`Set Month : ${d.setMonth(9)}`);// Set month (0-11)
console.log(`Set Date : ${d.setDate(3)}`);// Set day of month
console.log(`Set Hourse : ${d.setHours(10)}`);// Set hours (0-23)
console.log(`Set Mints : ${d.setMinutes(35)}`);// Set minutes
console.log(`Set Seconds : ${d.setSeconds(30)}`); // Set seconds
console.log(`Set Milliseconds : ${d.setMilliseconds(500)}`); // Set milliseconds
console.log(`Set Time : ${d.setTime(987967897726)}`);  // Set using timestamp (ms from 1970-01-01)

console.log(`Set UTC year : ${d.setUTCFullYear(2025)}`); // Set year
console.log(`Set UTC Month : ${d.setUTCMonth(10)}`);// Set month (0-11)
console.log(`Set UTC Date : ${d.setUTCDate(3)}`);// Set day of month
console.log(`Set UTC Hourse : ${d.setUTCHours(10)}`);// Set hours (0-23)
console.log(`Set UTC Mints : ${d.setUTCMinutes(35)}`);// Set minutes
console.log(`Set UTC Seconds : ${d.setUTCSeconds(30)}`); // Set seconds
console.log(`Set UTC Milliseconds : ${d.setUTCMilliseconds(500)}`); // Set milliseconds

console.log(` : ${d.toString()}`); // Full date & time as string
console.log(` : ${d.toDateString()}`); // Only date
console.log(` : ${d.toTimeString()}`); // Only time
console.log(` : ${d.toISOString()}`); // ISO format (e.g., 2025-10-03T08:30:00.000Z)
console.log(` : ${d.toUTCString()}`); // UTC format
console.log(` : ${d.toLocaleString()}`); // Local date & time
console.log(` : ${d.toLocaleDateString()}`); // Local date only
console.log(` : ${d.toLocaleTimeString()}`); // Local time only




let now = new Date();

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Day:", now.getDate());
console.log("Weekday:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp:", now.getTime());

console.log("ISO:", now.toISOString());
console.log("Locale:", now.toLocaleString());
