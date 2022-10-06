

export default function shuffleDeck(nonShuffledDeck) {


    let shuffledDeck = []
    let nCards = nonShuffledDeck.length
    let shuffleArray = []


    //MAKE ARRAY OF RANDOM NUMBERS UP TO N
    while (shuffleArray.length < nCards) {
        let r = Math.floor(Math.random() * nCards);
        if (shuffleArray.indexOf(r) === -1) shuffleArray.push(r);
    }

    //MANIPULATE DECK TO BE SHUFFLED
    for (let i = 0; i < nCards; i++) {
        shuffledDeck.push(nonShuffledDeck[shuffleArray[i]])
    }


    return shuffledDeck


}