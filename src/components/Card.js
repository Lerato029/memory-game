/* ============================================================Card Component=============================================== */
/* import React so I can create component */
import React from "react";

/*component return a div element that conditionally returns the front className if the card is revealed  */
class Card extends React.Component {
  render() {
    /* content variable defined */
    let content;
    //if revealed true then return content, else an empty string
    if (this.props.revealed) {
      //passing content props property in the parent Game component
      content = this.props.content;
    } else {
      content = "";
    }
    //when div is clicked the toggleReveal function is called whose functionality will be defined in Game.js
    return (
      <div
        onClick={this.props.toggleReveal}
        className={`Card ${this.props.revealed ? "front" : ""} `}
      >
        {content}
      </div>
    );
  }
}

export default Card;
//export component to be imported
