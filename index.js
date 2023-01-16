const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'}
]

const cardBackImgPath = '/images/card-back-blue.png'

function createCard(cardItem){
    // card divs
    const cardElem = screateElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    // add classs to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    //add class to front card element 
    addClassToElement(cardFrontElem, 'card-front')

    //add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    //add src attribute and appropriate value to img element - back of card
    addScrToImageElem(cardBackElem, cardBackmgPath)

    //add scr attribute and appropriate value to img element - front of card
    addScrToImageElem(cardFrontElem, cardItem.imagePath)
}
function createElement(elemType){
    return document.createElement(elemType)
}

function addClassTeElement(){
    elem.classList.add(className)
}

function addIdToElement(elem, id){
    elem.id = id
}

function addScrToImageElem(imgElem, src){
    imgElem.src = src
}