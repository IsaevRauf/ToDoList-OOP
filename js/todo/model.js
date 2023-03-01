export default class Model {
  constructor() {
    this.tasks = [];
    this.loadFromLocalStorage();
  }

  addTask(value) {
    let id = 1;
    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1]["id"] + 1;
    }
    const newTask = {
      id: id,
      status: "activity",
      text: value,
    };
    this.tasks.push(newTask);
    this.saveToLocalStorage();
    return newTask;
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("tasks");
    //есть в локал стораже по этому ключу что то есть то :
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  changeStatus(id) {
    const taskElement = this.tasks.find((value) => {
      if (value.id == id) {
        if (value.status == "activity") {
          value.status = "done";
        } else if (value.status == "done"){
          value.status = "activity";
        }
        this.saveToLocalStorage();
      }
    });
  }
  findTask(id) {
    const task = this.tasks.find(function (task) {
      if (task.id == id) {
        return true;
      }
    });
    return task;
  }
}
