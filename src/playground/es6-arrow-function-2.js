// arguments object - no longer bound with arrow functions

const add =  (a , b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1));

// this keywork - no longer bound

const user = {
    name: 'Sikharin',
    cities: ['Phuket', 'Munich', 'Bangkok'],
    printPlacesLived(){
     return this.cities.map( (city) =>this.name +' has lived in '+ city);

    //    return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+ city);
        // })
    }
};

console.log(user.printPlacesLived());


// Challenge area
// numbers - array of numbers
// multiplyBy - single number
// multiply - return a new array where the number have been mutiplied

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply () {
       return this.numbers.map((number)=> number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());