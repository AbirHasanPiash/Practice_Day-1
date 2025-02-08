let numbersDivisibleBy3And5 = [];

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    numbersDivisibleBy3And5.push(i);
  }
}

console.log(numbersDivisibleBy3And5);
