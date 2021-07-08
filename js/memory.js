class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;

  }

  shuffleCards() {
    if (this.cards===undefined) return undefined;
    //let shuffledCards = cards;
    

    for (let m=(this.cards.length-1);m>=0;m--){
      let randomIndex=Math.floor(Math.random()*(m+1));
      //We make a copy of the picked card
      let interimCard= this.cards[randomIndex];
      //Remove it form the original deck
      this.cards.splice(randomIndex,1);
      //Put the chosen element to the end of the deck
      this.cards.push(interimCard);
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked+=1;
    console.log(card1);
    console.log(card2);

    if(card1===card2){
     this.pairsGuessed+=1;
     return true;
    }

    return false;  
  }

  checkIfFinished() {
    if (this.pairsGuessed===this.cards.length/2) return true;

    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
