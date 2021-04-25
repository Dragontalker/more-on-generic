// const printStrings = (arr: string[]): void => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// const printNumbers = (arr: number[]): void => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

const printAnything = <T>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// For strings
printAnything<string>(['a', 'b', 'c']);

// For numbers
printAnything<number>([1, 2, 3]);