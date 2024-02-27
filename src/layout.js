import {createTodoList, createCompleteList, createTodoItem, createTodoCheckbox, createTodoText, createTodoDeleteButton, createWriteTime, createCompleteTime, createTodolistRoute, createWriteArea, createListArea, createHeader, createTodoWriter, createTodoAddButton, } from "./element.js"


// options key
// 파라미터가 필요할 경우 함수명을 키값으로 사용
export function layoutTodoItem(options)
{
    const item = createTodoItem()
    item.value = options.id

    const checkbox = createTodoCheckbox(options.createTodoCheckbox.event, options.createTodoCheckbox.isChecked)
    const todoText = createTodoText(options.createTodoText)
    const deleteButton = createTodoDeleteButton(options.createTodoDeleteButton)
    const writeTime = createWriteTime(options.createWriteTime)
    const completeTime = createCompleteTime(options.createCompleteTime)
    
    // 체크박스 상태에 따른 작성, 완료 시간 표시
    if (options.createTodoCheckbox.isChecked)
    {
        completeTime.innerText = options.createCompleteTime
        completeTime.style.display = "block"
        writeTime.style.display = "none"
    }
    else
    {
        completeTime.style.display = "none"
        writeTime.style.display = "block"   
    }

    item.appendChild(checkbox)
    item.appendChild(todoText)
    item.appendChild(deleteButton)
    item.appendChild(writeTime)
    item.appendChild(completeTime)

    return item
}

// options key
// 파라미터가 필요할 경우 함수명을 키값으로 사용
export function layoutTodolist(options)
{
    const route = createTodolistRoute()
 
    // 제목, 작성 영역, 목록 영역을 생성해서 루트에 추가
    // 작성 영역에는 글쓰기 인풋과 작성한 글을 게시하는 버튼
    // 목록 영역에는 todolist와 completelist 
    const header = createHeader(options.createHeader)
    const writeArea = createWriteArea()
    const listArea = createListArea()
    route.appendChild(header)
    route.appendChild(writeArea)
    route.appendChild(listArea)



    // 글쓰기, 게시 버튼을 작성 영역에 추가
    const writer = createTodoWriter()
    const addButton = createTodoAddButton(options.createTodoAddButton)
    writeArea.appendChild(writer)
    writeArea.appendChild(addButton)


    // todolist와 completelist를 목록 영역에 추가
    // todolist에는 작성 영역에서 게시한 아이템이 나열되는 곳
    // completelist에는 todolist에서 체크박스를 통해 체크된 아이템이 이동되는 곳 
    const todoList = createTodoList()
    const compList = createCompleteList()
    listArea.appendChild(todoList)
    listArea.appendChild(compList)

    return route
}