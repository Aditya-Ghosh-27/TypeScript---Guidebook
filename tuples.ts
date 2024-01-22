// Tuples in broad category is an array with some restrictions applied onto it

const user : (string | number)[] = [1, "aditya"];

// 1, "Aditya"
let users: [number, string] = [1,"Aditya"];
user.push(1); // only loophole in typescript
