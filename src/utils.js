import axios from "axios";

export async function getWordData(word) {
  return await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`
  );
}

export function aggregateWordSynoyms(wordData) {
  const synonyms = [];
  for (const meaning of wordData.meanings) {
    for (const definition of meaning.definitions) {
      synonyms.push(...definition.synonyms);
    }
  }
  return synonyms;
}

export function getTextData(text) {
  const words = text.match(/\w[\w-]*/g);
  return {
    wordCount: words.length,
    charCount: text.length,
    topUsedWords: getTopUsedWords(getWordUsageCount(words)),
  };
}

function getWordUsageCount(words) {
  const counts = {};
  for (const word of words) {
    counts[word] = counts[word] ? counts[word] + 1 : 1;
  }
  return counts;
}

function getTopUsedWords(wordUsageCount, limit = 10) {
  const topUsedWords = [];
  for (const [word, count] of Object.entries(wordUsageCount)) {
    topUsedWords.push({ word, count });
  }
  return topUsedWords.sort((a, b) => b.count - a.count).slice(0, limit);
}
