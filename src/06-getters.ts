export class MyDate {
  constructor(
    private _year: number = 1994,
    private _month: number = 9,
    private _day: number = 8
  ) {}

  get day() {
    return this._day;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return true;
    return this._year % 4 === 0;
  }

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this._year}`;
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
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this._year += amount;
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
console.log('using get day() =>', myDate2.day);
console.log('isLeapYear? =>', myDate.isLeapYear);
console.log('isLeapYear? =>', myDate2.isLeapYear);
