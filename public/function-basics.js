"use strict";
// 8: function bascics
// declare a variable using function, later greet allows only function
// and also it did't return anything. so its by default void return(that is return anything)
var greet = function () {
    console.log('hello!');
};
// below code will throw error, bcoz greet is delared with greet function d
// greet = 'test';
// or we can declare like below, which also function type
var testGreet;
// c -> can be option, we may or mayn't pass value. and it is either string or number
var add = function (a, b, c) {
    console.log("add result ".concat(a, " and ").concat(b, " is"), a + b);
    console.log('c value is ', c);
};
// if we did't initiate, c-> will be logged as undefined
add(5, 7);
add(13, 7, 10);
// we can declare variable as number or string.
// we can initialise as 10, if we did't pass value it is consider as 10
// and also multiply return type as void. Here void is called as undefined return
var multiply = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log("multiply result ".concat(a, " and ").concat(b, " is"), a * b);
    console.log('c value is ', c);
};
multiply(5, 7);
multiply(5, 7, 20);
// we can also specify function void return type like below
var multiplyNew = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log("multiply new result ".concat(a, " and ").concat(b, " is"), a * b);
    console.log('c new value is ', c);
};
var minus = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return a - b;
};
// now result value is initialised as number, minus return type is number
var result = minus(7, 5);
console.log('result:', result);
// mow below code throws error bcoz result is set with number return type
// result = 'test';
// we can explicity specify return type like below.
// In very big functionality we can explicitly say like return type
var divide = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return a / b;
};
var divideResult = divide(25, 5);
console.log('divide result:', result);
// const logDetails = (uid: String | Number, item: String) => {
//  Instead of above code , we can declare type and resuse it in different function.
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greets = function (user) {
    console.log("".concat(user.name, " says hello"));
};
var greetsAgain = function (user) {
    console.log("".concat(user.name, " says hello"));
};
// #function Signature
// code below is function declaration
// let greetTest: Function;
// above one is takes empty parameter and returns void like this () => void
// lets see function signature examples
// #example 1
var greetTest;
// above one specifies 'greetTest' takes 2 params and returns nothing.
// like only need to call, if we miss anything will throw error
// instead a , b we can specify any name, bcoz its just definition
greetTest = function (name, greetings) {
    console.log("".concat(name, " says ").concat(greetings));
};
// if we changes any of above params will throw error
// #example 2
var calc;
// if we miss else part throws error bcoz it must return number
// or we can also specify like comment also. Anyhow it gonna return number
// calc = (numOne: number, numTwo: number, action: string): number => {
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// #example 3
// we can also define obj as params and return nothing
var logDetailsFn;
logDetailsFn = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old."));
};