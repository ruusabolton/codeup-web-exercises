$(document).ready(function() {

// keycodes of allowed keys
var legitKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    13: 'enter'
};

// accepted winning sequence
var stepCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a','enter'];

// a variable to remember the 'position' the user has reached so far.
var stepCodePosition = 0;

// adding event listener based on key pressed
document.addEventListener('keydown', function(e) {
    // check if key is an allowed key
    var key = legitKeys[event.keyCode];
    // what is the index position of key pressed (in the sequence)
    var requiredKey = stepCode[stepCodePosition];

    // if key is allowed key ; is it in the right position of the sequence?
    if (key == requiredKey) {

        // if True, move on to next pressed key
        stepCodePosition++;
        $("clm1").css("display", "block")

        // if the last key is reached, trigger successPopup function
        if (stepCodePosition == stepCode.length) {
            successPopup();
            stepCodePosition = 0;//and reset for next iteration
        }

       //If key is not allowed or out of sequence, reset to 0
        }

    else {
        stepCodePosition = 0;
        //On screen print alert of Failure
        $(".statusAlert").html("WRONG!!");
        $(".statusAlert, #startOverbtn").css("display", "block");

        $("#startOverbtn").click(function() {
            $(".statusAlert, #startOverbtn").hide(); //will hide status & button
        });

    }
});



function successPopup() {

    alert("YOU DID IT ....You have added 30 lives!");
    document.location = 'konami2.html';


}




});


