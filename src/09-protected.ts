export class Animal {
  constructor(private name: string) {}
  move() {
    console.log('Moving alone!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('do something!');
  }
}

export class Dog extends Animal {
  constructor(name: string, protected _owner: string) {
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
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
  }
}

const toby = new Dog('toby', 'tobias');
console.log(toby.greeting());
toby.woof(2);
console.log("toby's owner ->", toby.owner);
toby.move();
