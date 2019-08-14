import { getLetterMatchCount } from './'

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  it('should return correct count when there is no matching letter', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0)
  })
  it('should return the correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3)
  })
  it('should return correct count when there are duplicate letter in the guessWord', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3)
  })
});