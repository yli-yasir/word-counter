import { debounce } from "lodash";
// Just use typescript?

/**
 * @typedef {Object} textStats
 * @property {number} wordCount
 * @property {number} charCount
 * @property {wordFrequency[]} wordFrequencies
 */

/**
 * @typedef {Object} wordFrequency
 * @property {string} word
 * @property {string} count
 */

/**
 * @typedef {"asc" | "desc"} sortOrder
 */

/**
 * @param {string} text
 * @returns {textStats}
 */
export function evaluateTextStats(text) {
  const words = text.match(/\w[\w-]*/g) || [];
  return {
    wordCount: words.length,
    charCount: text.length,
    wordFrequencies: getWordFrequencies(words),
  };
}

/**
 * @param {string[]} words
 * @param {sortOrder} sortOrder
 * @returns {wordFrequency[]}
 */
function getWordFrequencies(words, sortOrder = "desc") {
  const records = {};
  const wordFrequencies = [];
  for (let word of words) {
    word = word.toLowerCase();
    if (records[word]) {
      records[word].count++;
    } else {
      const wordFrequency = { word, count: 1 };
      records[word] = wordFrequency;
      wordFrequencies.push(wordFrequency);
    }
  }
  return sortWordFrequencies(wordFrequencies, sortOrder);
}

/**
 * @param {wordFrequency[]} wordFrequencies
 * @param {sortOrder} sortOrder
 * @returns {wordFrequency[]}
 */
function sortWordFrequencies(wordFrequencies, sortOrder) {
  const sortOrderModifier = sortOrder === "desc" ? -1 : 1;
  return wordFrequencies.sort(
    (a, b) => (a.count - b.count) * sortOrderModifier
  );
}

export const debouncedSetInputText = debounce(
  (funcName, text) => funcName(text),
  1000
);
