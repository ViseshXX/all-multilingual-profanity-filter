const wordLists = require('../Badwords/badWords.json');

const checkBadWord = (userInput, langCode) => {
  const words = wordLists[langCode];

  if (!words || !Array.isArray(words)) {
    return false;
  }

  const cleanedInput = userInput.trim().toLowerCase();
  return words.includes(cleanedInput);
};

const filterBadWords = (input, langCode) => {
  let textTemp = input.replace(/[.',|!|?']/g, '');
  const wordsToFilter = textTemp.toLowerCase().split(/\s+/); // Split the input into an array of words
  const filteredWords = wordsToFilter.map(word => {
    if (checkBadWord(word, langCode)) {
      return `${word[0]}*****${word[word.length-1]}`; // Replace bad words with *****
    }
    return word;
  });

  return filteredWords.join(' '); // Join the array back into a string
};

module.exports = { checkBadWord, filterBadWords };
