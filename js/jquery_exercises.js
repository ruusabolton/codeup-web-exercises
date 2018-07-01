$(document).ready(function() {

    $('h1').click(function (e) {
        $(this).css('background-color', 'red');
    });


//'this' will only affect the one one paragraph
    //on which you doubleclicked. if you want to affect all the paragraphs, replace 'this'
    //'p'.
    $('p').dblclick(function (e) {
        $('p').css('font-size', '18px');
    });

//will highlight individual li when hovering

    // $('.unselected').hover(function(){
    //     $(this).addClass('red');
    // }).mouseout(function(){
    //     $(this).removeClass('red');
    // });

 //diff approach: function within a function

     $('li').hover(function() {
         $('li').css('color', 'red');
     }, function(){
         $('li').css('color', 'black');

     });


    $('#main-header').click(function(){
    var currentColor = $(this).css('background-color');
    console.log(currentColor);

    if (currentColor == 'rgb(0, 255,255)'){
        $(this).css('background-color', 'white');}
        else {
            $(this).css('background-color', 'blue');
            }
        });








});