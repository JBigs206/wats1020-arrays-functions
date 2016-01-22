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
/*var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);*/

//I commented this stretch goal of "use strict" out because it gives me the red "x" saying the syntax is wrong in codeanywhere.
//This "use strict" does work in the console though when I run the project. I just don't want it to cause an error and have the project not run.
//"use strict";

//This was my original string I used in my first submition.
//var longText = 'one two three four five';

//splits the words in the string into an array.
var OriginalTextArray = OriginalText.split(' ');
//joins the words in the split without the separation in .split
var newOriginalText = OriginalTextArray.join(" ");
// variable to know where to stop the string
var numWords = 3;
//stops the string before the 3rd word. 0 being "There" and 2 being "two"
var OriginalTextshort = OriginalTextArray.splice(0,numWords);
var myfunction = function(truncateWords){
    console.log(OriginalText[truncateWords]);
    console.log(OriginalTextArray); //prints the string to an array
    console.log(newOriginalText); //removes separation in the array to make back into string
    console.log(OriginalText); //prints origianl string 
    console.log(OriginalTextshort + '...'); //adds an ellipsis after the truncated string
	console.log("Number of words in the array: " + OriginalTextArray.length); //counts and prints number of words in the array

};

myfunction();
// splits the string into individual arrays for counting.
var CountingWords = longText.split(' ');
//used to return entire array of words.
var countedWords = CountingWords.splice(0,15);
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