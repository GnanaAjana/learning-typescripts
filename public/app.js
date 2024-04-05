"use strict";
// # The DOM & type casting
// Just like normal javascript. it also works same way
// but below code throws error while accessing its property.
// const anchor = document.querySelector('a');
// we need to check if it presents then print value.
// if (anchor) {
//   console.log(anchor.href);
// }
// so we can try like below code. It knows that it returns a value.
var anchor = document.querySelector('a');
// when we hover on anchor it shows like this definition
// const anchor: HTMLAnchorElement;
// while trying to use anchor it list out anchor tags property.
console.log(anchor.href);
// when we hover form, it shows like below code
// const form: HTMLFormElement | null
// const form = document.querySelector('form');
// when we declare using className / ID attribute, it shows like below code
//  const form: Element | null
// const form = document.querySelector('.new-item-form');
// in order to consider as form element we can declare like below code
var form = document.querySelector('.new-item-form');
// now form can be able to access its property
// console.log(form.children);
// #12 Classes
// like javascript we can use classes in typescript
// #14 public, private and readonly
var Invoice = /** @class */ (function () {
    // it will throw error because we did't initialize values,
    // becuase each class will have different values.
    // all of the classes are public if we did't specify property
    // readonly client: string; // inside class itself it can be readonly we cannot change value. it throws errot
    // private details: string; // we cannot access by outside but it access inside the class 
    // public amount: number; // we can specify like this also. it can be access and modify outside and inside the classes
    // we can initialise inside constructor, once this done above thrown will be gone
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    // we can define inshortend like below
    function Invoice(
    // below if we take away readonly, private and public, then throws error
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = 'test'; // inside class also cannot be modify.
        return "".concat(this.client, " owes Rs. ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
// we can create object using above class
var invOne = new Invoice('Ajana', 'work on the mario website', 300);
var invTwo = new Invoice('Nammalvar', 'work on the Nammalvar website', 450);
console.log(invOne); // print invOne project
console.log(invTwo); // print invTwo project
// we can use this as object in array
// let invoices: string[] = []; // this will allow only strings
// to allow only invoice class allowed, we should use like below code
var invoices = []; // instead of string we use Invoice class
// invoices.push('hello'); // this code ll throw because it takes only invoice object
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = 'yoshi'; // it throws error because it is readonly mode cannot be changed
invTwo.amount = 800;
console.log(invoices);
// we can use this class initiase like below
invoices.forEach(function (inv) {
    // console.log(inv.client, inv.amount, inv.details); //  inv.details -> throws error
    console.log(inv.client, inv.amount);
    console.log(inv.format());
});
// inputs
var type = document.querySelector('#type');
var toForm = document.querySelector('#tofrom');
var detailsList = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toForm.value, detailsList.value, amount.valueAsNumber // in case if we knew return must be number we can use valueAsNumber.
    // usually log will convert as string. but here we specify as number. so it convers as number
    );
    // we can check in browser console now amount will be convert as number. So it will be looked like blue color
});
