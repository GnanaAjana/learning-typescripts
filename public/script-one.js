"use strict";
// 5. Explict types:
// previously we declare and assign value and sets its type.
// we can explictly specify its type like below
var newCharacter;
var newAge;
var newIsMarried;
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
var ninjas = [];
ninjas.push('test');
// doesn't allow below code
// ninjas.push(22);
// union types
// it allows to declare type more than type;
var newMixed = [];
newMixed.push('aha');
newMixed.push('test');
// doesn't allow below code
// newMixed.push(true);
console.log('newMixed:', newMixed);
var uid;
uid = '12';
uid = 12;
// doesn't allow below code
// uid = true;
// objects
// we can explicitly declare object. It allow any types inside objects
var ninjaOne;
ninjaOne = {
    name: 'ajana',
    age: 32,
    isMarried: true
};
// below one also allowed because array is also object.
ninjaOne = [];
// if we need specific type. can be declare its type
var ninjaTwo;
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
var ageOne = 32;
ageOne = 32;
console.log('ageOne', ageOne);
ageOne = 'aj';
console.log('ageOne', ageOne);
ageOne = {
    name: 'ajana'
};
console.log('ageOne', ageOne);
// this declaration is similar to javascript
var mixedOne = [];
mixedOne.push(2);
mixedOne.push('ajana');
mixedOne.push(true);
console.log('mixedOne', mixedOne);
var ninjasOne;
ninjasOne = {
    name: 'ajana',
    age: 23
};
console.log('ninjasOne', ninjasOne);
ninjasOne = {
    name: 23,
    age: 'ajana'
};
console.log('ninjasOne', ninjasOne);
// mostly dont use this, unless it id needed.
