import playCard from "./playCard.js"

export default function makeInitialCard(cardData, posX, posY, height, deck, nPlayers) {


    let newCard = document.createElement("div")
    let newCardFront = document.createElement("div")
    let newCardBack = document.createElement("div")


    newCard.className = "card"
    newCard.id = cardData.name


    // STYLING OF FRONT SIDE

    newCardFront.className = "cardContent front"
    newCardFront.style.boxShadow = `inset 0 0 0 5px ${cardData.colorLight}`

    let paddingBoxFront = document.createElement("div")
    let frontQuestion = document.createElement("p")
    let frontImage = document.createElement("img")
    let frontCategory = document.createElement("p")

    paddingBoxFront.className = "paddingBox"
    frontQuestion.innerText = cardData.textContent
    frontQuestion.style.color = cardData.colorDark

    frontImage.src = cardData.imageFront
    frontImage.height = "100"

    frontCategory.innerText = cardData.categoryName
    frontCategory.className = "whitePadding"
    frontCategory.style.color = cardData.colorDark


    paddingBoxFront.append(frontQuestion, frontImage, frontCategory)

    newCardFront.append(paddingBoxFront)


    // newCardFront.innerHTML = cardData.content

    // STYLING OF BACK SIDE

    newCardBack.className = "cardContent back"
    newCardBack.style.backgroundColor = cardData.colorDark

    let paddingBoxBack = document.createElement("div")
    let backQuestion = document.createElement("p")
    let backImage = document.createElement("img")
    let backCategory = document.createElement("p")

    paddingBoxBack.className = "paddingBox"
    backQuestion.innerText = "Gesprekskaart"
    backQuestion.className = "gesprekskaart"

    backImage.src = cardData.imageBack
    backImage.height = "100"

    backCategory.innerText = cardData.categoryName
    backCategory.className = "whitePadding"
    backCategory.style.color = cardData.colorDark

    paddingBoxBack.append(backQuestion, backImage, backCategory)

    newCardBack.append(paddingBoxBack)







    newCard.style.left = `${posX}px`
    newCard.style.top = `${posY}px`
    newCard.style.zIndex = height
    newCardFront.addEventListener("click", (e) => playCard(e.target.parentNode.parentNode, deck, nPlayers, cardData.player))


    newCard.append(newCardFront, newCardBack)

    playingField.append(newCard)


}