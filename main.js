import {generateTodolist} from "./src/generate.js"

const body = document.getElementsByTagName("body")[0]

run()

function run()
{
    body.appendChild(generateTodolist("todolist"))
}