'use strict'

console.log("Loading js file");
// get the butotn element from the DOM
let button = document.getElementById("inputButton");

//attach the function to the 'click' event.
// so when the button is click, the function get called
button.addEventListener('click', function(){
  console.log("The button got clicked");
// get the input element from the DOM
  let inputBox = document.getElementById("inputBox")
  // read the actural input from the input element
  let input = inputBox.value;
// console log the input, just to check the debug
  console.log("The user entered", input);

  // call the function to do the translation
let pigWord = piglatin(input);
// grab the span that hold the translation from the dom
let span = document.getElementById("translation");
span.innerText = pigWord;

})


let piglatin = function(word) {
  let cleanWord = word.trim().toLowerCase();

  let translation = "";

  let smallestNonNegative = (num1,num2) => {

  if(num1 < 0) {
    return num2
  }

  if(num2 < 0) {
    return num1;
  }

  if(num1 < num2) {
    return num1;
  } else {
    return num2
  }
}


let indexOfFirstVowel = (word) =>{
  let vowelIndex = -1;

  const aIndex = word.indexOf("a");
  const eIndex = word.indexOf("e");
  const iIndex = word.indexOf("i");
  const oIndex = word.indexOf("o");
  const uIndex = word.indexOf("u");

  vowelIndex = smallestNonNegative(vowelIndex, aIndex);
  vowelIndex = smallestNonNegative(vowelIndex, eIndex);
  vowelIndex = smallestNonNegative(vowelIndex, iIndex);
  vowelIndex = smallestNonNegative(vowelIndex, oIndex);
  vowelIndex = smallestNonNegative(vowelIndex, uIndex);

  return vowelIndex;
}

let vowel = indexOfFirstVowel(cleanWord);

if(vowel == 0) {
  translation = cleanWord + "yay";
  return translation;
} else {
  translation = cleanWord.substring(vowel) + cleanWord.substring(0,vowel) + "ay";
  return translation;
}
}
