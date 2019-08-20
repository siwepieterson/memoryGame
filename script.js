let firstCard, secondCard;
let cardClick = 0;
let match = 0;
let timer = 0;

// images stored in an array and assigned to a value
let cards = [];
cards[0] = "file:///home/busi/Downloads/Images/namibia.png";
cards[1] = "file:///home/busi/Downloads/Images/swaziland.png";
cards[2] = "file:///home/busi/Downloads/Images/kenya.png";
cards[3] = "file:///home/busi/Downloads/Images/namibia.png";
cards[4] = "file:///home/busi/Downloads/Images/swaziland.png";
cards[5] = "file:///home/busi/Downloads/Images/kenya.png";
cards[6] = "file:///home/busi/Downloads/Images/egypt.png";
cards[7] = "file:///home/busi/Downloads/Images/southAfrica.png";
cards[8] = "file:///home/busi/Downloads/Images/nigeria.png";
cards[9] = "file:///home/busi/Downloads/Images/egypt.png";
cards[10] = "file:///home/busi/Downloads/Images/southAfrica.png";
cards[11] = "file:///home/busi/Downloads/Images/nigeria.png";

// function to shuffle the cards is created
let shuffleNow;

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

shuffleNow = shuffle(cards);

// function to flip the card is created 

function flipCard(card) {
    if (cardClick == 0) {
        firstCard = card;
        document.images[card].src = cards[card];
        cardClick = 1;
    }
    else if (cardClick == 1) {
        cardClick = 2;
        secondCard = card;
        document.images[card].src = cards[card];
        timer = setInterval(checkForMatch, 800);
    }
    return cardClick;
};
// function to check if the cards match is created
function checkForMatch() {
    clearInterval(timer);
    cardClick = 0;
    if (cards[secondCard] == cards[firstCard]) {
        match++;
         if (match++ == (cards.length -1)) {
             alert('BOSSO KE MANG...WENA!!!'); 
             location.reload();
         }
         return true

    } else {
        document.images[firstCard].src = "file:///home/busi/Downloads/Images/africa.png";
        document.images[secondCard].src = "file:///home/busi/Downloads/Images/africa.png";
        return false;
    }
}
{

};

module.exports = {
    flipCard: flipCard,
    checkForMatch: checkForMatch,
    shuffle: shuffle,
    firstCard: firstCard,
    secondCard: secondCard,
    cards: cards
}



