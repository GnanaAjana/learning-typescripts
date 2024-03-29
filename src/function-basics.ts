// 8: function bascics

// declare a variable using function, later greet allows only function
// and also it did't return anything. so its by default void return(that is return anything)
let greet = () => {
  console.log('hello!');
};

// below code will throw error, bcoz greet is delared with greet function d
// greet = 'test';

// or we can declare like below, which also function type
let testGreet: Function

// c -> can be option, we may or mayn't pass value. and it is either string or number
let add = (a: number, b: number, c?: number | string ) => {
  console.log(`add result ${a} and ${b} is`, a + b);
  console.log('c value is ', c);
};

// if we did't initiate, c-> will be logged as undefined
add(5, 7);

add(13, 7, 10);

// we can declare variable as number or string.
// we can initialise as 10, if we did't pass value it is consider as 10
// and also multiply return type as void. Here void is called as undefined return
let multiply  = (a: number, b: number, c: number | string = 10) => {
  console.log(`multiply result ${a} and ${b} is`, a * b);
  console.log('c value is ', c);
};
multiply(5,7);
multiply(5,7, 20);

// we can also specify function void return type like below
let multiplyNew  = (a: number, b: number, c: number | string = 10): void => {
  console.log(`multiply new result ${a} and ${b} is`, a * b);
  console.log('c new value is ', c);
};

let minus  = (a: number, b: number, c: number | string = 10) => {
  return a - b;
};

// now result value is initialised as number, minus return type is number
let result = minus(7, 5);
console.log('result:', result);

// mow below code throws error bcoz result is set with number return type
// result = 'test';

// we can explicity specify return type like below.
// In very big functionality we can explicitly say like return type
let divide  = (a: number, b: number, c: number | string = 10): number => {
  return a / b;
};

let divideResult = divide(25, 5);
console.log('divide result:', result);
