let totalMarks = 101;

if (totalMarks >= 80 && totalMarks <= 100) {
  console.log("You got A+");
} else if (totalMarks >= 70 && totalMarks < 80) {
  console.log("You got A");
} else if (totalMarks >= 60 && totalMarks < 70) {
  console.log("You got A-");
} else if (totalMarks >= 40 && totalMarks < 60) {
  console.log("You got B");
} else if (totalMarks >= 0 && totalMarks < 40) {
  console.log("You got C");
} else {
  console.log("Invalid");
}
