import React, { Component } from "react"
import { Button } from "react-bootstrap"
import { Observer } from "mobx-react"
import todoStore from "../../Store/TodoStore"
import { Link } from "react-router-dom"
class Update extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: todoStore.todos[todoStore.activeIndex].completed,
      options: [
        {
          optionValue: "Yes",
          boolean: true,
        },
        {
          optionValue: "No",
          boolean: false,
        },
      ],
    }
    console.log(todoStore.todos.completed)

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(e) {
    this.setState({ selectedOption: e.target.value })
    console.log("selected " + this.state.selectedOption)
  }
  render() {
    return (
      <>
        <h1 className="ms-3 mt-5 pb-3">Please Update Your Todo Status</h1>
        <Observer>
          {() => (
            <div className="update-wrapper m-3 d-flex flex-row justify-content-between align-items-center">
              <h5 className="mb-0 text-capitalize">
                {todoStore.todos[todoStore.activeIndex].task}
              </h5>
              <select
                className="select-todo"
                name="cars"
                id="cars"
                form="toDoForm"
                onChange={this.handleSelect}
              >
                <option
                  selected={
                    this.state.selectedOption ===
                    this.state.options[0].optionValue
                      ? true
                      : false
                  }
                  value={this.state.options[0].optionValue}
                >
                  {this.state.options[0].optionValue}
                </option>
                <option
                  selected={
                    this.state.selectedOption ===
                    this.state.options[1].optionValue
                      ? true
                      : false
                  }
                  value={this.state.options[1].optionValue}
                >
                  {this.state.options[1].optionValue}
                </option>
              </select>
              <br />
              <Link
                className="updateBtn"
                to={{
                  pathname: "/",
                }}
              >
                <Button
                  size="sm"
                  onClick={() =>
                    todoStore.updateTask(this.state.selectedOption)
                  }
                >
                  Update
                </Button>
              </Link>
            </div>
          )}
        </Observer>
      </>
    )
  }
}
export default Update
