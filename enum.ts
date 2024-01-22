const small = 1;
const medium = 2;
const large = 3;

// Using an enum we can join a list of related constants

enum size{small = 1, medium, large}
let mySize : size = size.medium;