const colors = ["green", "blue", "yellow"];
const allColors = ["red", "purple", ...colors];
const newColors = ["black", "white"];

allColors.push(...newColors);

console.log(allColors);