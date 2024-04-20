export class Animal {
  constructor(private name: string) {}
  move() {
    console.log('Moving alone!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, private _owner: string) {
    super(name);
    this._owner = _owner;
  }

  get owner() {
    return this._owner;
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const ralph = new Animal('ralph');
ralph.move();
console.log(ralph.greeting());

const toby = new Dog('toby', 'tobias');
console.log(toby.greeting());
toby.woof(5);
console.log("toby's owner ->", toby.owner);
