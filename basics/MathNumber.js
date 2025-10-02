let number = 5;
console.log(number); // print number
console.log(typeof number); // check type of number 
console.log(Number.isInteger(number)); // check number is integer or not
console.log(Number.isNaN(number)); // check number is not a number or not
console.log(Number.isSafeInteger(number)); // check number is safe integer or not
console.log(number.toString()); // convert number to string
console.log(number.toFixed(2)); // format number to 2 decimal places
console.log(Number.parseInt("42")); // parse string to integer
console.log(Number.parseFloat("3.14")); // parse string to float
console.log(Math.round(4.7)); // round to nearest integer
console.log(Math.ceil(4.2)); // round up to next integer
console.log(Math.floor(4.7)); // round down to previous integer
console.log(Math.max(1, 2, 3, 4, 5)); // get maximum value
console.log(Math.min(1, 2, 3, 4, 5)); // get minimum value
console.log(Math.random()); // get random number between 0 and 1
console.log(Math.random() * 100); // get random number between 0 and 100
console.log(Math.sqrt(16)); // get square root
console.log(Math.pow(2, 3)); // calculate power (2^3)
console.log(Math.abs(-10)); // get absolute value
console.log(Math.sin(Math.PI / 2)); // get sine of angle in radians
console.log(Math.cos(0)); // get cosine of angle in radians
console.log(Math.tan(Math.PI / 4)); // get tangent of angle in radians
console.log(Math.log(10)); // get natural logarithm
console.log(Math.exp(2)); // calculate e^2
console.log(Number.EPSILON); // smallest difference between two representable numbers
console.log(Number.MAX_VALUE); // maximum representable number
console.log(Number.MIN_VALUE); // minimum representable number
console.log(Number.POSITIVE_INFINITY); // positive infinity
console.log(Number.NEGATIVE_INFINITY); // negative infinity
console.log(Number.isFinite(100)); // check if number is finite
console.log(Number.isFinite(Infinity)); // check if number is finite
console.log(Number.isFinite(NaN)); // check if number is finite
console.log(Math.hypot(3, 4)); // calculate hypotenuse
console.log(Math.cbrt(27)); // calculate cube root
console.log(Math.clz32(1)); // count leading zeros in 32-bit binary representation
console.log(Math.imul(2, 3)); // perform 32-bit integer multiplication
console.log(Math.fround(1.5)); // round to nearest 32-bit float representation
console.log(Math.trunc(4.7)); // truncate decimal part  // remove decimal part 
console.log(Math.sign(-10)); // get sign of number (-1, 0, 1)
console.log(Math.log10(100)); // get base-10 logarithm
console.log(Math.log2(8)); // get base-2 logarithm
console.log(Math.expm1(1)); // calculate e^x - 1
console.log(Math.sinh(1)); // get hyperbolic sine
console.log(Math.cosh(1)); // get hyperbolic cosine
console.log(Math.tanh(1)); // get hyperbolic tangent
console.log(Math.asin(1)); // get arcsine in radians
console.log(Math.acos(0)); // get arccosine in radians
console.log(Math.atan(1)); // get arctangent in radians
console.log(Math.atan2(1, 1)); // get arctangent of y/x in radians
console.log(Math.log1p(1)); // calculate log(1 + x)
console.log(Math.clamp ? Math.clamp(5, 1, 10) : "Math.clamp not supported"); // clamp value between min and max (if supported)
console.log(Math.fsum ? Math.fsum([1, 2, 3]) : "Math.fsum not supported"); // precise floating-point sum (if supported)
console.log(Math.random() * (50 - 10) + 10); // get random number between 10 and 50
console.log(Math.round((number + Number.EPSILON) * 100) / 100); // round to 2 decimal places with precision fix
console.log(Math.log(100) / Math.LN10); // alternative way to get base-10 logarithm
console.log(Math.log(32) / Math.LN2); // alternative way to get base-2 logarithm
console.log(Math.sinh(0)); // get hyperbolic sine of 0
console.log(Math.cosh(0)); // get hyperbolic cosine of 0
console.log(Math.tanh(0)); // get hyperbolic tangent of 0
console.log(Math.asin(0)); // get arcsine of 0 in radians
console.log(Math.acos(1)); // get arccosine of 1 in radians
console.log(Math.atan(0)); // get arctangent of 0 in radians
console.log(Math.atan2(0, 1)); // get arctangent of 0/1 in radians
console.log(Math.log1p(0)); // calculate log(1 + 0  = 0)
console.log(Math.clz32(16)); // count leading zeros in 32-bit binary representation of 16
console.log(Math.imul(123456, 654321)); // perform 32-bit integer multiplication
console.log(Math.fround(1.337)); // round to nearest 32-bit float representation
console.log(Math.trunc(-4.7)); // truncate decimal part of negative number
console.log(Math.sign(0)); // get sign of 0 (0)
console.log(Math.sign(-0)); // get sign of -0 (-0)
console.log(Math.log10(1000)); // get base-10 logarithm of 1000
console.log(Math.log2(16)); // get base-2 logarithm of 16
console.log(Math.expm1(0)); // calculate e^0 - 1 (0)
console.log(Math.sinh(-1)); // get hyperbolic sine of -1
console.log(Math.cosh(-1)); // get hyperbolic cosine of -1
console.log(Math.tanh(-1)); // get hyperbolic tangent of -1
console.log(Math.asin(-1)); // get arcsine of -1 in radians
console.log(Math.acos(-1)); // get arccosine of -1 in radians
console.log(Math.atan(-1)); // get arctangent of -1 in radians
console.log(Math.atan2(-1, 1)); // get arctangent of -1/1 in radians
console.log(Math.log1p(-0.5)); // calculate log(1 - 0.5)        
console.log(Math.clz32(0)); // count leading zeros in 32-bit binary representation of 0
console.log(Math.imul(0, 123456)); // perform 32-bit integer multiplication with 0
console.log(Math.fround(0)); // round 0 to nearest 32-bit float representation
console.log(Math.trunc(0)); // truncate decimal part of 0
console.log(Math.sign(NaN)); // get sign of NaN (NaN)
console.log(Math.log10(0)); // get base-10 logarithm of 0 (-Infinity)
console.log(Math.log2(0)); // get base-2 logarithm of 0 (-Infinity)
console.log(Math.expm1(-1)); // calculate e^-1 - 1
console.log(Math.sinh(NaN)); // get hyperbolic sine of NaN (NaN)
console.log(Math.cosh(NaN)); // get hyperbolic cosine of NaN (NaN)
console.log(Math.tanh(NaN)); // get hyperbolic tangent of NaN   
console.log(Math.asin(NaN)); // get arcsine of NaN in radians (NaN)
console.log(Math.acos(NaN)); // get arccosine of NaN in radians (NaN)
console.log(Math.atan(NaN)); // get arctangent of NaN in radians (NaN)
console.log(Math.atan2(NaN, 1)); // get arctangent of NaN/1 in radians (NaN)
console.log(Math.log1p(NaN)); // calculate log(1 + NaN) (NaN)
console.log(Math.clz32(NaN)); // count leading zeros in 32-bit binary representation of NaN (32)    
console.log(Math.imul(NaN, 123456)); // perform 32-bit integer multiplication with NaN (0)
console.log(Math.fround(NaN)); // round NaN to nearest 32-bit float representation (NaN)
console.log(Math.trunc(NaN)); // truncate decimal part of NaN (NaN)
console.log(Math.sign(Infinity)); // get sign of Infinity (1)
console.log(Math.sign(-Infinity)); // get sign of -Infinity (-1)
console.log(Math.log10(Infinity)); // get base-10 logarithm of Infinity (Infinity)
console.log(Math.log2(Infinity)); // get base-2 logarithm of Infinity (Infinity)
console.log(Math.expm1(Infinity)); // calculate e^Infinity - 1 (Infinity)
console.log(Math.sinh(Infinity)); // get hyperbolic sine of Infinity (Infinity)
console.log(Math.cosh(Infinity)); // get hyperbolic cosine of Infinity (Infinity)
console.log(Math.tanh(Infinity)); // get hyperbolic tangent of Infinity (1)
console.log(Math.asin(2)); // get arcsine of 2 in radians (NaN)
console.log(Math.acos(2)); // get arccosine of 2 in radians (NaN)
console.log(Math.atan(2)); // get arctangent of 2 in radians    