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
