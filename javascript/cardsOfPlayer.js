

export default function cardsOfPlayer(deck, player) {

    let cards = []
    deck.forEach(e => {
        if (e.player == player) {
            cards.push(e)
        }
    })

    return cards

}