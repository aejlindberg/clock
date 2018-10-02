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

    stopClock = () => {
      clearInterval(this.timerID)
    }

    startClock = () => {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      )
    }

  render() {
    return (
      <div>
        <h1>The time is:</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.stopClock}>Stop</button>
        <button onClick={this.startClock}>Start</button>
      </div>
    )
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
