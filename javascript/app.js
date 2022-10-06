

import { allCards, roundCards } from "./data.js"
import renderCards from "./renderCards.js"
import shuffleDeck from "./shuffleDeck.js"
import dealCards from "./dealCards.js"
import updateCardPositions from "./updateCardPositions.js"


//MAIN PARAMETERS

const nPlayers = 4
const nCategories = 4


let deck
let activePlayer = 0
let sideDeck


document.addEventListener("DOMContentLoaded", () => {


    // SHUFFLE ALL THE CARDS
    deck = shuffleDeck(allCards)
    sideDeck = shuffleDeck(roundCards)
    console.log(deck)

    // GIVE EACH PLAYER ALL COLORS


    deck = dealCards(deck, nPlayers, nCategories)





    renderCards(deck, nPlayers, sideDeck)
    updateCardPositions(deck, nPlayers, activePlayer)

})

document.getElementById("passTurn").addEventListener("click", (e) => {
    document.getElementById("passTurnWrapper").style.backgroundColor = "red"
})
