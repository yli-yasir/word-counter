import { evaluateTextStats } from "../utils";
import { useEffect, useState } from "react";

const useTextData = (text) => {
  const [textData, setTextData] = useState({});

  useEffect(() => {
    setTextData(evaluateTextStats(text));
  }, [text]);

  return textData;
};

export default useTextData;
