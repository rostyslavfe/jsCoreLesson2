//Завдання №1

// let a = prompt('Write Some text');
// let b = 0;
// for(let i = 0; i<a.length; i++){
//     if(a.charAt(i) === ' '){
//         b++;
//     }
// };
// console.log(`Number of 'spaces' = ${b}`);

//Завдання №2

// let email = prompt('Write you email');
// let doggy = '@';
// let newEmail = email.trim();
// if(newEmail.indexOf(doggy) === -1){
//     newEmail = false;
// };
// for(let i = 1; i<newEmail.length; i++){
//     if(newEmail.charAt(i) == doggy){
//         newEmail = true;
//     }
//     else if(newEmail.indexOf(doggy) === 0){
//         newEmail = false;
//     }
//     else if(newEmail.lastIndexOf(doggy) === newEmail.length-1){
//         newEmail = false;
//     }
// };
// if(newEmail === false){
//     alert('Get out of here')
// }
// else if(newEmail === true){
//     alert('Welcome Sir')
// };

//Завдання №3

let message = prompt('Write a html message');
let someNewMessage = message.toLowerCase();
let start = 0;
let find = 0;
for(let i=1; i<someNewMessage.length; i++){
    let position = someNewMessage.indexOf('html', start);
    start += position+1;
    if(position===-1){break};
    find++;
};
console.log(`Count of 'HTML' words = ${find}`)

//Завдання №4

// let url = prompt('Write an URL address');
// let newUrl;
// if(url.slice(0,8) === 'https://'){
//     newUrl = url.slice(8, -1) 
// }
// else if(url.slice(0,7) === 'http://'){
//     newUrl = url.slice(7, -1) 
// }
// console.log(newUrl)