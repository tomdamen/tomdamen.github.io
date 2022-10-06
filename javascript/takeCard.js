import updateCardPositions from "./updateCardPositions.js"

export default function takeCard(category, deck, activePlayer, nPlayers) {

    let nCardToTake
    let stopInput = document.getElementById("dealStop")
    if (stopInput.checked === false) {
        nCardToTake = 1
    } else {
        nCardToTake = 0
    }

    deck.forEach((e, index) => {
        let requiredCategories = [parseInt(category)]
        //  LOOK FOR CARDS THAT ARE NEEDED

        if (e.player == 0 && requiredCategories.includes(parseInt(e.category)) && nCardToTake > 0) {

            deck[index].player = activePlayer
            requiredCategories = []
            nCardToTake--
        }
    })

    document.getElementById("passTurnWrapper").style.backgroundColor = "grey"



    // UPDATE PLAYER IN BOTTOM LEFT

    let playerIndicator = document.getElementById("player")
    let playerNow = ((activePlayer) % nPlayers) + 1
    playerIndicator.innerText = `Player: ${playerNow}`
    // activePlayer++
    // if (activePlayer == nPlayers) activePlayer = 0

    updateCardPositions(deck, nPlayers, activePlayer)

    return activePlayer
}