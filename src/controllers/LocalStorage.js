export default class LocalStorage {
  constructor() {
    this.init();
  }
  init() {}
  addTask(task, tasks) {
    tasks = this.loadTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }
  saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  modifyTaskStatus(taskId, status) {
    let tasks = this.loadTasks();
    let task = tasks.find((task) => task.id == taskId);
    task.status = status;
    tasks.splice(tasks.indexOf(task), 1);
    tasks.push(task);
    this.saveTasks(tasks);
  }
  loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      return [];
    }
  }
}