console.log('Hello from external Javascript');

alert("Welcome to my Website!");

var userInput = prompt('What is your favorite color?');
alert('Great, ' + userInput + ' is my favorite color too!!');

var rentalPerDayDollars;

var littleMermaidDays;
littleMermaidDays = 3;
var brotherBearDays;
brotherBearDays = 5;
var herculesDays = 1;

rentalPerDayDollars = 3;
var totalRentalCost;

totalRentalCost =
    (parseInt(littleMermaidDays)
        + parseInt(brotherBearDays)
        + parseInt(herculesDays))
    * parseInt(rentalPerDayDollars);

userInput = prompt('How much will you pay for all those movies?');
if (userInput == 27){
    alert('You\'re right!!');}
else {
    alert('You guessed wrong; $27 is what you will pay.');}

//alert('You are right, ' + userInput + ' is your total price!!');


var googleHourlyRateDollars = 400;
var amazonHourlyRateDollars = 380;
var facebookHourlyRateDollars = 350;



var googleHours;
var amazonHours;
var facebookHours;
var totalPayment;


var userInput1 = prompt('How many hours did you work at Google?');
var userInput2 = prompt('How many hours did you work at Amazon?');
var userInput3 = prompt('How many hours did you work at Facebook?');

googleHours = userInput1
amazonHours = userInput2
facebookHours = userInput3

totalPayment = ((googleHours * googleHourlyRateDollars)
 + (amazonHours * amazonHourlyRateDollars)
 + (facebookHours * facebookHourlyRateDollars));



alert(totalPayment + ' is your total weekly pay');


var StudentInput;





StudentInput = confirm('Do you have another class on Monday at 0800am?');
if (StudentInput){
    alert('We\'re sorry. Try next year.');}
else {
alert('Great, contact your advisor for your next steps!!');}



var numberOfItemsForDiscount;
var numberOfItems; // number
var offerIsNotExpired; // boolean
var isPremiumMember; // boolean
var Buyer;

var productDiscountApplied = isPremiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired);

Buyer = prompt('How many items did you buy');
if (numberOfItems >= 2){
    alert('Great you may qualify for a Discount');}
else { alert('Sorry, no discount for you.');}

Buyer = confirm('I your offer still valid?');
if (offerIsNotExpired) {
    alert('You got a discount');
}
else {
    alert('Sorry, no discount for you.');
}

Buyer = confirm('Are you a Premium member?');
    if (isPremiumMember) {

alert('You got a discount');}
else { alert('Sorry, no discount for you.');}