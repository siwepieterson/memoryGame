describe('memory game to match 2 similar cards', function () {
  it('should check if all cards shuffle', () => {
    let i = 0
    while (i < cards.length) {
      shuffleNow[i] == cards[i] ? true : false
    }
    let result = ;
    expect(result).toBe(shuffleNow != cards);
  });
  it('should check for matching cards', () => {
    shuffleNow
    flipCard(4)
    cards[firstCard] = cards[secondCard]
    let result = checkForMatch();
    expect(result).toBe(true)
  });
  })