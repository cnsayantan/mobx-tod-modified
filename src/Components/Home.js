import React, { Component } from "react"
import { Observer } from "mobx-react"
import { AiTwotoneEdit } from "react-icons/ai"
import { MdDeleteForever } from "react-icons/md"
import { Button, Card } from "react-bootstrap"

import { StoreContext } from "../index"
import AddTodo from "./AddTodo/AddTodo"

import { Link } from "react-router-dom"

import "./Home.scss"

class Home extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(value) => (
          <div className="Home">
            <AddTodo store={value} />
            <Observer>
              {() => (
                <div>
                  {value.todos.map((data, index) => (
                    <Card className="mt-3 mb-2" key={index}>
                      <Card.Body>
                        <h5 className="text-capitalize mb-0">{data.task}</h5>
                        <p className="mb-0">{data.completed}</p>
                        <div>
                          <Button
                            size="sm"
                            variant="outline-success"
                            className=""
                            onClick={() => value.setIndex(index)}
                          >
                            <Link
                              className="float-right"
                              to={{
                                pathname: "/update",
                              }}
                            >
                              <AiTwotoneEdit size={20} color="#198754" />
                            </Link>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            className="ms-2"
                            onClick={() => value.deleteTask(index)}
                          >
                            <MdDeleteForever size={20} color="red" />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              )}
            </Observer>
          </div>
        )}
      </StoreContext.Consumer>
    )
  }
}
export default Home
