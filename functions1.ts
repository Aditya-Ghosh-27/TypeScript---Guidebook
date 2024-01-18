// Functions in typescript
function addTwo(num : number){
    // If you dont't mention type then we could send in a string and then also convert it to uppercase which we should not be able to do
    return num + 2;
}

addTwo("hi") // error
addTwo(5)

function getUpper(val : string){
    return val.toUpperCase();
}

getUpper(5); // error
getUpper("aditya");

function signUpUser(name : string, email : string, isPaid : boolean){
}

signUpUser(1, 2, 3); // error
signUpUser("adtiya", "adi27.ghosh@gmail.com", true);

let logInUser = (name : string, email : string, isPaid : boolean) => {}

logInUser("aditya", "adinana.com"); // error