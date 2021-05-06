/* =====================================================The Game Component================================================ */
/* import react so I can create a React component*/
import React from "react";

/* importing components */
import Card from "./Card";
import Alert from "./Alert";
import AlertLose from "./AlertLose";
import Timer from "./Timer";
import GameButtons from "./GameButtons";

/* The game component defines the logic in the game*/
class Game extends React.Component {
  /* =========================================The State Object================================== */
  //constructing instance of Game and its children
  constructor() {
    //calling the parent
    super();

    //array of card fronts
    const frontCard = [
      "😀",
      "😊",
      "😴",
      "😘",
      "😍",
      "👀",
      "😨",
      "😉",
      "😎",
      "❤",
      "🙈",
      "😅",
      "👍",
      "💩",
    ];

    //concat used to combine the two strings returned, Math.random() - 0.5 to shuffle the array
    const cardDeck = frontCard
      .concat(frontCard)
      .sort(() => Math.random() - 0.5)
      /* map method to return the following properties 
      for each element in the array*/
      .map((front) => {
        return {
          content: front,
          revealed: false,
        };
      });

    /* defining the state object and its properties, */
    this.state = {
      cardDeck: cardDeck,
      initialCard: null,
      winner: false,
      loser: false,
      count: 100,
    };
  }

  /* ===========================================The Functions ========================================== */

  //=============================================called when user clicks on a card
  toggleReveal(cardIndex) {
    /*if the initialCard state property is null then the card clicked is
    set as the initial card  */
    if (this.state.initialCard === null) {
      this.setState({ initialCard: cardIndex });
    } else {
      /* else variables to store the indexes and the contents of the first and the 
      second cards clicked are defined*/
      const initialCardIndex = this.state.cardDeck[this.state.initialCard];
      const initialCardContent = initialCardIndex.content;

      const nextCardIndex = this.state.cardDeck[cardIndex];
      const nextCardContent = nextCardIndex.content;

      /* check if the cards match and not of the same index */
      if (
        initialCardContent === nextCardContent &&
        initialCardIndex !== nextCardIndex
      ) {
        /* if true it resets the initialCard and the cards remain revealed */
        this.setState({ initialCard: null });
      } else if (initialCardIndex === nextCardIndex) {
        /* resets the initialCard if user clicks on the same card twice*/
        alert("Please, Don't click on the same card twice.");
        this.setState({ initialCard: null });
      } else {
        //when the cards  don't match then they will be flipped back after 0.5 seconds
        setTimeout(() => {
          this.flipCard(this.state.initialCard, false);
          this.flipCard(cardIndex, false);
          //then reset initialCard here too
          this.setState({ initialCard: null });
        }, 500);
      }
    }

    /* the flipCard function is called here passing the index of the card clicked and 
    the updated cardDeck state property and it's revealed property of the index of CardIndex */
    this.flipCard(cardIndex, !this.state.cardDeck[cardIndex].revealed);
  } //end of the toggleReveal function

  //=================================================================passing the cardIndex
  flipCard(cardIndex) {
    /*updates the state of the cardDeck property*/
    this.setState({
      /* map through the deck and pass front and index as arguments */
      cardDeck: this.state.cardDeck.map((front, index) => {
        /* if the cardIndex if the same as an index in cardDeck the state of that card
        will be updated*/
        if (index === cardIndex) {
          return {
            content: front.content,
            revealed: !front.revealed,
          };
        } else {
          //if false the state of the card will not be updated
          return front;
        }
      }),
    });

    //the checkWin function is called here
    this.checkWin();
  }

  //=================================================================check if user has won
  checkWin() {
    //after a second the following happens:
    setTimeout(() => {
      //a variable defined to store the current state of CardDeck array
      const deck = this.state.cardDeck;

      //a empty array defined
      const revealedCards = [];

      /* a loop to return deck and an index of i with it's revealed property value
      and each element returned gets pushes into the revealed Cards array */
      for (let i = 0; i < deck.length; i++) {
        revealedCards[i] = deck[i].revealed;
      }

      //boolean to determine if all the data in the revealed cards are not equal to false
      const allRevealed = revealedCards.every(function (element) {
        return element !== false;
      });

      /* check if allRevealed is true */
      if (allRevealed === true) {
        //when true the toggleInterval is stopped
        clearInterval(this.toggleInterval);

        //then the winner state property is updated to true
        this.setState({ winner: true });
      }
    }, 1000);
  }

  //=================================================================check if user has lost
  checkLose() {
    //if statement true then the loser state property is updated to it's opposite value
    if (this.state.count === 0) {
      this.setState({ loser: !this.state.loser });
    }
  }

  //=================================================================hide the winner alert
  hide() {
    //winner state property is updated to false then the reloads page
    this.setState({ winner: false });
    window.location.reload(false);
  }

  //======================================================================restart the game
  restart() {
    //reloads page
    window.location.reload(false);
  }

  //=================================================================hide the winner alert
  hideLoser() {
    //loser state property is updated to false then the page is reloaded
    this.setState({ loser: false });
    window.location.reload(false);
  }

  /* ===========================================The Render Method ========================================== */
  render() {
    /* statement returns all imported components and the props references are assigned state properties*/
    /* the alert components are rendered conditionally if false an empty div is rendered instead */
    return (
      <div className="parent">
        {this.state.winner ? (
          <Alert
            hide={() => {
              this.hide();
            }}
            winner={this.state.winner}
          />
        ) : (
          <div></div>
        )}
        {this.state.loser ? (
          <AlertLose
            hideLoser={() => {
              this.hideLoser();
            }}
            loser={this.state.loser}
          />
        ) : (
          <div></div>
        )}
        <h1 className="heading">MEMORY GAME </h1>
        <Timer count={this.state.count} />
        <div className="gameBoard">
          {this.state.cardDeck.map((front, index) => (
            <div className="column" key={index}>
              <Card
                toggleReveal={() => {
                  this.toggleReveal(index);
                }}
                content={front.content}
                revealed={front.revealed}
              />
            </div>
          ))}
        </div>
        <div>
          <GameButtons
            restart={() => {
              this.restart();
            }}
          />
        </div>
      </div>
    );
  } //end of render

  //using this method to call toggleInterval when game component is mounted/ when the page loads
  componentDidMount() {
    //setInterval method used to update the state of the count property every second
    this.toggleInterval = setInterval(() => {
      this.setState((prevState) => ({
        /* the previous count value has 1 subtracted from it */
        count: prevState.count - 1,
      }));

      //this function also gets called every second
      this.checkLose();
    }, 1000);
  }
} //end of Game Component

export default Game;
//export component so it can be imported
