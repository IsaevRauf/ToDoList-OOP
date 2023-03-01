export default class View {
  constructor(tasks) {
    tasks.forEach((value) => {
      this.renderTask(value);
    });
  }

  element = {
    todoList: document.querySelector(".todo-list"),
    input: document.querySelector("#newTask"),
    form: document.querySelector(".input-form"),
    removeBtn: document.querySelector("[data-remove]"),
  };

  renderTask(objectTask) {
    let checked = "";
    let status = "";

    if (objectTask.status == "done") {
      checked = "checked";
      status = "completed";
    }

    const taskHTML = `
    <li id="${objectTask.id}" class="todo-item">
    <label class="todo-item-label">
      <input class="checkbox" type="checkbox" ${checked} />
      <span class="${status}">${objectTask.text}</span>
      <button data-delete class="btn btn-secondary btn-sm">Удалить</button>
    </label>
  </li>
    `;

    this.element.todoList.insertAdjacentHTML("beforeend", taskHTML);
  }
  clearInput() {
    this.element.input.value = "";
  }
  removeTask(id) {
    const taskElement = document.getElementById(id);
    taskElement.remove();
  }

  changeStatus(id) {
    // const taskElement = this.element.todoList.getElementById(id);
    const taskElement = this.element.todoList.querySelectorAll(".todo-item");
    taskElement.forEach((value) => {
      if (value.id == id) {
        value.querySelector("span").classList.toggle("completed");
      }
    });
    // const spanTextElement = taskElement.querySelector('span')
    // if(taskElement.status == 'done'){
    //   spanTextElement.classList.add('completed')
    // }else{
    //   spanTextElement.classList.remove('completed')
    // }
  }
}
