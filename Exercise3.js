// 1. Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10
console.log("Answer 1 : ");
for (let i = 1; i <= 10; i++) {
    console.log(`9 x ${i}`)
  }

// 2. Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome
console.log("Answer 2 : ");
let word = 'madam'
let reversedStr = '';

for (let i = word.length -1; i >= 0; i--) {
    reversedStr += word[i];
}
if (word === reversedStr) {
    console.log('Palindrome Word')
} else {
    console.log('Not Palindrome Word')
}

// 3. Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”
console.log("Answer 3 : ");
let cm = 100000
let km = cm / 100000
console.log(km + " km");

// 4. Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
console.log("Answer 4 : ");
let idr = 1000;
let idr2 = idr.toLocaleString("id-ID", {style:"currency", currency:"IDR"});
console.log(idr2)

// 5. Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
console.log("Answer 5 : ");
let text = "Hello World";
let splitted = (text.slice(1, 4));
let remain = (text.slice(0, 1) + text.slice(4));
console.log(splitted)
console.log(remain)

// 6. Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World
console.log("Answer 6 : ");
let char = "hello world";
let uppercased = char.slice(0, 0) + char[0].toUpperCase() + char.slice(1, 6) + char[6].toUpperCase() + char.slice(7);
console.log(uppercased);

// 7. Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
console.log("Answer 7 : ");
let sentence = 'The QuiCk BrOwN Fox';
let swappedSentence = sentence.split('')
    .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
    .join('');

console.log(swappedSentence);


// 8. Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42
console.log("Answer 8 : ");
let no1 = 4
let no2 = 27
if (no1 > no2) {
    console.log(`${no1} is bigger than ${no2}`)
} else {
    console.log(`${no1} is smaller than ${no2}`)
}

// 9. Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
console.log("Answer 9 : ");
let num1 = 42
let num2 = 27
let num3 = 18

if (num1 > num2) {
  [num1, num2] = [num2, num1];
}
if (num1 > num3) {
  [num1, num3] = [num3, num1];
}
if (num2 > num3) {
  [num2, num3] = [num3, num2];
}

console.log(num1, num2, num3);

// 10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// Example : “hello” → 1
console.log("Answer 10 : ");
let varchar = 'hello'
if (typeof varchar == 'string') {
    console.log(1)
} else if (typeof varchar == 'number') {
    console.log(2)
} else {
    console.log(3)
}

// 11. Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
console.log("Answer 11 : ");
let inputString = 'An apple a day keeps the doctor away';

let resultString = inputString.replace(/a/gi, '*');

console.log(resultString);
