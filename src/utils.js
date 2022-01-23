export function getTextData(string) {
  return {
    wordCount: string.match(/\w[\w-]*/g).length,
    charCount: string.length,
  };
}
