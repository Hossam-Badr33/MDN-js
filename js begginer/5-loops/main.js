const fruits = ["apple", "banana", "orange"];
for (const fruit in fruits) {
  console.log(fruits[fruit]);
  console.log(fruit);
}
for (const name of fruits) {
  console.log(name);
}
//for...of loop gives you a way to get each item in the array
