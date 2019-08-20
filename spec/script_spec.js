var jsdom = require("jsdom");
const game = require("../script");
let cardClick = game.cardClick;
let cards = game.cards;
let firstCard = game.firstCard;
let secondCard = game.secondCard;
let timer = setInterval(game.checkForMatch, 800);

const document = new jsdom.JSDOM('<center><table border="1"><tr id="Mycards"  class="back-image"><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(0)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(1)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(2)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(3)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(4)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(5)" /></td></tr><br><tr id="Mycards2" class="second-row"><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(6)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(7)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(8)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(9)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(10)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(11)" /></td></tr></table><center></div>');
    global.document = document.window.document;
    global.window = document.window;
    global.navigator = document.window.navigator;

describe("memory game functionality", function() {

  beforeEach(function() { 
    const dom = new jsdom.JSDOM('<center><table border="1"><tr id="Mycards"  class="back-image"><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(0)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(1)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(2)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(3)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(4)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(5)" /></td></tr><br><tr id="Mycards2" class="second-row"><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(6)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(7)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(8)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(9)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(10)" /></td><td><img src="file:///home/busi/Downloads/Images/africa.png" onclick="flipCard(11)" /></td></tr></table><center></div>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });


  });

  describe("shuffle", () => {
    it('should check if all cards shuffle', () => {
      let shuffle = game.shuffle([1,2,3,4]);
      expect(shuffle).not.toEqual([1,2,3,4]);
    });
  });

describe("flipCards", () => {
  it('should be defined', () => {
    expect(game.flipCard).toBeDefined();
  })

it('should flip first card', () => {
  let cardClick = game.flipCard(1);
  expect(cardClick).toBe(1);
})

});

describe("checkForMatch", () => {
  it("should be defined", () => {
    expect(game.checkForMatch).toBeDefined();
  });

  it('should check for matching cards', () => {      
    game.cards[game.firstCard] = game.cards[game.secondCard]
    let result = game.checkForMatch();
    expect(result).toBe(true)
  });
});