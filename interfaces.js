function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function renderTodo(_a) {
    var todo = _a.todo;
    return ({ todo: todo, : .title } < /h1>
        < h2 > { todo: todo, : .description } < /h2>
        < /div>);
}
