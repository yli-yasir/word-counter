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
    setTextData(getTextData(text));
  }, [text]);

  return textData;
};

export default useTextData;
