/* =======================================The GameButtons Component======================================================== */
/* import statement to create react component */
import React from "react";

/* importing the link container to navigate to different pages */
import { LinkContainer } from "react-router-bootstrap";

/* import bootstrap button */
import Button from "react-bootstrap/Button";

/* The GameButtons component contains all the essential buttons: 
to navigate to the info page, to restart the game and to quit */
class GameButtons extends React.Component {
  render() {
    /* the restart button will call the restart function when clicked 
    the functionality will defined in the parent Game component*/
    return (
      <div className="gameButtons">
        <LinkContainer to="/info">
          <Button className="info">help</Button>
        </LinkContainer>
        <Button onClick={this.props.restart} className="restart ">
          Restart
        </Button>
        <LinkContainer to="/">
          <Button className="quit ">Quit</Button>
        </LinkContainer>
      </div>
    );
  }
}

export default GameButtons;
//exporting component so it can be imported
