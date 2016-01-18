// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);

"use strict";

var longText = 'one two three four five';
var longTextArray = longText.split(' ');
var newlongText = longTextArray.join(" ");
var numWords = 3;
var longTextshort = longTextArray.splice(0,numWords);
var myfunction = function(truncateWords){
    console.log(longText[truncateWords]);
    console.log(longTextArray);
    console.log(newlongText);
    console.log(longText);
    console.log(longTextshort + '...');

};

myfunction();
// splits the string into individual arrays for counting.
var CountingWords = longText.split(' ');
//used to return entire array of words.
var countedWords = CountingWords.splice(0,5);
var charfunction = function(truncateChar){
    var charText = 'hello world';
	//truncates by characters.
    alert(charText.substring(3));
	//outputs the number of splits (number of words)
	//from CountingWords which displays how 
	//many words are in the string.
    console.log(countedWords.length);
	//prints the original number entered into numWords variable. 
    console.log(numWords);
};

charfunction();