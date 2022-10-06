
import makeInitialCard from "./makeInitialCard.js"


export default function renderCards(deck, nPlayers) {
    for (let i = 0; i < deck.length; i++) {
        makeInitialCard(deck[i], 500, 500, 100 - i, deck, nPlayers)
    }


}

