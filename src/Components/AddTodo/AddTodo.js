import React, { Component } from "react"

import { Form, Row, Col, Button } from "react-bootstrap"

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { addtodo: "", option: "Yes", options: ["Yes", "No"] }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("You clicked submit.")
    this.props.store.addTask(this.state.addtodo, this.state.option)
    this.setState({ taskName: "", option: "Yes" })
  }

  handleSelect(e) {
    this.setState({ option: e.target.value })
    console.log("selected" + this.state.option)
  }

  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Control
              className="taskNameInput"
              value={this.state.addtodo}
              type="text"
              placeholder="Add Your Todo"
              onChange={(e) => {
                this.setState({ addtodo: e.target.value })
              }}
            />
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              name="cars"
              id="cars"
              form="toDoForm"
              onChange={this.handleSelect}
            >
              <option
                selected={
                  this.state.option === this.state.options[0] ? true : false
                }
                value={this.state.options[0]}
              >
                {this.state.options[0]}
              </option>
              <option
                selected={
                  this.state.option === this.state.options[1] ? true : false
                }
                value={this.state.options[1]}
              >
                {this.state.options[1]}
              </option>
            </Form.Select>
          </Col>
        </Row>
        <Button
          className="mt-3"
          variant="primary"
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </Form>
    )
  }
}
export default AddTodo
