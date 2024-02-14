// Using a type alias we can create a custom type
type Employee = {
    readonly id: number,  
    name: string
    retire: (date : Date) => void;
} // This is PascalCase way od naming vairables


let employed: Employee = {
     id: 1, 
     name: "Aditya ",
     retire: (date : Date) => {
        console.log(date);  
     }
    };