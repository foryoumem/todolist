import {getCurrentTime, } from "./time.js"
import {layoutTodoItem, } from "./layout.js"
import {postData, deleteData, patchData} from "./server.js"

export class itemOptions
{
    constructor(id = 0)
    {
        this.id = 0
        this.createTodoText = ""
        this.createTodoCheckbox = {event: moveTodoItem(), isChecked: false}
        this.createTodoDeleteButton = deleteItem()
        this.createWriteTime = "작성: " + getCurrentTime()
        this.createCompleteTime = ""
    }
}

export class dataOptions
{
    constructor()
    {
        this.value = ""
        this.creation_time = ""
        this.complete_time = ""
        this.is_complete = true
    }
}

export function addTodoItem()
{
    return (event) =>
    {
        const writeArea = event.target.parentNode
        const writer = writeArea.getElementsByClassName("write")[0]
        if (writer.value == "") return

        const options = new itemOptions()
        options.createTodoText = writer.value

        const item = layoutTodoItem(options)

        const data = new dataOptions()
        data.value = writer.value
        data.creation_time = getCurrentTime()
        data.complete_time = ""
        data.is_complete = false
        postData(data)

        const list = writeArea.parentNode.getElementsByClassName("todo-list")[0]
        list.appendChild(item)

        writer.value = ""
    }
}

export function moveTodoItem()
{
    return (event) =>
    {
        const checkbox = event.target

        // 현재 이벤트 타겟은 체크박스이므로 부모를 찾아서 이동해야함
        const item = checkbox.parentNode
        const completeTime = item.getElementsByClassName("comp-time")[0]
        const writeTime = item.getElementsByClassName("write-time")[0]
        const writeArea = item.parentNode.parentNode

        // 체크 상태이면 completeList로 이동하고 완료시간만 갱신해서 보여줌
        // 체크 해제이면 todoList로 이동하고 작성시간만 보여줌
        if (checkbox.checked)
        {            
            const data = new dataOptions()
            data.id = item.value
            data.complete_time = getCurrentTime()
            data.is_complete = true
            patchData(data)

            completeTime.innerText = "완료: " + data.complete_time
            completeTime.style.display = "block"
            writeTime.style.display = "none"

            const list = writeArea.getElementsByClassName("comp-list")[0] 
            list.appendChild(item)
        }
        else
        {
            const data = new dataOptions()
            data.id = item.value
            data.complete_time = ""
            data.is_complete = false
            patchData(data)

            completeTime.style.display = "none"
            writeTime.style.display = "block"          
            
            const list = writeArea.getElementsByClassName("todo-list")[0]
            list.appendChild(item)
        }
    }
}

export function deleteItem()
{
    return (event) =>
    {
        const item = event.target.parentNode
        const writeArea = item.parentNode.parentNode
        const todoList = writeArea.getElementsByClassName("todo-list")[0]
        
        const data = new dataOptions()
        data.id = item.value
        deleteData(data)
        
        if (item.parentNode == todoList)
        {
            todoList.removeChild(item)
        }
        else
        {
            const compList = writeArea.getElementsByClassName("comp-list")[0]
            compList.removeChild(item)
        }
    }
}