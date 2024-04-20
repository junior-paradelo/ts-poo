export class MyDate {
  constructor(
    private year: number = 1994,
    private month: number = 9,
    private day: number = 8
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  }

  // bad method but only for learn
  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2024, 4, 9);
console.log('(2024, 4, 9) =>', myDate.printFormat());
myDate.add(3, 'days');
console.log(myDate.printFormat());
//myDate.year = 1999; -> here error because it's private :)
const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());
