var numbers = [1, 2, 3, 3, 4, 33, 4, 5, 6, 7, 8, 9, 10];
let maxNumber = numbers[0];
let len = numbers.length;

for (let i = 1; i < len; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log(maxNumber);
