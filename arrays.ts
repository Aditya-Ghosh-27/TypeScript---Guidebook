// Given an array of positive integers as input, return the maximum value in the array

function maxInteger(arr: number[]): number{
    let max = arr[0]
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(maxInteger([7,4,2]));

// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filterUser(users: User[]){
    return users.filter(x => x.age >= 18);
}

console.log(filterUser([{
    firstName: "Aditya",
    lastName: "Ghosh",
    age: 20
}, {
    firstName: "Tanisha",
    lastName: "Shaw",
    age: 19
}]))