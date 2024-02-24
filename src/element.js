export function createTodolistRoute()
{
    const div = document.createElement("div")
    div.classList = "route"

    return div
}

export function createHeader(text)
{
    const header = document.createElement("h1")
    header.innerText = text
    header.className = "header"

    return header
}

export function createWriteArea()
{
    const div = document.createElement("div")
    div.className = "write-area"

    return div
}

export function createListArea()
{
    const div = document.createElement("div")
    div.className = "list-area"

    return div
}

export function createTodoWriter()
{
    const input = document.createElement("input")
    input.type = "text"
    input.className = "write"

    return input
} 

export function createTodoAddButton(event)
{
    const button = document.createElement("button")
    button.type = "button"
    button.innerText = "추가"
    button.className = "add"
    button.addEventListener("click", event)

    return button
}

export function createTodoList()
{
    const div = document.createElement("div")
    div.className = "todo-list"

    return div
}

export function createCompleteList()
{
    const div = document.createElement("div")
    div.className = "comp-list"

    return div
}

export function createTodoItem()
{
    const div = document.createElement("div")
    div.className = "todo-item"

    return div
}

export function createTodoText(text)
{
    const span = document.createElement("span")
    span.innerText = text
    span.className = "todo-text"

    return span
}

export function createTodoCheckbox(event)
{
    const input = document.createElement("input")
    input.type = "checkbox"
    input.className = "todo-check"
    input.addEventListener("click", event)

    return input
}

export function createTodoDeleteButton(event)
{
    const button = document.createElement("button")
    button.type = "button"
    button.innerText = "삭제"
    button.className = "todo-delete"
    button.addEventListener("click", event)

    return button
}

export function createDate(time)
{
    const span = document.createElement("span")
    span.innerText = time
    span.className = "date"

    return span
}


export function createWriteTime(time)
{
    const span = document.createElement("span")
    span.innerText = time
    span.className = "write-time"

    return span
}

export function createCompleteTime(time)
{
    const span = document.createElement("span")
    span.innerText = time
    span.style.display = "none"
    span.className = "comp-time"

    return span
}