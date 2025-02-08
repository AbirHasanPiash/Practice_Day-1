var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let len = friends.length;
let largestName = friends[0];

for (let i = 1; i < len; i++) {
  if (friends[i].length > largestName.length) {
    largestName = friends[i];
  }
}

console.log(largestName);
