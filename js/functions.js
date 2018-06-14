( function(){

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 */




function sayHello (){

    return 'Hello, ' + name +'!';

};
var name = prompt('What\'s your name?');
 /* When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello('fer');
console.log(sayHello(helloMessage));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = 'Ruusa';
name = myName;
console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 */




 /* Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 */

function isTwo(number) {
    return number == 2;
}

console.log(isTwo(6)); //CALLS & DISPLAYS THE FUNCTION IN ACTION!!!
console.log(isTwo(2));
console.log(isTwo(1));

 /* Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

console.log(isTwo(random));

/* TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 */

function calculateTip (tipPercentage, billTotal){

        var tipInValue = tipPercentage / 100;
    return tipInValue * 100;
}

calculateTip();
console.log(calculateTip(prompt('Give me the tip %'), prompt('give me the bill total.')));

/* Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount (originalPrice, discountPercent){

    var applyDiscount = originalPrice * discountPercent;
    return originalPrice - applyDiscount;
}

applyDiscount();
console.log(applyDiscount(prompt('What was your original price?'), prompt('What is your discount percent?')));

}
)();