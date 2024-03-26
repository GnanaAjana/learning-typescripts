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
// 3. Arrays:
// array variable can be declared only one type or mixed types
// if we declare with one type and give any other type, It throws error
// and also cannot type of the variable
var names = ['Ajana', 'Nammalvar'];
//  names.push(8);
// names[0] = 3;
names.push('krithvik');
names[3] = 'Alvar';
// names = 'test';
var ages = [32, 33];
// age.push('test');
// age.push(true);
ages.push(1);
var mixed = ['Ajana', 'Nammalvar', 32, 33];
// now it allows both string and number. It can be allowed at any positions
mixed.push('krithvik');
mixed.push(1);
// mixed.push(true);
// 4. Objects
// if we declare variable as object, only we can able to change key value pair.
// Not able to add new key-value once declared
var details = {
    name: 'Ajana',
    age: 32,
    isMarried: false
};
details.name = 'Nammalvar';
details.age = 33;
// details.isMarried = 'dd';
// details.age = '33';
// it wont allow extra key value pair
// details.skills = 'javascript'
// we can update object with key pair but its type. And also should be same initial object types
details = {
    name: 'Krithvik',
    age: 1,
    isMarried: false,
    // age: 1.4  - cannot accept,
    // skills: ['javscript']
};
// details= [];
