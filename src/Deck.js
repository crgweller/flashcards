const Card = require("./Card");

class Deck {
    constructor(cards) {
    this.cards = cards
}

countCards() {
    return this.cards.length
    };
}