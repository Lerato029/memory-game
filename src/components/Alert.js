/* ============================================================Alert (Winner) Component=============================================== */
/* import React so I can create react component */
import React from "react";

/* importing bootstrap button */
import Button from "react-bootstrap/Button";

/* The Alert component that alerts the user that they have won the game */
class Alert extends React.Component {
  render() {
    /*when clicked the button will call the hide function 
    whose logic will be defined in the game parent component*/
    return (
      <div className="alert">
        <h1 className="alertHeading">You Win!</h1>
        <div className="result">🏆</div>
        <Button variant="info" onClick={this.props.hide}>
          Close
        </Button>
      </div>
    );
  }
}

export default Alert;
//export component so it can be imported
