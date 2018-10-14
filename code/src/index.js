import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

    state = {
      date: new Date()
    }

// This adds the sec counter
    componentDidMount() {
      this.startClock()
    }

    componentWillUnmount() {
      this.stopClock()
    }

    tick() {
      this.setState({
        date: new Date()
      })
    }

// This stops the clock
    stopClock = () => {
      clearInterval(this.timerID)
    }

// This starts the clock
    startClock = () => {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      )
    }

    render() {
      const dayTime = this.state.date.getHours()
      if (dayTime >= 7 && dayTime < 19) {
        document.getElementById("myPage").style.backgroundImage = "url(/day.png)"
      } else {
        document.getElementById("myPage").style.backgroundImage = "url(/night.png)"
      }
      return (
        <div className="wrapper">
          <div className="clockContainer">
            <h1>{this.state.date.toLocaleTimeString()}</h1>
          </div>
          <div className="buttonContainer">
            <button id="buttonStop" onClick={this.stopClock}>Stop</button>
            <button id="buttonStart" onClick={this.startClock}>Start</button>
          </div>
        </div>
      )
    }
}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
