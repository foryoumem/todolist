import {createTodoList, createCompleteList, createTodoItem, createTodoCheckbox, createTodoText, createTodoDeleteButton, createWriteTime, createCompleteTime, createTodolistRoute, createWriteArea, createListArea, createHeader, createTodoWriter, createTodoAddButton, } from "./element.js"

// options key
// 파라미터가 필요할 경우 함수명을 키값으로 사용
export function layoutTodoItem(options)
{
    const item = createTodoItem()

    const checkbox = createTodoCheckbox(options.createTodoCheckbox)
    const todoText = createTodoText(options.createTodoText)
    const deleteButton = createTodoDeleteButton(options.createTodoDeleteButton)
    const writeTime = createWriteTime(options.createWriteTime)
    const completeTime = createCompleteTime(options.createCompleteTime)
    
    item.appendChild(checkbox)
    item.appendChild(todoText)
    item.appendChild(deleteButton)
    item.appendChild(writeTime)
    item.appendChild(completeTime)

    return item
}