// 5. Explict types:

// previously we declare and assign value and sets its type.
// we can explictly specify its type like below

let newCharacter: string;
let newAge: number;
let newIsMarried: boolean;

newCharacter = 'ajana';
newAge = 32;
newIsMarried = true;
//doesn't allow below codes
// newCharacter = 43;
// newAge = '';
// newIsMarried = 33;

// arrays
// we can specify araay of types. and its better to declare it as array while initialisation.
// else it wont allow to array functionalities
let ninjas: string[] = [];
ninjas.push('test');

// doesn't allow below code
// ninjas.push(22);

// union types
// it allows to declare type more than type;
let newMixed: (string|number)[] = [];
newMixed.push('aha');
newMixed.push('test');

// doesn't allow below code
// newMixed.push(true);
console.log('newMixed:', newMixed);

let uid: string|number;
uid = '12';
uid = 12;

// doesn't allow below code
// uid = true;


// objects
// we can explicitly declare object. It allow any types inside objects
let ninjaOne: object;

ninjaOne = {
  name: 'ajana',
  age: 32,
  isMarried: true
};

// below one also allowed because array is also object.
ninjaOne = [];

// if we need specific type. can be declare its type
let ninjaTwo: {
  name: string,
  age: number,
  isMarried: boolean
};

// below will thrw error bcoz it is empty object. need to above type values
// ninjaTwo = {};

ninjaTwo = {
  name: 'divys',
  age: 32,
  isMarried: false,
  // skills: 'dd' // it throws as it is not declared
};

// 6: Dynamic (any) types
//any declaration -  this variable can allow any type eg: bool/sting/number while declaring

let ageOne: any = 32;
ageOne = 32;
console.log('ageOne', ageOne);  
ageOne = 'aj';
console.log('ageOne', ageOne);  
ageOne = {
  name: 'ajana'
};
console.log('ageOne', ageOne);

// this declaration is similar to javascript
let mixedOne: any[] = [];
mixedOne.push(2);
mixedOne.push('ajana');
mixedOne.push(true);
console.log('mixedOne', mixedOne);

let ninjasOne: { name: any, age: any};

ninjasOne = {
  name: 'ajana',
  age: 23
};
console.log('ninjasOne',  ninjasOne);

ninjasOne = {
  name: 23,
  age: 'ajana'
};
console.log('ninjasOne',  ninjasOne);
// mostly dont use this, unless it id needed.






