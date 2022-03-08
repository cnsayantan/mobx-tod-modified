import { action, makeObservable, observable } from "mobx"

class TodoStore {
  todos = []

  activeIndex = "null"
  constructor() {
    makeObservable(this, {
      todos: observable,
      activeIndex: observable,
      addTask: action,
      setIndex: action,
      updateTask: action,
      deleteTask: action,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("You clicked submit.")
  }
  addTask(task, option) {
    this.todos.push({
      task: task,
      completed: option,
    })
    console.log(this.todos)
  }
  setIndex(index) {
    this.activeIndex = index
  }
  updateTask(updatedOption) {
    this.todos[this.activeIndex].completed = updatedOption
  }
  deleteTask(deletedOption) {
    this.todos.splice(deletedOption)
  }
}

const todoStore = new TodoStore()
export default todoStore
