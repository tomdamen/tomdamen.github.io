import cardsOfPlayer from "./cardsOfPlayer.js"

export default function dealCards(deck, nPlayers, nCategories) {

    //DEFINE WHICH CATEGORIES ARE TO BE DEALT
    let categories = []
    for (let i = 0; i < nCategories; i++) {
        categories.push(i + 1)
    }


    for (let n = 0; n < nPlayers; n++) {
        deck.forEach((e, index) => {

            //  MAKE SET OF CURRENT DEALT TO CARDS
            let cardsNow = cardsOfPlayer(deck, n + 1)

            //  FIND CATEGORIES THAT STILL NEED TO BE DEALT
            let categoriesNow = []
            cardsNow.forEach(card => {
                categoriesNow.push(parseInt(card.category))
            })
            let requiredCategories = categories.filter(x => !categoriesNow.includes(x))
            //  LOOK FOR CARDS THAT ARE NEEDED

            if (e.player == 0 && requiredCategories.includes(parseInt(e.category))) {
                deck[index].player = n + 1

            }
        })
    }

    return deck

}

