
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderTodoList() {

    let todoRenderHTML = '';

    for(let i=0 ; i<todoList.length ; i++) {

        const todoObject = todoList[i];
        if(todoObject.name != '' && todoObject.dueDate!='') {
            const name = todoObject.name;
            const dueDate = todoObject.dueDate;
            const html = 
            `
            <div>${dueDate}</div>
            <div>${name}</div>
                
                <button class='deleteButton' onclick='
                todoList.splice(${i},1);
                renderTodoList();
                localStorage.remove(todoList[${i}]);
                '>Delete</button>`;
            
            todoRenderHTML += html;
        }
    }

    document.querySelector('.todoRender').innerHTML = todoRenderHTML;

    localStorage.setItem('todoList',JSON.stringify(todoList));

}

function insertTodo() {

    let inputTodo = document.querySelector('.todoOne');
    let todoDueDate = document.querySelector('.dueDateCalender');

    let name = inputTodo.value;
    let dueDate = todoDueDate.value;
    
    todoList.push(
        {
            name : name,
            dueDate : dueDate
        }
    );

    //console.log(todoList);

    localStorage.setItem('todoList',JSON.stringify(todoList));

    inputTodo.value = '';
    todoDueDate.value = '';

    renderTodoList();
}

function enterToInsert(event) {

    if(event.key === 'Enter') {

        insertTodo();
    }
}