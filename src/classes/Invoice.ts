// #14. Module

// Like es6 typescript support module
// module is used to mintain code
// In tscongfig file edit module and target to es6

// Now export these classes and and import in app.ts
// in index.html edit script to type='module';
// even though it is maintain as separate module but it request as indivial file
// in order to avoid multiple request we can use webpack

export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // this.client = 'test'; // inside class also cannot be modify.
    return `${this.client} owes Rs. ${this.amount} for ${this.details}`;
  }
}