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
