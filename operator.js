// JAVASCRIPT TYPES

// strings
"this is my site";
'my second name';

// numbers
10;
23;
500;
8.9;

// booleans
true;
false;

// soecials
undefined;
null;
NaN;

// objects
// TYPES

// const user = {
//     names: 'janoh',
//     username: 'janohWeb'
// };

// // Arrays
// const users = ['janoh', 'webdeveloper', 'enterprenue'];
// const luckyNumbers = [1, 3, 5, 6, 9]
// const superUser = [
//     { names: 'janoh' },
//     { job: 'webdeveloper' },
//     { city: 'bonansa' }
// ];
// console.log(superUser[0].names);

// // decclaring Varriables
// var thing = 'first';
// const otherThings = 'ES6'; // Can NOT be reassign
// let newThing = 'third'; // Can  be reassign

// let Varriables;
// Varriables = 'like me';

// TYPE IN JS

// let a = 10,
//     b = 3,
//     c = 7;
// const d = 'john',
//     e = 'janoh',
//     f = 'web';

// // Addition
// console.group('Addition')
// console.log(a + b);
// console.log(a + c);
// console.log(e + ' ' + f);
// console.log(a + d);
// console.groupEnd()
//     // uncaught Assignment
// a++;
// ++a;
// a--;
// --a;
// console.log(a + 1);

// COMPARISON
// const names = prompt('what the fuck is your name');
const userNames = 'janohWeb';

// IF 
// if (names === 'janoh' || names === 'john') {
//     alert("hello");
// } else if (names === 'kelly') {
//     alert('hola')
// } else {
//     console.log("this is not janoh")
// }

// FOR LOOP
// const dogList = document.querySelector('.dog-list');

// const dogs = [
//     { names: 'Jumbo', type: 'German' },
//     { names: 'Bingo', type: 'shepherd' }
// ];

// for (let i = 0; i < dogs.length; i++) {
//     // Grab the dog
//     const dog = dogs[i];
//     const dogData = document.createElement('div');
//     dogData.classList.add('jumbotron', 'text-center')
//     dogData.innerText = `${dog.names} is a ${dog.type} `;
//     dogList.appendChild(dogData);

// }

// WHILE LOOP
// let i = 0;
// while (i < 10) {
//     console.log(`${i} is a number`)

//     i++;
// }

// DO WHILE LOOP
// let i = 0;
// do {
//     console.log(`${i} id`);
// } while (i < )

// FOR OF.... ITERATION
// let(dog of dogs){

// }

// FUNCTION
// function saySomething(message = 'goodbye', whisper = false) {
//     if (whisper) {
//         console.log(`%c${message}`, 'font-size:5px')
//     } else {
//         console.log(message);
//     }
// }

// saySomething('john', true);
// saySomething();

// function square(a) {
//     return a * a;
// }

// console.log(square(3))

// ARROW
// const squared = (a) => {
//     return a * a;
// };
// const otherSquared = squared;

// OBJECT
// const hero = {
//     names: 'Njong paddisco',
//     alias: 'Dong',
//     catchphrase: 'all for God',
//     speak: (jum) => {
//         return 'Attention ' + jum;
//     },
//     attack: (sound) => {
//         return `Punch the bad guys ${sound}`;
//     }
// };

// const toLookFor = 'alias';

// // Access a property
// console.log(hero.names);
// console.log(hero['names']);
// console.log(hero[toLookFor]);

// // accessing the method (function)
// console.log(hero.speak(hero.catchphrase));
// console.log(hero.attack('pooooowwwwwww'))

// DOM

// Grab element from the Dom
// Attach event listener