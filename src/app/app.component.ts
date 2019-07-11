import { Component } from '@angular/core';
import * as deckConstants from './commons/constants/suits-and-faces';

interface DeckInterface {
  suit: string;
  face: string;
  color: string;
}

const CARDS_TO_SHOW = 5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  deck: Deck = new Deck();
  deckToShow: Array<DeckInterface> = [];
  constructor() {
  }

  deal(): void {
    this.deck.deal(CARDS_TO_SHOW);
    this.deckToShow = this.deck.getDeckToShow();
  }

  clear(): void {
    this.deck.clear();
    this.deckToShow = this.deck.getDeckToShow();
  }
}

class Deck {
  private _deck = this._initDeck();
  private _deckToShow: Array<DeckInterface> = [];

  deal(num): void {
    const deckToShow: Array<DeckInterface> = [];
    for (let i = 0; i < num; i++) {
      const randomIndex = getRandomInt(0, this._deck.length);
      if (!this._deck[randomIndex]) {
        this._deck = this._initDeck();
      }
      deckToShow.push(this._deck[randomIndex]);
      this._deck.splice(randomIndex, 1);
    }

    this._deckToShow = [
      ...this._deckToShow,
      ...deckToShow,
    ];
  }

  clear(): void {
    this._deckToShow = [];
  }

  getDeckToShow(): Array<DeckInterface> {
    return this._deckToShow;
  }

  private _initDeck(): Array<DeckInterface> {
    const deck = [];
    deckConstants.suits.forEach(suit => {
      deckConstants.faces.forEach(face => {
        deck.push({suit, face, color: deckConstants.suitsColors[suit]});
      });
    });
    return deck;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
