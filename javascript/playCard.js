import cardsOfPlayer from "./cardsOfPlayer.js"
import takeCard from "./takeCard.js"

export default function playCard(card, deck, nPlayers, activePlayer) {


    console.log(card.firstChild)
    if (card.firstChild.className === "paddingBox") {
        card = card.parentNode
    }

    let activeCardOld = document.getElementById(card.id)

    let activeCard = activeCardOld.cloneNode(true)

    activeCardOld.parentNode.replaceChild(activeCard, activeCardOld);


    activeCard.style.top = "500px"
    activeCard.style.left = "300px"
    console.log(activeCard.firstChild)
    activeCard.firstChild.removeEventListener("click", (e) => playCard(e.target.parentNode.parentNode, deck, nPlayers, cardData.player))
    let numOnPile = cardsOfPlayer(deck, nPlayers + 1).length
    activeCard.style.zIndex = parseInt(numOnPile)
    let index
    deck.find((obj, i) => {
        if (obj.name === card.id) {
            deck[i].player = nPlayers + 1
            index = i
        }
    })
    console.log(index)

    takeCard(deck[index].category, deck, activePlayer, nPlayers)






    return activePlayer



}