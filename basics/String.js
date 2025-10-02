
let Str = "Hyder Ahmed Ali Khan";
console.log(Str.length); // check length
console.log(Str.toUpperCase()); // convert into upper case
console.log(Str.toLowerCase()); //covert from upper case to lower case
console.log(Str.slice(0, 5)); //string se makhsoos hissa nikalna 
console.log(Str.replace("Hyder", "Asif")); // string ko replace karna
console.log(Str.includes("Khan"));// kiya particular name is string me include hai 
console.log(Str.split(" ")); // Split by space // convert into array
console.log(Str.split("")); // Split by each character
console.log(Str.indexOf("Ali"));// index batata hai k  konse number par hai 
console.log(Str.charAt(0)); // charector dekhny k liye k konsi jagha par hai 
console.log(Str.startsWith("Hyder")); // check given value/name are start from
console.log(Str.endsWith("khan")); //  check given value/name are end of with
console.log(Str.repeat(2)); // Repeat the string 2 times
console.log(Str.trim()); // Remove whitespace from both ends
console.log(Str.concat(" is a great person.")); // Concatenate strings
console.log(Str.search("Ali")); // Search for a substring and return its index
console.log(Str.match(/a/gi)); // Match all occurrences of 'a' (case-insensitive)
console.log(Str.substr(0, 5)); // Get substring from index 0 with length 5
console.log(Str.substring(0, 5)); // Get substring from index 0 to 5
console.log(Str.valueOf()); // Return the primitive value of the string
console.log(Str.charCodeAt(0)); // Get the Unicode of the character at index 0
console.log(Str.lastIndexOf("a")); // Get the last index of 'a'
console.log(Str.localeCompare("Hyder Ali Khan")); // Compare two strings in the current locale
console.log(Str.padStart(20, "*")); // Pad the string at the start to a total length of 20 with '*'
console.log(Str.padEnd(20, "*")); // Pad the string at the end to a total length of 20 with '*'
console.log(Str.slice(-4)); // Get the last 4 characters
console.log(Str.slice(0, -4)); // Get the string excluding the last 4 characters
console.log(Str.split(" ").reverse().join(" ")); // Reverse the words in the string
console.log([...Str].reverse().join("")); // Reverse the entire string
console.log(Str.replace(/a/g, "A")); // Replace all occurrences of 'a' with 'A'
console.log(Str.replace(/ /g, "_")); // Replace all spaces with underscores
console.log(Str.normalize()); // Normalize the string
console.log(Str.normalize("NFD")); // Normalize to NFD form
console.log(Str.normalize("NFC")); // Normalize to NFC form
console.log(Str.normalize("NFKD")); // Normalize to NFKD form
console.log(Str.normalize("NFKC")); // Normalize to NFKC form
console.log(Str.toString()); // Convert to string (no effect here since it's already a string)
console.log(String.fromCharCode(72, 121, 100, 101, 114)); // Create a string from Unicode values
console.log(String.raw`Hyder\nAli`); // Raw string (no escape sequences processed)


