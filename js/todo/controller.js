import Model from "./model.js";
import View from "./view.js";
const model = new Model();
const view = new View(model.tasks);

view.element.form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = model.addTask(view.element.input.value);
  view.renderTask(newTask);
  view.clearInput();
});

view.element.todoList.addEventListener("click", function (e) {
  if (e.target.hasAttribute("data-delete")) {
    const id = e.target.closest(".todo-item").id;
    const task = e.target.closest(".todo-item");
    view.removeTask(id);
    model.removeTask(task);
  }

  view.element.todoList.addEventListener("click", function (e) {
    if (e.target.getAttribute("type") == "checkbox") {
      const id = e.target.closest("li").id;
      model.changeStatus(id);
      view.changeStatus(id);
    }
  });
});
