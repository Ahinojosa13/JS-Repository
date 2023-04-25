var numbers = [4, -2, 25, -8, 2023, -21];  //Created an array of numbers to filter through 
console.log(numbers);
numbers = numbers.filter(function(numbers){   //Filter method allows us to filter through an array - iterating over the existing values, and returning only the ones that fit certain criteria, into a new array.
    return numbers > -1           //So on this line if X is greater than -1 it will return the positive numbers
});
console.log(numbers);