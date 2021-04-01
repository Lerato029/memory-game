/* =======================================The Timer Component======================================================== */
/* importing react so I can create a react component */
import React, { Component } from "react";

/* the timer component displays the countdown */
class Timer extends Component {
  render() {
    return <p className="timer">Seconds Left: {this.props.count}s</p>;
  }
}

export default Timer;
//exporting component so it can be imported
