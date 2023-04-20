//8. Remove the spaces found in a string: Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then 
//return it with all spaces removed. Think about if you were tasked with cleaning up customer data at your job. You could scale this function to clean up specific 
//fields of data, such as zip codes.
    
let str = "Hello World";
let newStr = str.replace(/\s/g, ""); // Using Replace method and \s = one space and \s+ means "one or more spaces". using the /g flag (replace all occurrences) and replacing with the empty string, your two expressions have the same effect.
console.log(newStr); //Output "HellWorld"

//9. Return a Boolean if a number is divisible by 10: Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number 
//should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.
const input = prompt("Pick a Number for the Triple T's TheTrueTens!!");
const result = theTrueTens(input);
function theTrueTens(num){ 
    if (num % 10 === 0) {        //The way i see if else is like commas you use if/commas as your list goes on but on the last one you use (, and ....) 
        return true;             //to close similar to else to close out if else statements  
    } else {
        return false;
    }
}
console.log(result); //Output would be true if divisible by 10 and false if not.

//10. Return the number of vowels in a string: Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features 
//of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning 
//the number of characters.

function countVowels(str2) {                                        
    const vowels = str.match(/[aeiou]/gi);           //Using match method returns an array of all matches found in the string. The i flag makes the match case-insensitive
    return vowels ? vowels.length : 0;               //Using ? Ternary operator is another example of if the vowels is true  it'll count Vowels(aeiou) 
}                                                            

const str2 = "The World Is Yours";
const numVowels = countVowels(str2); 
console.log(numVowels)  // Output 5