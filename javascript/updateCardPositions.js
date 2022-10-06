import cardsOfPlayer from "./cardsOfPlayer.js"


export default function updateCardPositions(deck, nPlayers, activePlayer) {



    //TODO Animatie maken van kaarten uitdelen

    // let allCards = document.getElementsByClassName("card")
    // console.log(allCards)
    // for (let i = 0; i < allCards.length; i++) {
    //     allCards[i].style.transition = "translate 0.5s ease-in-out"
    // }

    for (let n = 0; n < nPlayers; n++) {
        //  FIND CARDS FOR PLAYER N
        let currentCards = cardsOfPlayer(deck, n + 1)

        switch ((n - activePlayer + nPlayers) % nPlayers) {
            case 0:
                currentCards.forEach((card, i) => {
                    let activeCard = document.getElementById(card.name)
                    activeCard.style.top = "800px"
                    activeCard.style.left = `${250 + 100 * i}px`

                    activeCard.firstChild.style.transform = "rotateY(0deg)"
                    activeCard.lastChild.style.transform = "rotateY(-180deg)"

                    activeCard.classList.add("active")

                    // activeCard.addEventListener("click", (e) => playCard(e.target.parentNode.parentNode, deck, nPlayers, n + 1))



                })
                break;
            case 1:
                currentCards.forEach((card, i) => {
                    let activeCard = document.getElementById(card.name)
                    activeCard.style.top = `${250 + 100 * i}px`
                    activeCard.style.left = "0px"

                    activeCard.firstChild.style.transform = "rotateY(180deg)"
                    activeCard.lastChild.style.transform = "rotateY(0deg)"

                    activeCard.classList.remove("active")
                })
                break;
            case 2:
                currentCards.forEach((card, i) => {
                    let activeCard = document.getElementById(card.name)
                    activeCard.style.top = "0px"
                    activeCard.style.left = `${250 + 100 * i}px`

                    activeCard.firstChild.style.transform = "rotateY(180deg)"
                    activeCard.lastChild.style.transform = "rotateY(0deg)"

                    activeCard.classList.remove("active")
                })
                break
            case 3:
                currentCards.forEach((card, i) => {
                    let activeCard = document.getElementById(card.name)
                    activeCard.style.top = `${250 + 100 * i}px`
                    activeCard.style.left = "800px"

                    activeCard.firstChild.style.transform = "rotateY(180deg)"
                    activeCard.lastChild.style.transform = "rotateY(0deg)"

                    activeCard.classList.remove("active")
                })
                break;
        }


    }

}