import axios from "axios";

const endpoint = `http://word-counter-api.herokuapp.com`;

/**
 *
 * @param {string} word
 * @returns {string[]}
 */
export async function getSynonyms(word) {
  const { data } = await axios.get(`${endpoint}/lookup/${word.trim()}`);
  const synonyms = [];
  const record = {};
  for (const entry of data) {
    for (let synonym of entry.synonyms) {
      synonym = synonym.toLowerCase();
      if (!record[synonym]) {
        record[synonym] = true;
        synonyms.push(synonym.replaceAll("_", " "));
      }
    }
  }
  return synonyms;
}
