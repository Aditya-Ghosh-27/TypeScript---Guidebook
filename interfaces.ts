// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}
function isLegal(user: User){
    if(user.age >= 18){
        return true;
    } else{
        return false;
    }
}

// Assignment #2 - Create a React component that takes todos as an input and renders them

interface TodoType {
    title: string,
    description: string,
    done: boolean
}

interface TodoInput {
    todo: TodoType
}

function renderTodo({ todo }: TodoInput){
    return (
        <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
        </div>
    )

}