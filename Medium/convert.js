/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/



function convert(str) {
  //your code
  let splicedStr = parseFloat(str.slice(0, -2));

  if (str.endsWith('C')) {
    splicedStr = (splicedStr * 9 / 5) + 32;
    return(`${Math.round(splicedStr)}°F`)

  } else if (str.endsWith('F')) {
    splicedStr = (splicedStr - 32) * 5 / 9;
    return(`${Math.round(splicedStr)}°C`)

  } else return("Error")
  
}

exports.solution = convert;