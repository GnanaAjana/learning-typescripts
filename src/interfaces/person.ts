// #15. Interfaces

// Javascript doesn't have interfaces
// typescript have interface to provide structure
// it is similar to class

export interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
};

// define variable using interface
// if we did't declare variable with IsPersion structure then it will throw error
const me: IsPerson = {
  name: 'ajana',
  age: 32,
  speak(text: string): void {
    console.log(text);
  },
  spend(amt: number): number {
    console.log('I spent ', amt);
    return amt;
  },
  // skills: [] // if we add extra property then it rgeows errir
}

const greetPerson = (person: IsPerson) => {
  // person. will automatically suggest list variables initiated in interface
  console.log('hello ', person.name);
}


greetPerson(me);