window.addEventListener("load", e => {
  todoItemsRenderer();
});

const todoItemsRenderer = () => {
  const todoItems = getTodoItems();
  let todoItemsHtml = "";

  todoItems.forEach((element, index) => {
    todoItemsHtml += `
      <div class="box">
        <div class="task-container">
          <div class="task-title" id="task${index}">
            ${element.title}
          </div>
          <div class="task-links">
            <span class="icon" onclick="deleteTodoItem(${index})">
              <i class="fas fa-trash"></i>
            </span>
            <span class="icon" onclick="renderForm(${index})">
              <i class="fas fa-edit"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  });

  targetElement = document.getElementById("js-renderTodo");
  targetElement.innerHTML = todoItemsHtml;
};

const addTodoItem = title => {
  let todoItems = getTodoItems();

  const todoItem = {
    title,
    done: false
  };

  todoItems.push(todoItem);

  setTodoItems(todoItems);
  todoItemsRenderer();
};

const updateTodoItem = (index, title, done = false) => {
  let todoItems = getTodoItems();

  const todoItem = {
    title,
    done
  };
  todoItems[index] = todoItem;

  setTodoItems(todoItems);
  todoItemsRenderer();
};

const deleteTodoItem = index => {
  let todoItems = getTodoItems();
  todoItems.splice(index, 1);

  setTodoItems(todoItems);
  todoItemsRenderer();
};

const getTodoItems = () => {
  if (localStorage.getItem("todoItems")) {
    return JSON.parse(localStorage.getItem("todoItems"));
  } else {
    return new Array();
  }
};

const getTodoItem = index => {
  let todoItems = getTodoItems();
  return todoItems[index];
};

const setTodoItems = item => {
  localStorage.setItem("todoItems", JSON.stringify(item));
};

const outputTodoItems = () => {
  console.log(localStorage.getItem("todoItems"));
};

/* この先、命名どうにかする */
const addValue = () => {
  const targetInput = document.getElementById("js-input");
  addTodoItem(targetInput.value);
  targetInput.value = "";
};

const editValue = index => {
  const targetInput = document.getElementById(`js-editTask${index}`);
  updateTodoItem(index, targetInput.value);
  targetInput.value = "";
};

const done = index => {
  const title = getTodoItem(index).title;
  updateTodoItem(index, title, true);
};

const renderForm = index => {
  const targetElement = document.getElementById(`task${index}`);

  targetElement.innerHTML = `
    <input
      id="js-editTask${index}"
      class="input is-rounded"
      type="text"
      placeholder="タスク名"
      value="${getTodoItem(index).title}"
    />
    <button 
      class="button is-primary is-rounded text-center"
      onclick="editValue(${index})"
    >変更する</button>
  `;
};
