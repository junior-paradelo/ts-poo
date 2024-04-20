class MyMath {
  static PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log('Math.PI', Math.PI);
console.log('MyMath.PI', MyMath.PI);

const numbers = [2, 5, 6, 8, 2, 3, 5, 9, 0];
console.log('Math.max(...numbers)', Math.max(...numbers));
console.log('MyMath.max(...numbers)', MyMath.max(...numbers));

const negativeNumbers = [-6, -1, -2, -7, -5];
console.log('Math.max(...negativeNumbers)', Math.max(...negativeNumbers));
console.log('MyMath.max(...negativeNumbers)', MyMath.max(...negativeNumbers));
