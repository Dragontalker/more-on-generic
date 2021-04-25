// class Car {
//   print() {
//     console.log('I am a car');
//   }
// }

// class House {
//   print() {
//     console.log('I am a house');
//   }
// }

interface Printable {
  print(): void;
}

const printHousesOrCars = <T extends Printable>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}