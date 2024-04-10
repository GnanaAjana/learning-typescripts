import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // this.client = 'test'; // inside class also cannot be modify.
    return `${this.recipient} is owed Rs. ${this.amount} for ${this.details}`;
  }
}