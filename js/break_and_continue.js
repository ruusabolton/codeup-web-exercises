/* Create a file named break_and_continue.js in the js directory.
Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50,
except for the number the user entered.
// */



//assumptions: user will enter a number;

while (true){var input = prompt('Enter ODD number between 1 & 50');
    if (input %2!== 0 && input <=50 && input >= 1){
        break;}
    console.log(input); }


    console.log("Number to skip is: " +input);
for (var i = 1; i <=50; i+= 1){

    if (i !== parseInt(input)){console.log("Thi is an odd number " + i);}

    else{console.log('Skipped Number ' + input)}

    if (i % 2 ===0){ continue;}

}