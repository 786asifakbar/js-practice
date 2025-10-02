let str = "  Hyder Ahmed Ali Khan  ";

// 1. Length
console.log("Length:", str.length);

// 2. Uppercase / Lowercase
console.log("Upper:", str.toUpperCase());
console.log("Lower:", str.toLowerCase());

// 3. Slice
console.log("Slice (0,5):", str.slice(0, 5));

// 4. Replace
console.log("Replace:", str.replace("Hyder", "Asif"));

// 5. Includes
console.log("Includes 'Khan':", str.includes("Khan"));

// 6. Split
console.log("Split by space:", str.split(" "));

// 7. IndexOf / LastIndexOf
console.log("Index of Ali:", str.indexOf("Ali"));
console.log("Last index of a:", str.lastIndexOf("a"));

// 8. CharAt / CharCodeAt
console.log("Char at 0:", str.charAt(0));
console.log("CharCode at 0:", str.charCodeAt(0));

// 9. StartsWith / EndsWith
console.log("StartsWith Hyder:", str.startsWith("Hyder"));
console.log("EndsWith Khan:", str.trim().endsWith("Khan")); // trim kiya whitespace remove karne k liye

// 10. Trim
console.log("Trim:", str.trim());

// 11. Concat
console.log("Concat:", str.concat(" is my friend"));

// 12. Substring / Substr
console.log("Substring (0,5):", str.substring(0, 5));
console.log("Substr (0,5):", str.substr(0, 5));

// 13. Search
console.log("Search Ali:", str.search("Ali"));

// 14. Match (Regex)
console.log("Match 'a':", str.match(/a/gi));

// 15. Repeat
console.log("Repeat 2 times:", str.repeat(2));

// 16. PadStart / PadEnd
console.log("PadStart:", str.trim().padStart(25, "*"));
console.log("PadEnd:", str.trim().padEnd(25, "*"));

// 17. Regex Replace (all spaces to _)
console.log("Replace spaces:", str.replace(/ /g, "_"));

// 18. Unicode from CharCodes
console.log("FromCharCode:", String.fromCharCode(65, 115, 105, 102)); // Asif