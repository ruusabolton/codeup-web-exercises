 /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */



// if (confirm("Do you want to enter a number?")){
//     var number = prompt('Enter your number');
//
//     if (!isNaN(number)){
//         if (number % 2 === 0) {
//             alert('number is even');
//             alert(sum = (parseInt(number) + 100));
//             }
//             else {
//             alert('number is odd');
//             alert(sum = (parseInt(number) + 100));
//             }
//         if (number > 0) {
//             alert('Number is positive.');
//             }
//             else {
//             alert('Number is negative.');
//             }
//         }
//
//     else {
//         alert('Please enter a valid number.');
//         }
//
//     }
//
//
// else {
//     alert('Thanks you for playing.');
//     }

    /* REFACTOR WITH FUNCTION */
    //########################################################################## */

// function getNumber (number){
//
//     if (confirm("Do you want to enter a number?")){
//         number = prompt('Enter your number');
//
//         if (!isNaN(number)){
//             if (number % 2 === 0) {
//                 alert('number is even');
//                 alert(sum = (parseInt(number) + 100));
//             }
//             else {
//                 alert('number is odd');
//                 alert(sum = (parseInt(number) + 100));
//             }
//             if (number > 0) {
//                 alert('Number is positive.');
//             }
//             else {
//                 alert('Number is negative.');
//             }
//         }
//
//         else {
//             alert('Please enter a valid number.');
//         }
//
//     }
//
//
//     else {
//         alert('Thanks you for playing.');
//     }
// }
//
// getNumber();


    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)


    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */
function analyzeColor (colors){

    if(colors ==='red'){
        return colors + " is thy blood.";}

    else if (colors === 'orange'){
        return colors + " eaters get Vitamin C.";
    }

    else if (colors === 'yellow'){
        return colors + " is my sunny disposition.";
    }
    else if (colors === 'green'){
        return colors + " is thy grass.";
    }
    else if (colors === 'blue'){
        return colors + " is the sky - a long time ago.";
    }
    else if (colors === 'indigo'){
        return colors + "  like the go-go girls.";
    }

    else if (colors === 'violet'){
        return colors + "s blooms with little water.";
    }
    else {
        return colors + 'is not a valid color.';
    }

}
//
//  console.log(analyzeColor('orange'));
//  console.log(analyzeColor('blue'));
//  console.log(analyzeColor('violet'));
//  console.log(analyzeColor(randomColor));
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
function analyzeColor1 (colors) {
        colors = randomColor;
        var result;
        switch (colors) {

            case  'red':
                result = colors + " is thy blood.";
                break;
            case 'orange':
                result = colors + "  eaters get Vitamin C.";
                break;
            case  'yellow':
                result =   colors + " is my sunny disposition.";
                break;
            case  'green':
                result =   colors + " is thy grass.";
                break;
            case  'blue':
                result =   colors + "  is the sky - a long time ago.";
                break;
            case  'indigo':
                result =    colors + " is like the go-go girls.";
                break;
            case  'violet':
                result =    colors + "s blooms with little water.";
                break;
            default: {
                result =  colors + 'is not a valid color.';
            }
        }
        return result;
    }

console.log(analyzeColor1(randomColor));

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

alert(analyzeColor(prompt('Please enter a color:')));



    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */


function calculateTotal (luckyNumber, totalAmount){

    var lessdiscount;

    switch(luckyNumber) {
        case 5:
            lessdiscount = 0;
            break;

        case 4:
            lessdiscount =  totalAmount * (0.50);break;

        case 3:
            lessdiscount =   totalAmount * (0.65);break;

        case 2:
            lessdiscount =  totalAmount * (0.75);break;

        case 1:
            lessdiscount = totalAmount * (0.90);break;

        case 0:
            lessdiscount = totalAmount;break;

        default:
            lessdiscount = "Lucky number is invalid.";break;
                   }
       return lessdiscount;
    }




    console.log(calculateTotal(1,100));
    console.log(calculateTotal(2,100));
    console.log(calculateTotal(3,100));
    console.log(calculateTotal(4,100));
    console.log(calculateTotal(5,100));


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
//Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
totalAmount = prompt('What is your total bill?');
calculateTotal(luckyNumber, totalAmount);
alert('your lucky number was ' + luckyNumber +' and your total price after discount is ' + calculateTotal(luckyNumber, totalAmount) + '.');
console.log(calculateTotal(luckyNumber, 200));