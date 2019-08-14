/**
 * @method getLetterMatchCount
 * @param {string} guessedWord 
 * @param {string} secretWord 
 * @return {number} letterMatchCount
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretWordSet = new Set(secretWord.split(''));
  const guessedWordSet = new Set(guessedWord.split(''));
  return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length;
}