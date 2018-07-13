/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
// var name = 'your_name_here';
// var email = '';
// var languages = [];

const name = 'ruusa';
const email = 'ruusa@codeup.com';
const languages = ['html', 'css', 'javascript'];

console.log(name,email, languages); //will print ruusa, ..@codeup.com & langs
// name = 'ruusa'; will not allow you to re-const.
////////////////////////////////////////////////////////////


// TODO: rewrite the object literal using object property shorthand
// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

users.push ({name, email, languages});
console.log(users); //to test whether name,email+lang was added to users array
//////////////////////////////////////////////////////////////////////////

// TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//     return emails.push(user.email);
// });
// users.forEach(function(user) {
//     return names.push(user.name);
// });

users.forEach(user => {
    return emails.push(user.email);
});

users.forEach(user => {
    return names.push(user.name);
});

console.log(emails); //will list all array objects' emails including new addition
console.log(names);//will list all array objects' names including new addition
///////////////////////////////////////////////////////////////////////

// TODO: replace `var` with `let` in the following declaration
// var developers = [];
let developers = [];

users.forEach(function(user) {
// TODO: rewrite the code below to use object destructuring assignment
//       note that you can also use destructuring assignment in the function
//       parameter definition

// const name = user.name;
// const email = user.email;
// const languages = user.languages;

    const {name, email, languages} = user; //arrangement of objs  in array will determines the order of print even if you declare const in diff order

// TODO: rewrite the assignment below to use template strings
// developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

    developers.push(`${name} 's email is ${email} ${name} knows ${languages.join(', ')}`);
});

console.log(developers);//will print each array object inserted in above string
////////////////////////////////////////////


// TODO: Use `let` for the following variable
// var list = '<ul>';
let list = '<ul>';


// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
// TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
for (developer of developers){
    list += `<li>${developer}</li>`;
    document.getElementById('printy').innerHTML= list;//print list elements to doc div with id #printy(may need to create it if no HTML doc)
}
console.log(developers);//print <ul><li> elements with array objects as list elements


list += '</ul>';//means list ends with </ul>

console.log(list);
