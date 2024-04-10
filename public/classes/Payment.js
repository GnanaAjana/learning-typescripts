export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = 'test'; // inside class also cannot be modify.
        return `${this.recipient} is owed Rs. ${this.amount} for ${this.details}`;
    }
}
