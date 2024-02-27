import {layoutTodolist} from "./layout.js"
import {addTodoItem, moveTodoItem, deleteItem, itemOptions} from "./event.js"
import {refreshData} from "./server.js"

export function generateTodolist(text)
{
    const options = {
        "createHeader": text,
        "createTodoAddButton": addTodoItem(),
    }

    const todolist = layoutTodolist(options)
    refreshData(todolist)

    return todolist
}