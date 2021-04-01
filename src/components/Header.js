/* ============================================================Header Component=============================================== */
/* importing react so I can create a react component */
import React from "react";

/* importing the link container to navigate to different pages */
import { LinkContainer } from "react-router-bootstrap";

/* import bootstrap button */
import Button from "react-bootstrap/Button";

/* importing image */
import game from "./images/game.png";

/*The component welcomes users and lets them play the game or head to the info page to learn more about the game*/
export default function Header() {
  return (
    <div className="header">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <h1 className="heading">Test Your Memory!</h1>
      <br />
      <img className="homeImg" src={game} alt="The Game" />
      <p className="headerTxt">
        Play the emoji memory card game and test your memory. Simply click on
        the play button below or the info button to learn more about the rules
        and how to win!
      </p>
      <LinkContainer to="/info">
        <Button className="info">help</Button>
      </LinkContainer>
      <LinkContainer to="/memory-game">
        <Button className="play">Play</Button>
      </LinkContainer>
    </div>
  ); //end of Header Component
} //end of header
