import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

    state = {
      date: new Date()
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      )
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
    }

    tick() {
      this.setState({
        date: new Date()
      })
    }

  

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button>Click me</button>
      </div>
    )
  }

}

ReactDOM.render(
  <Clock date/>,
  document.getElementById("root")
)
