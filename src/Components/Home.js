import React, { Component } from "react"
import { Observer } from "mobx-react"
import { AiTwotoneEdit } from "react-icons/ai"
import { Card } from "react-bootstrap"

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
                        <h5 className="mb-0">{data.task}</h5>
                        <p className="mb-0">{data.completed}</p>
                        <Link
                          className="float-right"
                          to={{
                            pathname: "/edit",
                          }}
                        >
                          <AiTwotoneEdit
                            size={20}
                            onClick={() => value.setIndex(index)}
                          />
                        </Link>
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
