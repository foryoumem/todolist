import {layoutTodolist} from "./layout.js"
import {addTodoItem} from "./event.js"

export function generateTodolist(text)
{
    const options = {
        "createHeader": text,
        "createTodoAddButton": addTodoItem(),
    }
    return layoutTodolist(options)
}