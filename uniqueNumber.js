var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let len = numbers.length;
let uniqueNumbers = [];
let temporaryNumber = numbers[0];

uniqueNumbers.push(temporaryNumber);
for (let i = 1; i < len; i++) {
  if (temporaryNumber != numbers[i]) {
    temporaryNumber = numbers[i];
    uniqueNumbers.push(temporaryNumber);
  }
}

console.log(uniqueNumbers);
