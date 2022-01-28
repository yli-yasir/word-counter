import React from "react";
import { getTextData } from "../utils";
import { useEffect, useState } from "react";

const useTextData = (text) => {
  const [textData, setTextData] = useState({
    wordCount: 0,
    charCount: 0,
    topUsedWords: [],
  });

  useEffect(() => {
    const _textData = getTextData(text);
    _textData.topUsedWords = _textData.topUsedWords.map(
      ({ word, count }) => `${word} (${count})`
    );
    setTextData(_textData);
  }, [text]);

  return textData;
};

export default useTextData;
