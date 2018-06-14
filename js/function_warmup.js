( function(){
    "use strict";

   function makeUsername (firstName, age){
       var firstName;
       var age;
       return firstName.length + firstName.charAt(0).toLowerCase() +  age;
   }


   console.log(makeUsername('Ruusa', 45));

}
)();