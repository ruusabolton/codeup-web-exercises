"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

console.log(users);
///////////////////////////////////////////////////////////////////////////////////

//TO-DO
//1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//condition: more than 2 or equal to 3
//return array with users' langs

const result = users.filter(user => user.languages.length > 2);

console.log('three languages',result); //will return users' info that have 3 langs
///////////////////////////////////////////////////////////////////////////////////

//TO-DO
//Use .map to create an array of strings where each element is a user's email address


let emails = users.map(user => user.email );
console.log(emails); // return just emails of eah user
///////////////////////////////////////////////////////////////////////////////////

//TO-DO
// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects
// that represent each user

//create empty array; ID is the accumulation, user is the array with the users info

const newArr = users.reduce((accumulation, user) => {
    accumulation [user.id]= user; //collect in an array, user id and rest of user info
    return accumulation //will return each array
}, {});
console.log(newArr); //will print one array with nested arrays
