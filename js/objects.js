(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
        firstName: "Rick",
        lastName: "Sanchez",

        /**
         * TODO:
         * Add a sayHello method to the person object that returns a greeting using
         * the firstName and lastName properties.
         * console.log the returned message to check your work
         *
         * Example
         * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
         */
        sayHello: function(){
            return "Hello from " + person.firstName + " " + person.lastName + ".";
                            }
        };
console.log(person.sayHello());
person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ]
    //if function was not anonymous, you would have t declare the funciton name before creating the function.

    shoppers.forEach(function (shopper){ //anonymous function with no function name
      //console.log(shopper.name); testing whether names are being sent to browser; use function name to call on object's property.

        if (shopper.amount > 200){
            //if greater than 200, giver 12% discount
            var result = shopper.name + " would have paid $" + shopper.amount.toFixed(2) + ". We applied 12% discount, which is $" + (shopper.amount.toFixed(2) * 0.12) + " bringing the payable amount to $" + (shopper.amount.toFixed(2) * 0.88) + ".";
            console.log(result);
        }
        else { console.log(shopper.name + ", you did not spend enough money, so you do not get a discount.")}
    } ) ;

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [   {title: 'The Salmon of Doubt' , author: {firstName: 'Douglas', lastName: 'Adams'}},
                    {title: 'Walkaway' , author: {firstName: 'Cory', lastName: 'Doctorow'}},
                    {title: 'A Brief History of Time' , author: {firstName: 'Stephen', lastName: 'Hawking'}},
                ]


    //console.log(books); test that array is done right;


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (var i = 0; i <books.length; i++){
        console.log("Book #" + (i+1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " "+ books[i].author.lasestName);
        console.log("---");//dividing book info.
        console.log("...");

    }

    //Other possible method for adding books;

    books.forEach(function(addedBook, i){
//function callback has 3 parameters (element index, array). addedBook is the element, i = index;
// No need to define i. You can omit any parameter that you won't use. In casu, we are using only
//element and index.


        console.log("Book #" + (i+1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " "+ books[i].author.lasestName);
        console.log("---");//dividing book info.
        console.log("...");

    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
