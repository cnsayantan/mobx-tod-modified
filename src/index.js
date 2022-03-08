import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Components/Home"
import Update from "./Components/Update/Update"
import todoStore from "./Store/TodoStore"

import reportWebVitals from "./reportWebVitals"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"

export const StoreContext = React.createContext()
let home = (
  <StoreContext.Provider value={todoStore}>
    <Home />
  </StoreContext.Provider>
)

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={home} />
      <Route path="update" element={<Update />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
)

reportWebVitals()
