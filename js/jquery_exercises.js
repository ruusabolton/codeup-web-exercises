$(document).ready(function() {

    $('h1').click(function (e) {
        $(this).css('background-color', 'red');
    });

    $('p').dblclick(function (e) {
        $(this).css('font-size', '18px');
    });

    // $('li').hover(function() {
    //
    //     $(this).css('color', 'green');
    //
    // });
    //
    // $(this).css('color', '');


    $('.unselected').hover(function(){
        $(this).addClass('red');
    }).mouseout(function(){
        $(this).removeClass('red');
    });

});