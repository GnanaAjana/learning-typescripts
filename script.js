// typescript learning:
// 1. compile running file ->  tsc script.ts
// above command generate script.js file with plain javascript which is browser support
var character = 'ajana divya';
console.log('character: ', character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log('inside inputs: ', input);
});
// 2. basic types
// intially declared types cannot be changed in run time. It shows error
var character_one = 'ajana';
// only string can be accepted. If assign like below it shows error message
// character_one = 30;
character_one = 'divya';
var age = 32;
// only number can be accepted. If assign like below it shows error message
// age = 'test';
age = 33;
var isMarried = false;
// only bool can be accepted. If assign like below it shows error message
// isMarried = 'test';
isMarried = true;
// In function parameter's type can be defined, once defined compiler allows only declared type,
// if we pass any other type, compiler wont get compiled. It throws error.
var printName = function (name) {
    console.log('passed name is - ', name);
};
printName('ajana');
// if we pass number, compiler shows error
// printName(8);
// it makes code clean
