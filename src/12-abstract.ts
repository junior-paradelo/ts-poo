import { Animal, Dog } from './09-protected';

// with abstract class u can't create a object
//const animal = new Animal('elite');
//animal.greeting();

const cheis = new Dog('cheis', 'brian');
cheis.greeting();
cheis.woof(2);
