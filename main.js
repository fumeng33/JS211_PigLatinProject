'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {
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

//returns the part of the string between the start and end indexes, or to the end of the string//
//we have a method that can be used to split the word, at a index//

//write a function that will take in a single word (as a string)
//and return the piglatin translation of the word

/**
* Rules:
* if the word starts with a vowel, add ~yay to the end
* example : egg -> eggyay, eplhant -> elephantyay

* if the word has a vowel, then split the word into 2 parts at the vowel
* then swap the 2 parts, then concat (add) ~ay to the end
* example: fox -> f + ox -> oxf -> oxfay
* conditional -> c + onditional -> onditionalc -> onditionalcay
*
* if the word has no vowel, then add -ay to the end
* tsk -> tskay
* pftt -> pfttay
*/

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}


