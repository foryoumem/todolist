import {layoutTodolist} from "./layout.js"
import {addTodoItem} from "./event.js"
import {refreshData} from "./server.js"

export function generateTodolist(text)
{
    // 같은 이름의 Todolist가 생성됐으면 제외
    const todolists = document.querySelectorAll(".route")
    todolists.forEach(iter =>
    {
        if (iter.getElementsByClassName("header").innerText == text)
        {
            return
        }
    })

    const options = {
        "createHeader": text,
        "createTodoAddButton": addTodoItem(),
    }

    const todolist = layoutTodolist(options)
    refreshData(todolist)

    return todolist
}