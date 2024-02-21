import {getCurrentTime} from "./time.js"

export const contents = document.getElementsByClassName("contents")[0]
export const todoWrite = document.getElementsByClassName("write")[0]

export function createTodoText()
{
    const text = document.createElement("span")
    text.innerText = todoWrite.value
    text.className = "todo"

    return text
}

export function createCheckbox(todo, complateTime)
{
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    checkbox.addEventListener("click", (event) =>
    {
        if (event.target.checked)
        {
            todo.style.textDecorationLine = "line-through"
            complateTime.textContent = "완료: " + getCurrentTime()

        }
        else
        {
            todo.style.textDecorationLine = "none"
            complateTime.textContent = ''
        }
    })

    return checkbox
}

export function createStartTime()
{
    const time = document.createElement("span")
    time.textContent = "작성: " + getCurrentTime()
    time.className = "metadata"

    return time
}

export function createCompleteTime()
{
    const time = document.createElement("span")
    time.className = "metadata"

    return time
}

export function createDeleteButton()
{
    const button = document.createElement("button")
    button.type = "button"
    button.innerText = "삭제"
    button.className = "delete"

    button.addEventListener("click", (event) =>
    {
        contents.removeChild(event.target.parentNode)
    })

    return button
}
