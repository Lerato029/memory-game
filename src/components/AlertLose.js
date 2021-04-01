/* ============================================================AlertLose Component=============================================== */
/* import React so I can create react component */
import React from "react";

/* importing bootstrap button */
import Button from "react-bootstrap/Button";

/* The Alert component that alerts the user that they have lost the game */
class AlertLose extends React.Component {
  render() {
    /*when clicked the button will call the hideLoser function 
    whose logic will be defined in the game parent component*/
    return (
      <div className="alert lose">
        <h1 className="alertHeading">Time's Up! You Lose</h1>
        <div className="result">🤦‍♀️</div>
        <Button onClick={this.props.hideLoser} className="restart ">
          Try Again
        </Button>
      </div>
    );
  }
}

export default AlertLose;
//export component so it can be imported
