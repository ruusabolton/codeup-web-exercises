(function() {
    "use strict";

    // create a circle object
    //START OF OBJECT
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            return (Math.PI * Math.pow(this.radius, 2));// TO TEST: console.log(circle.getArea()) OUTSIDE of the object!!
             // TODO: return the proper value //I combined the 2 instructions.
                            },
        logInfo: function (doRounding) {
           this.getArea(); //calling previous function outside itself
           // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding){

                var res=Math.round(this.getArea())
            } //PURPOSE IS TO PRINT A ROUNDED NUMBER AND AN UN-ROUNDED NUMBER.
            else{
                res=this.getArea();
            }
//OR TERNARY OPERATOR:
// ?var res = (doRounding) ? Math.round(this.getArea()) : this.getArea();
            console.log("Area of a circle with radius of " + this.radius + " is "  +  res); //will print rounded values.
                                        }
                }; //END OF OBJECT

    // log info about the circle
    circle.logInfo(false);//this should pull info from function, if not rounded.
    circle.logInfo(true);//when rounded, print the rounded figure.

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    circle.logInfo(false);//when radius is changed to 5, function will adjust the calculations and do the rounding or not.
    circle.logInfo(true);




})();
