// #15. Interfaces
;
// define variable using interface
// if we did't declare variable with IsPersion structure then it will throw error
const me = {
    name: 'ajana',
    age: 32,
    speak(text) {
        console.log(text);
    },
    spend(amt) {
        console.log('I spent ', amt);
        return amt;
    },
    // skills: [] // if we add extra property then it rgeows errir
};
const greetPerson = (person) => {
    // person. will automatically suggest list variables initiated in interface
    console.log('hello ', person.name);
};
greetPerson(me);
export {};
