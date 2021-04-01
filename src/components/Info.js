/* =================================================================The Info Component======================================================== */

/* importing react component*/
import React from "react";

/* importing the link container to navigate to different pages */
import { LinkContainer } from "react-router-bootstrap";

/* importing Bootstrap button */
import Button from "react-bootstrap/Button";

/* importing images */
import game from "./images/game.png";
import gameButtons from "./images/gameButtons.PNG";
import click from "./images/click.JPG";
import youLose from "./images/youLose.JPG";
import youWin from "./images/youWin.JPG";

/*The info functional component simply displays images and text informing the user how to play the game.
It also has buttons to play the game or head to the home page*/
function Info() {
  /* link to bootstrap so that the styles are activated */
  return (
    <div className="header">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <h1 className="heading">The game objective</h1>
      <br />
      <img className="screenshots" src={game} alt="The Game" />
      <p className="headerTxt">
        When you click the play button on this page or the home page the the
        game starts and the count down starts. The main objective is to click on
        the cards that match to reveal the cards. You have 100 seconds to reveal
        all the cards on the page.
      </p>
      <br />
      <img className="screenshots" src={click} alt="Clicking" />
      <p className="headerTxt">
        To match the cards you have to click on one card and click on another
        one. If you click on the same card twice you'll get an alert as shown in
        the above image. If the cards don't match they return to being faced
        down. If the cards you clicked match then the cards will remain
        revealed.
      </p>
      <br />
      <img className="screenshots" src={gameButtons} alt="Game Buttons" />
      <p className="headerTxt">
        The buttons below the cards navigate you to this page, the next one
        restarts the game and the quit button will end the game and direct you
        to the home page.
      </p>
      <br />
      <img className="screenshots" src={youLose} alt="Lose" />
      <p className="headerTxt">
        If the you fail to reveal all the cards within 100 seconds then you lose
        and will have to click on the try again button and the countdown timer
        will reset.
      </p>
      <br />
      <img className="screenshots" src={youWin} alt="Win" />
      <p className="headerTxt">
        If you reveal all the cards before the countdown timer reaches 0 then
        you win! Ready to play? Click on the play button below to play or on the
        home button to return to the home page.
      </p>
      <LinkContainer to="/">
        <Button className="info">Home</Button>
      </LinkContainer>
      <LinkContainer to="/memory-game">
        <Button className="play">Play</Button>
      </LinkContainer>
    </div>
  ); //end of return
} //end of Info function

export default Info;
//exporting Info component
