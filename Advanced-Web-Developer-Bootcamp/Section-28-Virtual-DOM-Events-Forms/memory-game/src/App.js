import React, { Component, Fragment } from 'react';
import './App.css';
import shuffle from 'shuffle-array';
import Header from './partials/Header';
import CardItem from './components/CardItem';

const CardState = {
  hiding: 0, // card is not being shown
  showing: 1, // card is shown, but doesn't have a match yet
  matching: 2 // card is shown, has a match
}

class App extends Component {
  constructor(props) {
    super(props);

    let cards = [
      { id: 0, cardState: CardState.hiding, backgroundColor: "red" },
      { id: 1, cardState: CardState.hiding, backgroundColor: "red" },
      { id: 2, cardState: CardState.hiding, backgroundColor: "navy"},
      { id: 3, cardState: CardState.hiding, backgroundColor: "navy"},
      { id: 4, cardState: CardState.hiding, backgroundColor: "green"},
      { id: 5, cardState: CardState.hiding, backgroundColor: "green"},
      { id: 6, cardState: CardState.hiding, backgroundColor: "yellow"},
      { id: 7, cardState: CardState.hiding, backgroundColor: "yellow"},
      { id: 8, cardState: CardState.hiding, backgroundColor: "black"},
      { id: 9, cardState: CardState.hiding, backgroundColor: "black"},
      { id: 10, cardState: CardState.hiding, backgroundColor: "purple"},
      { id: 11, cardState: CardState.hiding, backgroundColor: "purple"},
      { id: 12, cardState: CardState.hiding, backgroundColor: "orange"},
      { id: 13, cardState: CardState.hiding, backgroundColor: "orange"},
      { id: 14, cardState: CardState.hiding, backgroundColor: "lightblue"},
      { id: 15, cardState: CardState.hiding, backgroundColor: "lightblue"},
    ];

    cards = shuffle(cards);

    this.state = {
      cards,
      noClick: false,
      winMessage: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }

    const foundCard = this.state.cards.find(c => c.id === id);
    
    if (this.state.noClick || foundCard.cardState !== CardState.hiding) {
      return;
    }
    
    let noClick = false;
    
    let cards = mapCardState(this.state.cards, [id], CardState.showing);
    
    const showingCards =  cards.filter((c) => c.cardState === CardState.showing);
    
    const ids = showingCards.map(c => c.id);
    
    if (showingCards.length === 2 &&
        showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, CardState.matching);
    } else if (showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.hiding);
      
      noClick = true;
      
      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1 second
          this.setState({cards: hidingCards, noClick: false});
        }, 1000);
      });
      return;
    }
    
    this.setState({cards, noClick});
  }

  handleNewGame() {
    let cards = this.state.cards.map(c => ({
      ...c,
      cardState: CardState.hiding
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }

  render() {
    const cards = this.state.cards.map((card) => (
      <CardItem 
        key={card.id} 
        showing={card.cardState !== CardState.hiding} 
        backgroundColor={card.backgroundColor}
        onClick={() => {this.handleClick(card.id)}}
      />
    ))

    return (
      <Fragment>
        <Header onNewGame={this.handleNewGame} />
        {cards}
      </Fragment>
    );
  }
}

export default App;
