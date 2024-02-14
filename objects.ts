// let employee = { id: 1};
// employee.name = 'Tanisha<3'
// In javascript this is perfectly valid, but in ts it will give error

let employee: {
    readonly id: number,  // readonly property restricts us from accidentally changing this property
    name: string
    retire: (date : Date) => void;
} = {
     id: 1, 
     name: "Aditya ",
     retire: (date : Date) => {
        console.log(date);
     }
    };

// readonly example 
// employee.id = 0