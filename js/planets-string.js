(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    //
    // // /**
    // //  * TODO:
    // //  * Convert planetsString to an array, and save it in a variable named
    // //  * planetsArray.
    // //  * console.log planetsArray to check your work
    // //  */
     planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
    //  */

    console.log(planetsString);
    var newString = planetsArray.join("<br>");
    console.log(newString);
    document.write(newString);//will send the array to the HTML and format it with breaks;



     /* BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

     var planetsHTML = "<ul><li>";
     planetsHTML += planetsArray.join("</li><li>");
     planetsHTML +="</li></ul>";
    console.log(planetsHTML); //will print to console but not correctly formatted.
     document.body.innerHTML = planetsHTML; //will print to HTML

})();
