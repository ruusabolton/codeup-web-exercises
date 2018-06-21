"use strict";
/* 2. Create a function named showMultiplicationTable that accepts a number
and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10) */

function showMultiplicationTable()
{
    var myVar = prompt("A number?", "");
    var myString = "";var i;
    for (i=1; i<=10; i++) {
        myString += i+ " x " +myVar+ " = " +(i*myVar)+ "\n";
    }
    //alert(myString);

    console.log(myString);
}
showMultiplicationTable();

//OR this way below.

var input = prompt('Give us a number, Deary!');
for (var i = 1; i <=10; i++){
    //console.log(i); //by itself will print 10 numbers from 1 to 10
    console.log(input+' x '+i+ ' = '+ (input * i))
}



/* 3. Use a for loop and the code from the previous lessons to generate 10 random numbers
 between 20 and 200 and output to the console whether each number is odd or even. */
// This expression will generate a random number between 20 and 200


// for (var i = 1 ; i <=10; i++){
// //{console.log(i) //to verify it prints 10 times.
//
//  //this will happen during each loop:
    var numb = Math.floor(Math.random() * 200 - 20 +1) + 20; //generate random number |:| 20 & 200
    var result ;
    if (numb % 2 === 0) {
        result = numb +' is even';
    }
    else {
        result = numb +' is odd';
    }
console.log(result); //to verify number is generated.


}


/* 4.Create a for loop that uses console.log to create the output shown below.*/
for(var i=1;i<=9;i++)//primary loop calling for 9 iterations
{
    var a=''; //output will be sent to an empty string
    for(var j=1;j<=i;j++)//inner loop that adds to prev iterations(i) 1, 22, 333
    {var a=a+i;}
    console.log(a);
}

/*5. Create a for loop that uses console.log to create the output shown below.*/

for (var i = 100; i > 1; i = i-5) {
    console.log(i);}

