"use strict"
//
var result = 1; // starting point; 1*2 = 2, 2*2=4, multiply the prev result with 2.

while (result < 65536){
    result = result * 2;
    console.log('result is ', result);
}
// //An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100 representing
// the amount of cones to sell. Your code should generate numbers between 1 and 5,
// simulating the amount of cones being bought by her clients. Use a do-while loop to
// log to the console the amount of cones sold to each person. This is how you get the random numbers.
//
//
//This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;

//While I have enough cones, generate a number, and deduct how many cones I have left to see
// whether I have enought cones.

do {
    console.log("I have this many cones: " + allCones);
    var conesToSell = Math.floor(Math.random( )* 5) + 1;
    if (conesToSell <= allCones){
        allCones = allCones - conesToSell;
        console.log(conesToSell + ' cones sold');
    } else if (allCones === 0){
        console.log("Yay! I sold them all.")
    }
    else {
        console.log('Cannot sell you  ' +conesToSell+ ' I only have ' + allCones )
    }

} while(allCones !== 0);