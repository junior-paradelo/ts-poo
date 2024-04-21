export class MyService {
  static instance: MyService | null = null;

  private constructor(private _name: string) {}

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('create an instance...');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }

  get name() {
    return this._name;
  }
}

const myService1 = MyService.create('service 1');
const myService2 = MyService.create('service 2'); // here ignore name bc instance exist

console.log('myService1.name', myService1.name);
console.log('myService2.name', myService2.name);
console.log('are equals?', myService1 === myService2);
