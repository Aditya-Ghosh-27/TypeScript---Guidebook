// Write a function that greets a user given their first name. 
// Argument - firstName
// Logs - Hello {firstName}
// Doesn’t return anything

//  Solution
function greet(firstName: string){
    console.log("Hello "+ firstName);
}
greet("Aditya");

// Write a function that calculates the sum of two functions

function Sum(a: number, b: number ){
    return a + b;
}
Sum(5, 6);

// Return true or false based on if a user is 18+
// This is example of type inference
function isLegal(age: number){
    if(age > 18){
        return true;
    } else{
        return false;
    }
}
console.log(isLegal(2));

// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(func: () =>void){
    setTimeout(func, 1000);
}
delayedCall(function(){
    console.log("Hi there!")
})