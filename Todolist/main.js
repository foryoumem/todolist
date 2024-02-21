import {contents, todoWrite, createTodoText, createCheckbox, createStartTime, createCompleteTime, createDeleteButton, } from "./src/object.js"

const uploadButton = document.getElementsByClassName("add")[0]

function run()
{
    if (todoWrite.value == '') return

    // 요소 생성
    const content = document.createElement("div")
    const todoText = createTodoText()
    const startTime = createStartTime()
    const completeTime = createCompleteTime()
    const deleteButton = createDeleteButton()
    const checkbox = createCheckbox(todoText, completeTime)

    // Todo 작성창 초기화
    todoWrite.value = ''

    // 노드 연결
    content.appendChild(checkbox)
    content.appendChild(todoText)
    content.appendChild(deleteButton)
    content.appendChild(startTime)
    content.appendChild(completeTime)
    contents.appendChild(content)
}


uploadButton.addEventListener("click", run)