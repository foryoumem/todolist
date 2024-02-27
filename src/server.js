import {itemOptions} from "./event.js"
import {layoutTodoItem} from "./layout.js"

const host = "http://localhost:3000"

// const data = {
//     "id": "",
//     "value": "",
//     "creation_time": "",
//     "complete_time": "",
//     "is_complete": true
// }

export function postData(data)
{
    fetch(host + "/todo", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('error:', error))
}
export function deleteData(data)
{
    fetch(host + `/todo/${data.id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(data => console.log('delete: ', data))
        .catch(error => console.error(error))
}
export function patchData(data)
{
    const update = {
        "complete_time": data.complete_time,
        "is_complete": data.is_complete
    }
    fetch(host + `/todo/${data.id}`, {method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(update)})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

export function getData()
{
    fetch(host + "/todo")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
}


export function refreshData(route)
{
    fetch(host + "/todo")
        .then(response => response.json())
        .then(data =>
        {
            const todoList = route.getElementsByClassName("todo-list")[0]
            const compList = route.getElementsByClassName("comp-list")[0]
            todoList.replaceChildren()
            compList.replaceChildren()

            data.forEach((iter, index) =>
            {
                const options = new itemOptions()
                options.id = iter.id
                options.createTodoText = iter.value
                options.createTodoCheckbox.isChecked = iter.is_complete
                options.createWriteTime = "작성: " + iter.creation_time
                options.createCompleteTime = "완료: " + iter.complete_time

                const todo = layoutTodoItem(options)
                
                if (iter.is_complete)
                {
                    compList.appendChild(todo)
                }
                else
                {
                    todoList.appendChild(todo)
                }
            })
        })
        .catch(error => console.error('Error:', error));
}