function processString(){

let text = document.getElementById("sentence").value;

/* Anonymous function for reversing string */

let reverseString = function(str){
return str.split("").reverse().join("");
};

/* Arrow function for counting vowels */

let countVowels = (str) => {
let vowels = "aeiouAEIOU";
let count = 0;

for(let char of str){
if(vowels.includes(char)){
count++;
}
}

return count;
};

/* Anonymous function for longest word */

let longestWord = function(str){

let words = str.split(" ");

let longest = "";

for(let word of words){

if(word.length > longest.length){
longest = word;
}

}

return longest;

};

/* Uppercase conversion */

let upper = text.toUpperCase();

/* Display results */

document.getElementById("reverse").innerText =
"Reverse String: " + reverseString(text);

document.getElementById("vowels").innerText =
"Vowel Count: " + countVowels(text);

document.getElementById("longest").innerText =
"Longest Word: " + longestWord(text);

document.getElementById("uppercase").innerText =
"Uppercase: " + upper;

}