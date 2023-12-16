export default class LocalStorage {
  constructor() {
    this.init();
  }
  init() {}
  /**
   * this method adds a task in local storage
   * 
   * @param {TaskModel} task
   * @param {TaskModel[]} tasks
   */
  addTask(task, tasks) {
    tasks = this.loadTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }
  saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  /**
   * this method modifies the status of a task in local storage
   * 
   * @param {number} taskId
   * @param {string} status
   */
  modifyTaskStatus(taskId, status) {
    let tasks = this.loadTasks();
    let task = tasks.find((task) => task.id == taskId);
    task.status = status;
    tasks.splice(tasks.indexOf(task), 1);
    tasks.push(task);
    this.saveTasks(tasks);
  }
  /**
   * this method loads the tasks from local storage
   * 
   * @returns {TaskModel[]}
   */
  loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      return [];
    }
  }
  /**
   * this method returns the last id of the tasks
   * 
   * @returns {number}
   */
  getLastId() {
    const tasks = this.loadTasks();
    let lastId = 0;
    tasks.forEach((task) => {
      if (task.id > lastId) {
        lastId = task.id;
      }
    });
    return lastId;
  }
}