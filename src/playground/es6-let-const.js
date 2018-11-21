var nameVar = 'Sikharin';
var nameVar = 'John';

console.log('nameVar', nameVar);


let nameLet = 'Juergen';
nameLet = 'Weinert';

console.log('namelet',nameLet);

const nameConst = 'Wandee';
//nameConst = 'Wande'; Can't reassign
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Schon';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping 

const fullName = 'Sikharin Wande';
let firstName;


if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);