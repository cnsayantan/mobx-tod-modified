import "./App.css"
import Parent from "./Parent"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Parent} exact />
        <Route path="/edit" component={Edit} exact />
      </Switch>
    </div>
  )
}

export default App
