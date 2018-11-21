// const square = function (x) {
//     return x * x;
// };

// function square(x){
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(square(8));

// console.log(squareArrow(8));


// Challenge - Use arrow functions
// GetFirstName('Mike Smith') -> "Mike"
// Create reqular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) =>{
//     if (fullName) {
//         const firstName = fullName.split(' ')[0];
//         return firstName;
//     }
// };

const getFirstName = (fullName) => fullName && fullName.split(' ')[0] ;


console.log(getFirstName('Sikharin Wandee'));