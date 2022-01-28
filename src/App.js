import InputField from "./components/Input";
import { Flex, Box } from "@chakra-ui/react";
import CountStats from "./components/CountStats";
import WordAccordion from "./components/WordAccordion";
import { useState, useEffect } from "react";
import useTextData from "./hooks/useTextData";
function App() {
  const [inputText, setInputText] = useState("");
  const { topUsedWords, wordCount, charCount } = useTextData(inputText);
  console.log(topUsedWords);

  return (
    <Box display={"flex"} justifyContent={"center"} bg={"#f5f5f5"} h={"100vh"}>
      <Flex w={{ md: "80%", base: "95%" }} direction={"column"} rowGap={"10px"}>
        <InputField
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <CountStats wordCount={wordCount} charCount={charCount} />
        <WordAccordion words={topUsedWords} />
      </Flex>
    </Box>
  );
}

export default App;
